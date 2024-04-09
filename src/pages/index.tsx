import Carousel from "@/components/carrossel";

const Main = () => {
  let slides = ['/banner1.png', '/banner2.png', '/banner3.png']

  return (
    <main className="min-w-full flex justify-center">
      <div className="w-[80%]">
        <Carousel slides={slides}></Carousel>
      </div>
    </main>
  );
}

export default Main;