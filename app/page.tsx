"use client"

import { Form } from "@/components/Form";
import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Footer } from "@/components/Footer";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <main>

      <div className="relative bg-cover bg-center w-full min-h-screen z-10" style={{ backgroundImage: `url(/fondo1.jpg)` }}>
      <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>

        <Navbar/>

        <div data-aos="fade-right" className=" text-center py-2 text-white">
          <h1 className="text-3xl font-rale md:text-4xl">Cerca il tuo volo</h1>
        </div>

        
          <div className="w-full h-full justify-center flex p-1">
            <Form/>
          </div>

        <Footer/>

        
       
      </div>
    </main>
  );
}
