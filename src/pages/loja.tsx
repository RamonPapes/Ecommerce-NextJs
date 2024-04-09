import { useState, useEffect } from "react";
import Produto from "@/components/produto";
import ReactModal from "react-modal";
import Navbar from "@/components/navbar";
import "../models/produto";

export default function Loja() {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const produtosData: Produto[] = await res.json();
                setProdutos(produtosData);
                const categorias = new Set(produtosData.map((produto) => produto.category));
                setCategorias(Array.from(categorias));
                if (Array.from(categorias).length > 0) {
                    setCategoriaSelecionada(Array.from(categorias)[0]);
                }
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    const handleCategoriaSelecionada = (categoria: string) => {
        setCategoriaSelecionada(categoria);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setProdutoSelecionado(null);
    };

    return (
        <div>
            <Navbar
                categorias={categorias}
                categoriaSelecionada={categoriaSelecionada}
                handleCategoriaSelecionada={handleCategoriaSelecionada}
            />
            {/* Grid de produtos */}
            <div className="flex justify-center m-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
                    {produtos
                        .filter((produto) => produto.category === categoriaSelecionada)
                        .map((produto, index) => (
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
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50"
                contentLabel="Product Details"
            >
                <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 0C4.475 0 0 4.475 0 10s4.475 10 10 10 10-4.475 10-10S15.525 0 10 0zM8.5 13.586l-1.414-1.414L10.586 10 7.086 6.5l1.414-1.414L12 8.586l3.5-3.5 1.414 1.414L11.414 10l3.5 3.5-1.414 1.414L10 11.414l-3.5 3.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {produtoSelecionado && (
                        <>
                            <img
                                src={produtoSelecionado.image}
                                alt={produtoSelecionado.title}
                                className="mx-auto h-32 md:h-48"
                            />
                            <h2 className="text-xl font-semibold mt-4">
                                {produtoSelecionado.title}
                            </h2>
                            <p className="text-gray-600 mt-2">
                                {produtoSelecionado.description}
                            </p>
                            <p className="text-gray-800 font-semibold mt-2">
                                Price: {produtoSelecionado.price} R$
                            </p>
                        </>
                    )}
                </div>
            </ReactModal>
        </div>
    );
}
