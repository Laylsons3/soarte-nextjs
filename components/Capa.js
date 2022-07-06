import Link from 'next/link';

function Capa() {
  return(
    <section id="Component">
      <div className='h-[400px] overflow-hidden bg-capa bg-cover bg-no-repeat flex p-8 md:p-0'>
        <div className='Component flex flex-col mt-8'>
          <h1
          className='text-white Poppins font-bold leading-relaxed text-3xl md:text-5xl max-w-[500px] md:max-w-[700px] opacity-60 md:opacity-100
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

export default Capa;
