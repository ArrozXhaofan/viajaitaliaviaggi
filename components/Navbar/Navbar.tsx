import Logo from "../../public/logo3.png"
import Image from "next/image"

function Navbar() {

    return (
     
        <div className="
            h-14 flex justify-around items-center 
            backdrop-blur-sm shadow-lg bg-black bg-opacity-10 
            rounded-b-md z-50 ">

            <Image src={Logo} alt="vuelamilano" width={120} height={50} />

            <h1 className="text-white font-paci">Vuelaitaliaviaggi</h1>

            

        </div>



    )
  }
  
  export default Navbar
  