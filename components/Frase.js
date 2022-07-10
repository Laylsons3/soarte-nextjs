import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

function Frase() {
  return(
    <section id="Component" className=''>
      <div className="Component mt-4 flex flex-col gap-2">
        <div className="block relative text-zinc-900 Poppins bg-emerald-50 p-8 rounded-lg shadow-xl">
          <RiDoubleQuotesL className='h-16 w-16 absolute top-0 left-6 inline-block' />
          <h2 className="text-xl md:text-3xl inline">
            <span className='px-6' /> O homem que não tem a música dentro de si e que não se emociona com
            um concerto de doces acordes é capaz de traições, de conjuras e de rapinas.
          </h2>
          <RiDoubleQuotesR className='h-5 w-5 inline mb-6' />
        <div className="text-right text-sm md:text-base mr-4">William Shakespeare</div>
        </div>
      </div>
    </section>
  )
}

export default Frase;
