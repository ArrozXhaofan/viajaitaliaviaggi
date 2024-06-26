function Footer() {

    return (

        <div className="text-white w-full bg-lime-5 mt-10 flex flex-col items-center min-h-[30vh]">

            <span data-aos="zoom-in" className="w-3/4 h-[0.3px] bg-white"></span>

            <div className="pt-10 flex flex-col gap-6">

                <span className="text-3xl font-paci">Nuestras redes sociales</span>

                <div className="select-none flex justify-center gap-6 overflow-hidden md:overflow-visible py-4">
                    <a target="_blank" className="hover:scale-125 duration-200 ease-in-out" href="https://www.facebook.com/profile.php?id=61558177951933">
                        <img data-aos="fade-right" src="/facebook.png" alt="logo facebook" className="w-[60px]"/>
                    </a>

                    <a  target="_blank"className="hover:scale-125 duration-200 ease-in-out" href="https://www.instagram.com/vuelaitalia_viaggi/">
                        <img data-aos="fade-down" src="/instagram.png" alt="logo instagram" className="w-[60px]"/>
                    </a>

                    <a target="_blank" className="hover:scale-125 duration-200 ease-in-out" href="https://wa.me/393925902985">
                        <img data-aos="fade-left" src="/whatsapp.png" alt="logo whatsapp" className="w-[60px]"/>
                    </a>
                </div>

            </div>

<footer className="bg-white shadow dark:bg-white m-4 w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between flex-col md:flex-row">
                <div className="select-none flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/logo3.png" className="h h-24" alt="Flowbite Logo" />
                </div>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="mailto:postmaster@vuelaitaliaviaggi.it?subject=Solicitud de vuelo" className="hover:underline me-4 md:me-6">postmaster@vuelaitaliaviaggi.it</a>
                </li>
                <li>
                    <span className="hover:underline me-4 md:me-6">20158 MILANO</span>
                </li>
                <li>
                    <a href="https://maps.app.goo.gl/4Mg7ZNJU6fkpRxJW7" target="_blank" className="hover:underline me-4 md:me-6">Via Prestinari 6 / Ang. Imbriani</a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.me/393925902985" className="hover:underline">+39 3925902985</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©2024 <a href="" className="hover:underline">ViajaItaliaViaggi™</a>. Tutti i diritti riservati.</span>
    </div>
    
</footer>



        </div>

    )
}

export default Footer