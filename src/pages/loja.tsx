import { useState, useEffect } from "react";
import Produto from "@/components/produto";
import ReactModal from "react-modal";
import { Icon } from "@iconify/react/dist/iconify.js";

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
            <div className="flex justify-center m-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl 2xl:max-w-7xl">
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
                                {produtoSelecionado && produtoSelecionado.price} R$
                            </p>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}
