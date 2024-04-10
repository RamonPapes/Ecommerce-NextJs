import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface CarouselProps {
    slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
    let [current, setCurrent]: any = useState(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className='overflow-hidden relative my-10'>
            <div className={`flex transition ease-out duration-700 `} style={{
                transform: `translateX(-${current * 100}%)`
            }}>
                {slides?.map((s: string, index: number) => (
                    <img key={index} src={s} alt={`Slide ${index}`} />
                ))}

            </div>

            <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
                <button>
                    <Icon icon={"fa:arrow-left"} onClick={previousSlide}></Icon>
                </button>
                <button>
                    <Icon icon={"fa:arrow-right"} onClick={nextSlide}></Icon>
                </button>
            </div>

            <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i)
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-3 h-3  hover:cursor-pointer  ${i == current ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'}`}>

                        </div>
                    )
                })}
            </div>
        </div >
    );
}