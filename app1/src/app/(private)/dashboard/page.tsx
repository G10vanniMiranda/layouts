import Link from "next/link";

export default function Dashboard(){
    return(
        <div className="flex flex-col gap-5 bg-slate-700">
            <header className="w-screen p-5 flex justify-between">
                <h1>Dashboard</h1>
                <Link href="/">Sair</Link>
            </header>
        </div>
    )
}