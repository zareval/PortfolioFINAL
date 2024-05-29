import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <main className='flex items-center justify-center min-h-screen p-4'>
      <div className='bg-color-primario p-8 rounded-lg shadow-lg flex flex-col items-center w-full max-w-4xl'>
        <div className='text-3xl font-roboto mb-4'>
          <h1>Estos son mis proyectos:</h1>
        </div>
        <div className="text-base mb-4 text-center">
          <p>A lo largo de mi carrera, he participado en diversos proyectos que van desde iniciativas </p>
          <p>tecnológicas innovadoras hasta proyectos centrados en desarrollo web y aplicaciones.</p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className='w-full h-full'
        >
          <SwiperSlide className='bg-color-terciario p-4 rounded-lg shadow-md flex flex-col items-start justify-center' style={{ paddingLeft: '60px' }}>
            <div className='text-left mb-5'>
              <h2 className='text-2xl mb-4'>PORTAFOLIO</h2>
              <p className='text-lg mb-4'>Este proyecto es el que están viendo en este momento, el repositorio está en el siguiente enlace.</p>
            </div>
            <button className="text-xl bg-color-secundario rounded-lg flex items-center justify-center px-4 py-3 mb-4">
              <FaGithub className="mr-4" />
              <a href="https://github.com/zareval" target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
          </SwiperSlide>
          <SwiperSlide className='bg-color-terciario p-4 rounded-lg shadow-md flex flex-col items-start justify-center' style={{ paddingLeft: '60px' }}>
            <div className='text-left mb-5'>
              <h2 className='text-2xl mb-4'>Venta de peliculas en Azure</h2>
              <p className='text-lg mb-4'>El siguiente proyecto es una venta y descripcion de peliculas, y los desplegué en azure.</p>
              <button className="text-xl bg-color-secundario rounded-lg flex items-center justify-center px-4 py-3 mb-4">
                <FaGithub className="mr-4" />
                <a href="https://github.com/zareval" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-color-terciario p-4 rounded-lg shadow-md flex flex-col items-start justify-center' style={{ paddingLeft: '60px' }}>
            <div className='text-left mb-5'>
              <h2 className='text-2xl mb-4'>Proyecto (PELISPLUS) peliculas y series</h2>
              <p className='text-lg mb-4'>El siguiente proyecto es una pagina en la que podemos encontrar la descripcion, enlace, y demas de peliculas y series.</p>
              <button className="text-xl bg-color-secundario rounded-lg flex items-center justify-center px-4 py-3 mb-4">
                <FaGithub className="mr-4" />
                <a href="https://github.com/zareval" target="_blank" rel="noopener noreferrer">GitHub</a>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        <style jsx>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: black; 
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 40px; 
          }
        `}</style>
      </div>
    </main>
  );
};

export default Projects;
