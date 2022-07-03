import { GiMusicalNotes, GiFlute, GiClarinet, GiTrumpet, GiMusicalKeyboard, GiSaxophone} from 'react-icons/gi'
import { FaGuitar } from 'react-icons/fa'
import Link from 'next/link';

function Section3() {
  return(
    <div className="mx-20 md:mx-40 my-4 flex flex-col gap-2">
      <div className="flex justify-center items-center ">
        <h1 className="text-5xl Poppins font-extrabold pt-2">Escolha um som</h1>
        <GiMusicalNotes className='w-10 h-10 ml-4' />
      </div>
      <div className='Poppins flex gap-2 justify-center my-4'>
        <div className='flex group'>
          <Link href="/">
            <a className='flex flex-col justify-center items-center'>
              <div className='drop-shadow-sm flex justify-center items-center w-20 h-20 rounded-full bg-emerald-500 hover:scale-95 hover:bg-emerald-400 transition-all'>
                <GiFlute className='w-10 h-10'/>
              </div>
              <div className='text-sm text-center flex opacity-0 group-hover:opacity-100 group bg-white px-2 rounded-xl absolute -bottom-8'>Flauta Doce</div>
            </a>
          </Link>
        </div>
        <div className='flex group'>
          <Link href="/">
            <a className='flex flex-col justify-center items-center'>
              <div className='drop-shadow-sm flex justify-center items-center w-20 h-20 rounded-full bg-emerald-500 hover:scale-95 hover:bg-emerald-400 transition-all'>
                <GiClarinet className='w-10 h-10'/>
              </div>
              <div className='text-sm text-center flex opacity-0 group-hover:opacity-100 group bg-white px-2 rounded-xl absolute -bottom-8'>Clarinete</div>
            </a>
          </Link>
        </div>
        <div className='flex group'>
          <Link href="/">
            <a className='flex flex-col justify-center items-center'>
              <div className='drop-shadow-sm flex justify-center items-center w-20 h-20 rounded-full bg-emerald-500 hover:scale-95 hover:bg-emerald-400 transition-all'>
                <FaGuitar className='w-10 h-10'/>
              </div>
              <div className='text-sm text-center flex opacity-0 group-hover:opacity-100 group bg-white px-2 rounded-xl absolute -bottom-8'>Violão</div>
            </a>
          </Link>
        </div>
        <div className='flex group'>
          <Link href="/">
            <a className='flex flex-col justify-center items-center'>
              <div className='drop-shadow-sm flex justify-center items-center w-20 h-20 rounded-full bg-emerald-500 hover:scale-95 hover:bg-emerald-400 transition-all'>
                <GiTrumpet className='w-10 h-10'/>
              </div>
              <div className='text-sm text-center flex opacity-0 group-hover:opacity-100 group bg-white px-2 rounded-xl absolute -bottom-8'>Trompete</div>
            </a>
          </Link>
        </div>
        <div className='flex group'>
          <Link href="/">
            <a className='flex flex-col justify-center items-center'>
              <div className='drop-shadow-sm flex justify-center items-center w-20 h-20 rounded-full bg-emerald-500 hover:scale-95 hover:bg-emerald-400 transition-all'>
                <GiMusicalKeyboard className='w-10 h-10'/>
              </div>
              <div className='text-sm text-center flex opacity-0 group-hover:opacity-100 group bg-white px-2 rounded-xl absolute -bottom-8'>Teclado</div>
            </a>
          </Link>
        </div>
        <div className='flex group'>
          <Link href="/">
            <a className='flex flex-col justify-center items-center'>
              <div className='drop-shadow-sm flex justify-center items-center w-20 h-20 rounded-full bg-emerald-500 hover:scale-95 hover:bg-emerald-400 transition-all'>
                <GiSaxophone className='w-10 h-10'/>
              </div>
              <div className='text-sm text-center flex opacity-0 group-hover:opacity-100 group bg-white px-2 rounded-xl absolute -bottom-8'>Saxofone</div>
            </a>
          </Link>
        </div>

      </div>
      <div className="">

      </div>
    </div>
  )
}

export default Section3;
