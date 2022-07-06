import Image from 'next/image';
import Link from 'next/link';

function Section1() {
  return(
    <section id="Component">
      <div className='h-96 overflow-hidden bg-capa bg-no-repeat flex'>
        <div className='Component flex flex-col mt-8'>
          <h1
          className='text-white Poppins mt-8 pl-4 font-bold
          text-3xl md:text-5xl md:max-w-[760px] leading-relaxed
          '>
            HÁ 12 ANOS TRANSFORMANDO VIDAS ATRAVÉS DA ARTE.</h1>
          <div className='flex'>
            {/* <Link href="#matricula">
              <a className='Poppins opacity-60 text-zinc-100 hover:text-zinc-300 font-medium text-2xl mt-4 py-2 px-4 bg-[#10b98166] border-2 border-white hover:bg-emerald-600 transition-colors rounded'>
                Quero ser aluno
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;
