import React from 'react';

interface ProdutoProps {
    image: string;
    title: string;
    price: number;
    rating: number;
    onClick: () => void;
}

const Produto: React.FC<ProdutoProps> = ({ image, title, price, rating, onClick }) => {
    const renderRatingStars = () => {
        const stars = [];
        const roundedRating = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            if (i < roundedRating) {
                stars.push(
                    <svg key={i} className="w-4 h-4 text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-xl">
            <div className='flex justify-center'>
                <img className="p-8 rounded-t-lg min-h-10 max-h-60" src={image} alt={title} />
            </div>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {renderRatingStars()}
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{rating.toFixed(2)}</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">${price.toFixed(2)}</span>
                <div className="mt-4 flex items-end justify-center">
                    <button className="text-white bg-blue-900 hover:bg-blue-600 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={onClick}>
                        know more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Produto;
