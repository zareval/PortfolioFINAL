import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { FaTrophy, FaBalanceScale, FaLightbulb } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

const AboutMe = () => {
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
            <h1 className="mb-3">SOBRE MI: </h1>
          </div>
          <div className="text-xl">
            <div className="sm-auto rounded-lg">
              <ul className="mt-2">
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <FaTrophy className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('MetasProfesionales')}>
                    Metas Profesionales
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <IoMdGlobe className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('MetasPersonales')}>
                    Metas Personales
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <FaLightbulb className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('Intereses')}>
                    Intereses
                    <BiChevronRight className={`ml-2`} />
                  </li>
                </div>
                <div className="bg-color-terciario rounded-lg p-3 mb-2 flex items-center">
                  <FaBalanceScale className="mr-2" />
                  <li className="flex items-center relative cursor-pointer" onClick={() => toggleContent('ValoresyEtica')}>
                    Valores y Ética
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
              {selectedOption === 'MetasProfesionales' && (
                <div>
                  <p>Mi meta profesional es convertirme en una experta con especializaciones en diversas áreas. Quiero ser reconocida como una profesional versátil y competente, capaz de enfrentar y resolver desafíos complejos en mi industria.</p>
                  <img src="https://www.allbusiness.com/media-library/web-developer-working.jpg?id=32362650&width=980&quality=90" alt="Profesional" className="mt-4 rounded-md shadow-md" />
                </div>
              )}
              {selectedOption === 'MetasPersonales' && (
                <div>
                  <p>Mi meta personal es viajar gracias a mi trabajo.  Creo en el valor de estas experiencias para mi crecimiento personal y profesional, y estoy comprometida a construir una trayectoria que me permita cumplir este objetivo.</p>
                  <img src="https://th.bing.com/th/id/R.9bf8c4f03517ce694506b4b1454b4273?rik=If2Mnn15yTwe8g&pid=ImgRaw&r=0"alt="Viajar" className="mt-4 rounded-md shadow-md items-center justify-center" style={{ width: '410px', height: '200px' }} />
                </div>
              )}
              {selectedOption === 'Intereses' && (
                <div>
                  <p>Mis intereses abarcan una amplia gama de actividades. Soy apasionada por el fútbol, tanto jugarlo como seguirlo de cerca. En mi tiempo libre, me sumerjo en el mundo de la música, tocando el piano y la guitarra, lo cual encuentro gratificante y relajante.</p>
                  <img src="https://th.bing.com/th/id/OIP.ueQO0zOGzCcAOGGlq73Y0QHaEK?rs=1&pid=ImgDetMain" alt="Intereses" className="mt-4 rounded-md shadow-md" style={{ width: '410px', height: '200px' }}/>
                </div>
              )}
              {selectedOption === 'ValoresyEtica' && (
                <div>
                  <p>Mis valores personales en una empresa juegan un papel fundamental. Creo firmemente en la importancia de la integridad, la ética y el respeto mutuo en el entorno laboral.</p>
                  <img src="https://1.bp.blogspot.com/-G4zU-Qqx2z4/VwG-6MqIzAI/AAAAAAAAAZE/rTNn_Q7-KvUKtGv7aEPLbjq6x1FNoDiWA/s1600/Valores.png" alt="Valores y Ética" className="mt-4 rounded-md shadow-md" style={{ width: '500px', height: '240px' }}/>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AboutMe;
