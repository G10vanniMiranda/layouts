export default function Picpay() {
    return(
        <div className="flex flex-col items-center bg-green-500 h-screen">
            
            <div className="flex-1 flex justify-center items-center">
                <img className="w-72" src="picpay2.png" alt="Logo PicPay" data-aos="fade-down" />
            </div>

            <div className="h-32 w-screen lg:w-80 p-5 flex flex-col gap-2" data-aos="fade-up">
                <button className="bg-white text-green-800 font-semibold w-full p-2 hover:bg-green-900 hover:text-white hover:scale-105 duration-200 rounded-xl">Acessar</button>
                <button className="border text-white font-semibold w-full p-2 hover:text-green-900 hover:scale-105 duration-200 rounded-xl">Sair da conta</button>
            </div>

        </div>
    )
}