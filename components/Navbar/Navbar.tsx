import Logo from "../../public/logo3.png"
import Image from "next/image"

function Navbar() {

    return (
     
        <div className="
            h-14 flex justify-around items-center 
            backdrop-blur-sm shadow-lg bg-white z-50 ">

            <img src="/logo3.png" className="h-16" alt="ViajeItaliaViaggi logo" />

            <span className="text-blue-900 font-paci">Vuelaitaliaviaggi</span>
        </div>



    )
  }
  
  export default Navbar
  