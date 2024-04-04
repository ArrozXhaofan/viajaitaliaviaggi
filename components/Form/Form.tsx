"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'


function Form() {

    //const form = useRef();
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => { // Define el tipo de evento
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_g7u4gas', 'template_fy7ca3l', form.current, {
                publicKey: 'LSDL9tUMXdMjKOyZa',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error:any) => {
                    console.log('FAILED...', error.text);
                },
            );
        }
    };

    return(

        <form  ref={form} onSubmit={sendEmail}
            className="w-full h-full p-4 pt-1 flex flex-col gap-3 text-white text-xs md:max-w-xl md:translate-y-14 font-rale">

            <div data-aos-delay="100" data-aos="fade-down-right" className="w-full h-auto flex flex-col">
                <span className="select-none p-0.5">Nombres</span>
                <input type="text" name='clientName' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
            </div>

            <div data-aos-delay="150" data-aos="fade-down-right" className="w-full h-auto flex flex-col">
                <span className="select-none p-1">Ciudad de salida</span>
                <input type="text" name='cdSalida' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
            </div>

            <div data-aos-delay="200" data-aos="fade-down-right" className="w-full h-auto flex flex-col">
                <span className="select-none p-1">Ciudad de llegada</span>
                <input type="text" name='cdDestino' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
            </div>

            <div data-aos-delay="250" data-aos="fade-down-right" className="flex gap-3">
                <div className="h-auto flex flex-col">
                    <span className="select-none p-1">Fecha de salida</span>
                    <input type="date" name='dateSalida' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
                </div>

                <div data-aos-delay="300" className="w-full h-auto flex flex-col">
                    <span className="select-none p-1">Fecha de retorno</span>
                    <input type="date" name='dateRetorno' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
                </div>
            </div>

            

            <div data-aos-delay="350" data-aos="fade-down-right" className="w-full h-auto flex gap-4">
                
                <div className="h-auto flex flex-col">
                    <span className="select-none p-1">Adulto</span>
                    <input type="text" name='ctAdulto' inputMode="numeric" pattern="[0-9]*" placeholder="0" className="border border-white rounded-lg bg-transparent text-white px-4 py-2 w-12" />
                </div>

                <div className="h-auto flex flex-col">
                    <span className="select-none p-1">Niño</span>
                    <input type="text" name='ctNino' inputMode="numeric" pattern="[0-9]*" placeholder="0" className="border border-white rounded-lg bg-transparent text-white px-4 py-2 w-12" />
                </div>

                <div className="h-auto flex flex-col">
                    <span className="select-none p-1">Bebe</span>
                    <input type="text" name='ctBebe' inputMode="numeric" pattern="[0-9]*" placeholder="0" className="border border-white rounded-lg bg-transparent text-white px-4 py-2 w-12" />
                </div>

            </div>

            <div data-aos-delay="400" data-aos="fade-down-right" className=" w-full h-auto flex flex-col">
                <span className="select-none p-1">Telefono movil</span>
                <input type="text" name='numTel' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
            </div>

            <div data-aos-delay="450" data-aos="fade-down-right" className="w-full h-auto flex flex-col">
                <span className="select-none p-1">Correo electronico</span>
                <input type="email" name='email' className="border border-white rounded-lg bg-transparent text-white px-4 py-2" />
            </div>

            <div data-aos-delay="500" data-aos="fade-down-right" className=" w-full h-auto flex flex-col">
                <span className="select-none p-1">Mensaje adicional</span>
                <textarea name='mesagge' className="border border-white rounded-lg bg-transparent text-white px-4 py-2 resize-none transition-colors duration-300 hover:bg-transparent hover:text-white hover:border-white" />
            </div>

            <div data-aos-delay="550" data-aos="fade-down-right" className="w-full pt-4 flex justify-center select-none">
                <button type='submit'>
                    <div className="flex justify-center items-center px-6 py-4 rounded-lg border-[0.1px]
                        hover:scale-90 hover:bg-transparent hover:text-white duration-500 hover:border-white">
                        <span className="select-none text-lg">Solicitar vuelo</span>
                    </div>
                </button>
            </div>

        </form>


    )

}

export default Form