import React from 'react';

const ImageGrid = ({ mainImageSrc, gridImages }: any) => (
    <div className='flex justify-center'>
        <div className="grid gap-4 max-w-5xl m-4 ">
            {/* Div principal */}
            <div>
                <img className="h-auto max-w-full rounded-lg" src={mainImageSrc} alt="" />
            </div>
            {/* Grid de imagens */}
            <div className="grid grid-cols-2 gap-4">
                {gridImages.map((imageUrl: any, index: any) => (
                    <div key={index}>
                        <img className="h-auto max-w-full rounded-lg" src={imageUrl} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ImageGrid;
