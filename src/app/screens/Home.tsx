import React from "react";

function Home() {
  return (
    <main className='flex items-center justify-center min-h-screen p-4'>
      <div className='bg-color-primario pl-10 pr-10 p-20 rounded-md flex items-center'>
        <div className="flex flex-col md:text-left mb-6 md:mb-0">
          <div className='text-4xl font-roboto mb-10'>
            <h1>HOLA, mi nombre es </h1>
            <h2>Zarella Burbano.</h2>
          </div>
          <div className="text-xl text-left mb-10">
            <h1>Soy estudiante de quinto semestre de la universidad</h1>
            <h1>cooperativa de Colombia en el programa de</h1>
            <h1>ingeniería de software, y actualmente tengo 19 años.</h1>
          </div>
        </div>
        <div className="rounded-full">
          <img className="Zarella" />
        </div>
      </div>
    </main>
  );
}

export default Home;
