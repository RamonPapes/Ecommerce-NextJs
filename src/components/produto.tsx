import React from 'react';
import Image from "next/image";

interface ProdutoProps {
    image: string;
    title: string;
    price: number;
    onClick: () => void;
}

const Produto: React.FC<ProdutoProps> = ({ image, title, price, onClick }) => {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-t-xl">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4 md:p-6">
                <p className="font-medium text-lg md:text-xl mb-2">{title}</p>
                <p className="text-gray-600 text-sm md:text-base mb-4">{price} R$</p>
                <button
                    className="w-full bg-blue-500 text-white rounded-lg py-2 transition duration-300 hover:bg-blue-600"
                    type="button"
                    onClick={onClick}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Produto;
