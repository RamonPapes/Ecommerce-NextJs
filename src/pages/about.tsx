import FeaturesSection from "@/components/feature-section";
import Head from "next/head";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Welcome to Clothes Clove!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur dolores suscipit ullam omnis odit aliquam ipsum, libero distinctio obcaecati itaque fuga ad optio quo perferendis quas sint necessitatibus. Quaerat!
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <Image src="/grupo.jpg" alt="A group of People" width={1920} height={1280} />
                    </div>
                </div>

                <div className="flex lg:flex-row lg:items-center flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptas sit possimus ad quasi iusto corrupti pariatur assumenda nesciunt ratione voluptatibus maiores ab soluta saepe nisi quae consequatur accusantium illo.</p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src="/Rectangle-118-2.png" alt="Alexa featured Img" width={300} height={300} />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mary</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src="/Rectangle-119.png" alt="Olivia featured Img" width={300} height={300} />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">July</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src="/Rectangle-120.png" alt="Liam featued Img" width={300} height={300} />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Jake</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <Image src="/Rectangle-121.png" alt="Elijah featured img" width={300} height={300} />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Paul</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FeaturesSection />
            </div>
        </div>
    );
}
