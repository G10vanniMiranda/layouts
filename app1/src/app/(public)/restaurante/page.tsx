export default function Restaurante() {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            
            <div className="md:w-[70%] w-[100%] relative" >
                <img src="/image-principal.png" alt="Mario" width="100%" data-aos="fade-right" />
                <h3 className="text-6xl absolute top-[50%] left-[15%] md:left-[30%]" data-aos="fade-left">MEAT MASTERY</h3>
            </div>

            <div className="w-[100%] md:w-[30%] md:overflow-y-auto">
                <img src="/image1.webp" alt="Mario" width="100%" data-aos="fade-up" />
                <img src="/image2.webp" alt="Mario" width="100%" data-aos="fade-down" />
                <img src="/image3.webp" alt="Mario" width="100%" />
            </div>
        </div>
    );
}