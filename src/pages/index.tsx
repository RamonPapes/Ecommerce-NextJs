import React, { useState, useEffect } from 'react';
import Produto from '@/components/produto';
import Carousel from '@/components/carrossel';

const Main = () => {
  const slides = ['banner1.png', 'banner2.png', 'banner3.png'];
  const [categorias, setCategorias] = useState<string[]>([]);
  const [produtosPorCategoria, setProdutosPorCategoria] = useState<{ [key: string]: Produto[] }>({});
  const [categoriaIndices, setCategoriaIndices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const produtosData: Produto[] = await res.json();
        const categoriasSet = new Set(produtosData.map((produto) => produto.category));
        const categoriasArray = Array.from(categoriasSet);
        const produtosPorCategoriaTemp: { [key: string]: Produto[] } = {};
        categoriasArray.forEach((categoria) => {
          produtosPorCategoriaTemp[categoria] = produtosData.filter((produto) => produto.category === categoria);
        });
        setCategorias(categoriasArray);
        setProdutosPorCategoria(produtosPorCategoriaTemp);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <main className="min-w-full">
      <div className="flex justify-center w-full flex-col items-center">
        <div className="w-[80%]">
          <Carousel slides={slides}></Carousel>
        </div>
        <div className="w-[80%]">
          {categorias.map((categoria) => {
            const currentIndex = categoriaIndices[categoria] || 0;
            const categoriaProdutos = produtosPorCategoria[categoria] || [];
            return (
              <div key={categoria}>
                <div className='w-full flex justify-start items-center'>
                  <h2 className='font-semibold'>{categoria}</h2>
                  <div className='flex items-center justify-center gap-3'>
                    {/* <button onClick={() => previewProduct(categoria)}>
                      <Icon icon={"fa:arrow-left"}></Icon>
                    </button>
                    <button onClick={() => nextProduct(categoria)}>
                      <Icon icon={"fa:arrow-right"}></Icon>
                    </button> */}
                  </div>
                </div>
                <div className='flex overflow-hidden flex-wrap justify-between gap-y-16 my-6'>
                  {categoriaProdutos.map((produto, index) => (
                    <Produto
                      key={index}
                      image={produto.image}
                      title={produto.title}
                      price={produto.price}
                      rating={produto.rating.rate}
                      onClick={() => { }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
