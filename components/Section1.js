import Image from 'next/image';
import Link from 'next/link';

function Section1() {
  return(
    <div className='h-96 overflow-hidden relative'>
      <Image alt="Imagem ilustrativa" className='blur -z-10' src="/images/header-min.webp" width={1440} height={642} />
      <div className='w-[123px] h-[123px] bg-lime-400 absolute top-7 right-16 rounded-full'></div>
      <div className='absolute top-14 left-40 w-96 h-60 flex flex-col'>
        <h1 className='text-5xl text-white Poppins font-bold'>HÁ 12 ANOS TRANSFORMANDO VIDAS ATRAVÉS DA ARTE.</h1>
        <div className='flex justify-center'>
          <Link href="/"><a className='Poppins hover:text-white font-medium text-2xl mt-8 py-2 px-4 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded'>Quero ser aluno</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Section1;
