import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { FaPython, FaJava } from 'react-icons/fa';
import { SiReact, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleContent = (option: React.SetStateAction<string>) => {
    if (selectedOption === option) {
      setShowContent(!showContent);
    } else {
      setSelectedOption(option);
      setShowContent(true);
    }
  };

  return (
    <main className='flex items-center justify-center min-h-screen p-4'>
      <div className='bg-color-primario px-4 py-3 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4' style={{ maxWidth: '1000px' }}>
        <div className="flex flex-col justify-center">
          <div className='text-4xl font-roboto mb-6'>
            <h1 className="mb-3">HABILIDADES: </h1>
          </div>
          <div className="text-xl">
            <div className="sm-auto rounded-lg">
              <ul className="mt-2">
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <SiReact className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('React')}>
                    React
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <FaPython className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('Python')}>
                    Python
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <FaJava className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('Java')}>
                    Java
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <SiTypescript className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('TypeScript')}>
                    TypeScript
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {showContent && (
  <div className="bg-color-secundario p-2 rounded-lg col-span-1" style={{ width: '100%', height: '100%' }}>
    <div className="bg-color-300 p-4 rounded-md shadow-md">
      {selectedOption === 'React' && (
        <div className="text-left">
          <p>React es una biblioteca JavaScript para construir interfaces de usuario interactivas en aplicaciones web. Destaca por su enfoque en componentes reutilizables y su eficiente manipulación del DOM, lo que permite crear interfaces dinámicas y de alto rendimiento.</p>
          <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png" alt="React" className="mt-4 rounded-md shadow-md mx-auto" style={{ width: '200px', height: '200px' }} />
        </div>
      )}
      {selectedOption === 'Python' && (
        <div className="text-left">
          <p>Python es un lenguaje de programación interpretado y de alto nivel conocido por su sintaxis clara y legible. Ampliamente utilizado en diversos campos como desarrollo web, científico y análisis de datos.</p>
          <img src="https://i0.wp.com/blog.330ohms.com/wp-content/uploads/2019/12/python-logo-png.png?w=720&ssl=1" alt="Python" className="mt-4 rounded-md shadow-md mx-auto" style={{ width: '350px', height: '240px' }} />
        </div>
      )}
      {selectedOption === 'Java' && (
        <div className="text-left">
          <p>Java es un lenguaje de programación de propósito general, orientado a objetos y de alto nivel. Coonocido por su portabilidad y amplio uso en el desarrollo de aplicaciones empresariales y móviles.</p>
          <img src="https://www.oracle.com/a/ocom/img/cb71-java-logo.png" alt="Java" className="mt-4 rounded-md shadow-md mx-auto" style={{ width: '240px', height: '240px' }} />
        </div>
      )}
      {selectedOption === 'TypeScript' && (
        <div className="text-left">
          <p>TypeScript es un superset de JavaScript que agrega tipado estático opcional y características de programación orientada a objetos al lenguaje. Desarrollado por Microsoft, TypeScript es ampliamente utilizado en proyectos de gran escala y en el desarrollo de aplicaciones frontend y backend.</p>
          <img src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" alt="TypeScript" className="mt-4 rounded-md shadow-md mx-auto" style={{ width: '150px', height: '150px' }} />
        </div>
      )}
    </div>

  </div>
)}

      </div>
    </main>
  );
};

export default Skills;
