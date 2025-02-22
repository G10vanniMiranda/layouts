import Link from "next/link";

export default function Cadastro() {
    return (
        <div className="flex flex-col gap-5 bg-slate-700">
            <header className="w-screen p-5 flex justify-between ">
                <h1>Cadastro</h1>
                <Link href="/">Sair</Link>
            </header>

            <main className="w-[50%] h-[50%] bg-red-600" >

            </main>

            <aside className="w-[50%] h-[50%] bg-green-600">

            </aside>
        </div>
    )
}