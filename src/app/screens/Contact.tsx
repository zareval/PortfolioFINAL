import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <main className='flex items-center justify-center min-h-screen p-4'>
      <div className='bg-color-primario p-4 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl'>
        <div className='text-center md:text-left md:mb-0 md:m-8'>
          <div className='text-4xl font-roboto mb-8'>
            <h1 className="mb-14">Muchas gracias, espero verte pronto!!!</h1>
            <div className="text-xl">
              <h1>Muchas gracias por tomarte el tiempo de ver mi portafolio.</h1>
              <h1 className="text-2xl mt-2">Espero tu mensaje.</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-color-secundario rounded-lg p-8">
          <div className="text-3xl text-center mb-8">
            <h1>¡Contáctame!</h1>
          </div> 
          <button className="text-xl mb-4 bg-color-terciario rounded-lg flex items-center w-1/2">
            <FaWhatsapp className="mr-1 h-6 w-6" />
            <a href="https://w.app/ZareProfesional" target="_blank" rel="noopener noreferrer" className="mr-5">WhatsApp</a>
          </button>
          <button className="text-xl mb-4 bg-color-terciario rounded-lg flex items-center w-1/2">
            <MdOutlineMail className="mr-5 h-6 w-6" />
            <a href="mailto:zarellaburbanov@gmail.com?subject=&amp;body=" target="_blank" rel="noopener noreferrer" className="mr-12">Email</a>
          </button>
          <button className="text-xl mb-4 bg-color-terciario rounded-lg flex items-center w-1/2">
            <FaGithub className="mr-4 h-6 w-6" />
            <a href="https://github.com/zareval" target="_blank" rel="noopener noreferrer" className="mr-9">GitHub</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
