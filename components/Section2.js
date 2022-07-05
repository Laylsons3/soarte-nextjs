import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

function Section2() {
  return(
    <div className="mx-10 md:mx-40 my-4 flex flex-col gap-2">
      <div className="block relative p-6 text-zinc-900">
        <RiDoubleQuotesL className='h-16 w-16 absolute top-0 left-0 inline-block' />
        <h2 className="text-3xl inline">
          <span className='px-6' /> O homem que não tem a música dentro de si e que não se emociona com
          um concerto de doces acordes é capaz de traições, de conjuras e de rapinas.
        </h2>
        <RiDoubleQuotesR className='h-5 w-5 inline mb-6' />
      <div className="Montserrat text-right text-base mr-4">William Shakespeare</div>
      </div>
    </div>
  )
}

export default Section2;
