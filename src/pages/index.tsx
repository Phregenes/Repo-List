import Header from "@/components/header";
import Modal from "@/components/newModal"; 

export default function Home() {
  return (
    <main className="bg-gray-900 w-[1200px] h-screen">
      <title>Home</title>
      <Header />
      <h1 className="flex justify-center text-gray-100 text-9xl p-5 mt-16 font-extralight">
        Repo Viewer
      </h1>
      <h1 className="flex justify-center text-gray-100 text-2xl p-5 font-extralight">
        View and filter your deposits in a simple way
      </h1>
    </main>
  );
}
