import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Produto from '@/components/produto';
import Carousel from '@/components/carrossel';
import { Icon } from '@iconify/react/dist/iconify.js';


const Main = () => {
  const slides = ['banner1.png', 'banner2.png', 'banner3.png'];
  const [categorias, setCategorias] = useState<string[]>([]);
  const [produtosPorCategoria, setProdutosPorCategoria] = useState<{ [key: string]: Produto[] }>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

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

  const closeModal = () => {
    setModalIsOpen(false);
    setProdutoSelecionado(null);
  };

  return (
    <main className="min-w-full">
      <div className="flex justify-center w-full flex-col items-center">

        {/* Banner hidden a partir de 960px */}
        <div className="w-[80%] max-sm:hidden">
          <Carousel slides={slides}></Carousel>
        </div>
        <div className="w-[80%]">
          {categorias.map((categoria) => {
            const categoriaProdutos = produtosPorCategoria[categoria] || [];
            return (
              <div key={categoria}>
                <div className='flex justify-start items-center my-4'>
                  <h1 className='font-semibold text-xl'>{categoria}</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-wrap">
                  {categoriaProdutos.map((produto, index) => (
                    <Produto
                      key={index}
                      image={produto.image}
                      title={produto.title}
                      price={produto.price}
                      rating={produto.rating.rate}
                      onClick={() => {
                        setProdutoSelecionado(produto);
                        setModalIsOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center"
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50"
          contentLabel="Product Details"
        >
          <div className="flex flex-col justify-center h-screen">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                {produtoSelecionado && (
                  <img
                    src={produtoSelecionado.image}
                    alt={produtoSelecionado.title}
                    className="w-40 md:w-auto"
                  />
                )}
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                  <p className="text-gray-500 font-medium hidden md:block">
                    {produtoSelecionado && produtoSelecionado.category}
                  </p>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    <Icon icon="majesticons:close-line" className="w-6 h-6" />
                  </button>
                </div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {produtoSelecionado && produtoSelecionado.title}
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  {produtoSelecionado && produtoSelecionado.description}
                </p>
                <p className="text-xl font-black text-gray-800">
                  ${produtoSelecionado && produtoSelecionado.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    </main >
  );
};

export default Main;
