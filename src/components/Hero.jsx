import React from 'react'
import Button from './Button'

export default function Hero() {
  return (


    <div className='min-h-screen flex flex-col gap-14 items-center justify-center text-center 
    max-w-[800px] w-full mx-auto p-4'>

        <div className='flex flex-col gap-4'>

            <h1 className='uppercase font-bold text-5xl sm:text-6xl md:text-7xl lg:tex-8xl'>Work like <span>hell</span></h1>

        </div>
       

        <p className='text-sm md:text-xl font-normal '>Nos comprometemos a proporcionarte un espacio donde el 
            <span className='text-400 font-medium'> esfuerzo, la disciplina y la dedicación </span> sean las claves para alcanzar tus metas aqui en 
            <span className='text-400 font-medium'> Iron Forge </span>, 
            te damos la bienvenida al lugar donde comienza tu transformación</p>

        <Button func={() =>{
          window.location.href = '#generate'
        }} text={"empezar"}></Button>
      
    </div>
  )
}
