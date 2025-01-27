import Link from "next/link";

export default function Home() {
  // sm: min 640px
  // md: min 768px
  // lg: min 1024px
  // 2xl: min 1536px
  return (
    <main className=" 
        w-screen h-screen 
        bg-red-700 
        sm:bg-blue-600
        md:bg-green-500
        lg:bg-yellow-600
        2xl:bg-slate-900

        flex flex-wrap
    ">
      <div className="md:bg-red-500 md:flex-1"></div>
      
      <form className="bg-sky-500 w-screen md:w-96 flex flex-col gap-3 p-5">
          <h2 className="text-center text-3xl mt-10 mb-10">Seja bem Vindo</h2>
          <input type="text" className="p-2 border-none outline-none rounded-md" placeholder="email@gmail.com" />
          <input type="password" className="p-2 border-none outline-none rounded-md" placeholder="senha" />
          <div className="flex gap-2 mt-5">
              <Link href="/dashboard" className="p-2 text-center bg-blue-600  flex-1 rounded-md cursor-pointer">Entrar</Link>
              <button className="p-2 bg-green-600 flex-1 rounded-md cursor-pointer">Cadastrar</button>
          </div>
      </form>

    </main>
  );
}
