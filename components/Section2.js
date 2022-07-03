import { RiDoubleQuotesL } from 'react-icons/ri'

function Section2() {
  return(
    <div className="mx-20 md:mx-40 my-4 flex flex-col gap-2">
      <div className="flex items-start">
        <span className=""><RiDoubleQuotesL className='h-16 w-16' /></span>
        <h2 className="text-4xl Montserrat pt-2">O homem que não tem a música dentro de si e que não se emociona com um concerto de doces acordes é capaz de traições, de conjuras e de rapinas.</h2>
      </div>
      <div className="Montserrat text-right text-xl">William Shakespeare</div>
    </div>
  )
}

export default Section2;
