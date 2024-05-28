import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <main className='flex items-center justify-center h-screen sm:flex sm:flex-col sm:min-w-[200px]'>
      <div className='bg-color-primario px-4 py-3 rounded-md grid grid-cols-2 gap-' style={{ width: '1000px', height: '500px' }}>
        <div className='text-4xl font-roboto mb-52 m-8'>
          <h1 className="mb-14">Muchas gracias, espero verte pronto!!!</h1>
          
          <div className="text-xl">
            <h1>Muchas gracias por tomarte el tiempo de ver mi portafolio.</h1>
            <h1 className="text-2xl mt-2">Espero tu mensaje.</h1>
          </div>
          
        </div>

        <div className="flex flex-col justify-center items-center bg-color-secundario rounded-lg"style={{ width: '100%', height: '73%' }}>
          <div className="text-3xl text-center mb-8">
                <h1>¡Contáctame!</h1>
          </div> 
          <button className="text-xl mb-4 bg-color-terciario rounded-lg flex items-center" style={{ width: '50%', height: '8%' }}>
            <FaWhatsapp className="mr-1 items-center" style={{ width: '90%', height: '90%' }}/>
            <a href="https://w.app/ZareProfesional" target="_blank" rel="noopener noreferrer" className="mr-5">WhatsApp</a>
          </button>
          <button className="text-xl mb-4 bg-color-terciario rounded-lg flex items-center" style={{ width: '50%', height: '8%' }}>
            <FaLinkedin className="mr-5  items-center"  style={{ width: '90%', height: '90%' }}/>
            <a href="mailto:zarellaburbanov@gmail.com?subject=&amp;body=" target="_blank" rel="noopener noreferrer" className=" mr-12">Email</a>
          </button>
          <button className="text-xl mb-4 bg-color-terciario rounded-lg flex items-center"style={{ width: '50%', height: '8%' }}>
            <FaGithub className=" mr-4 items-center"  style={{ width: '90%', height: '90%' }}/>
            <a href="https://github.com/zareval" target="_blank" rel="noopener noreferrer" className="mr-9">GitHub</a>
          </button>

        </div>
      </div>
    </main>
  );
};

export default Contact;
