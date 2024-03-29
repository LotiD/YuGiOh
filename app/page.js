import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 text-white">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p className="text-white">
          Lorem Ipsum is simply dummy text ...
        </p>
      </div>
    </>
  );
}
