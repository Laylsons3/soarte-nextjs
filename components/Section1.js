import Image from 'next/image';
import Link from 'next/link';

function Section1() {
  return(
    <section id="Component">
      <div className='h-96 overflow-hidden bg-capa flex'>
        {/* <Image alt="Imagem ilustrativa" className='-z-10' src="/images/capa.jpg" width={1440} height={642} /> */}
        <div className='Component flex flex-col mt-8'>
          <h1 className='text-5xl text-white Poppins font-bold'>HÁ 12 ANOS TRANSFORMANDO VIDAS ATRAVÉS DA ARTE.</h1>
          <div className='flex'>
            <Link href="#matricula">
              <a className='Poppins hover:text-zinc-300 font-medium text-2xl mt-4 py-2 px-4 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded'>Quero ser aluno</a></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;
