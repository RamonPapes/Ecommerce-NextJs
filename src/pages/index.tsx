import ImageGrid from "@/components/image-grid";

const Main = () => {
  const mainImageSrc = "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg";
  const gridImages = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  ];

  return (
    <ImageGrid mainImageSrc={mainImageSrc} gridImages={gridImages} ></ImageGrid>
  );
}

export default Main;