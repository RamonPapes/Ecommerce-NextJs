import { useState, useEffect } from "react";
import Produto from "@/components/produto";
import "../models/produto"

export default function Loja() {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products/categories");
                const categoriasData: string[] = await res.json();
                setCategorias(categoriasData);
                if (categoriasData.length > 0) {
                    setCategoriaSelecionada(categoriasData[0]);
                }
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };

        fetchCategorias();
    }, []);

    useEffect(() => {
        const fetchProdutosPorCategoria = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/category/${categoriaSelecionada}`);
                const produtosData: Produto[] = await res.json();
                setProdutos(produtosData);
            } catch (error) {
                console.error(`Erro ao buscar produtos da categoria ${categoriaSelecionada}:`, error);
            }
        };

        if (categoriaSelecionada !== "") {
            fetchProdutosPorCategoria();
        }
    }, [categoriaSelecionada]);

    const handleCategoriaSelecionada = (categoria: string) => {
        setCategoriaSelecionada(categoria);
    };

    return (
        <div>
            {/* Botões de categoria */}
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {categorias.map((categoria, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${categoria === categoriaSelecionada ? 'text-blue-700 border-blue-600 bg-blue-700 hover:bg-blue-700' : ''
                            } dark:text-white dark:focus:ring-gray-800`}
                        onClick={() => handleCategoriaSelecionada(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </div>

            {/* Grid de produtos */}
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
                    {produtos.map((produto, index) => (
                        <Produto
                            key={index}
                            image={produto.image}
                            title={produto.title}
                            price={produto.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
