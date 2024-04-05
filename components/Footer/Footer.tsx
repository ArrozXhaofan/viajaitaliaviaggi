import LogoWsp from "../../public/whatsapp.png"
import LogoIg from "../../public/instagram.png"

function Footer() {

    return (

        <div className="text-white h-[20vh] w-full bg-lime-5 mt-10 flex flex-col items-center min-h-[30vh] overflow-hidden">

            <span data-aos="zoom-in" className="w-3/4 h-[0.3px] bg-white"></span>

            <div className="pt-10 flex flex-col gap-6">

                <span className="text-3xl font-paci">Nuestras redes sociales</span>

                <div className="select-none flex justify-center gap-6">
                    <a className="hover:scale-125 duration-200 ease-in-out" href="">
                        <img data-aos="fade-right" src="/facebook.png" alt="aas" className="w-[60px]"/>
                    </a>

                    <a className="hover:scale-125 duration-200 ease-in-out" href="">
                        <img data-aos="fade-down" src="/instagram.png" alt="logo" className="w-[60px]"/>
                    </a>

                    <a className="hover:scale-125 duration-200 ease-in-out" href="">
                        <img data-aos="fade-left" src="/whatsapp.png" alt="logo" width={60} height={60} />
                    </a>
                </div>

            </div>

        </div>

    )
}

export default Footer