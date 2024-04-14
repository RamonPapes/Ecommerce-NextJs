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

                            At Clothes Clove we believe that everyone deserves to feel confident and stylish in what they wear. Our journey began with a simple idea: to create a shopping experience that is both convenient and enjoyable for our customers.

                            Our team is passionate about fashion and committed to providing you with the latest trends and high quality clothing at affordable prices. Whether you&apos;re looking for casual everyday wear elegant evening attire or trendy accessories we&apos;ve got you covered.

                            But Clothes Clove is more than just a clothing store. We&apos;re a community of fashion enthusiasts who celebrate individuality and self-expression. We believe that fashion is a form of art and each outfit is a canvas waiting to be painted with your unique personality.

                            Join us on our journey to redefine fashion and empower people to express themselves through their clothing choices. Together let&apos;s create a world where everyone can look and feel their best every day.

                            Thank you for choosing Clothes Clove. We&apos;re excited to embark on this stylish adventure with you!
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <Image src="/grupo.jpg" alt="A group of People" width={1920} height={1280} />
                    </div>
                </div>

                <div className="flex lg:flex-row lg:items-center flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Our story began with a shared love for fashion and a dream to create something extraordinary. It all started in a small studio apartment where a group of friends gathered around a table filled with sketches fabric swatches and endless cups of coffee.

                            Driven by our passion for style and innovation we set out to build a brand that would inspire people to express themselves through their clothing. From the very beginning our focus has been on creating timeless pieces that blend classic elegance with modern flair.

                            Today Clothes Clove stands as a testament to our dedication and commitment to excellence. We&apos;re proud to offer a curated collection of fashion forward garments and accessories that reflect our passion for quality and craftsmanship.

                            But our story is far from over. As we continue to evolve and grow we remain true to our roots guided by our core values of integrity creativity and inclusivity. Together with our customers we&apos;re writing the next chapter of our story one stylish outfit at a time.

                            Join us on this journey as we celebrate individuality creativity and the transformative power of fashion. Together let&apos;s make every day a fashionable adventure!</p>
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
