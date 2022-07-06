import {
  GiMusicalNotes,
  GiFlute,
  GiClarinet,
  GiTrumpet,
  GiMusicalKeyboard,
  GiSaxophone
} from 'react-icons/gi'
import { FaGuitar } from 'react-icons/fa'
import Link from 'next/link';

function Cursos() {
  return(
    <section id="Component" className=''>
      <div className='Component block mt-8 mb-14'>
        <div className="flex justify-center">
          <div className='flex items-center'>
            <GiMusicalNotes className='w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mr-2 pt-2' />
            <h1 className="text-4xl md:text-[40px] Poppins font-bold pt-2">Escolha um som</h1>
          </div>
        </div>
        <div className='Poppins flex gap-2 justify-center my-4'>
          <div className='flex group Drop transition-all'>
            <Link href="/">
              <a className='relative'>
                <div className='DivIconCurso drop-shadow-sm flex justify-center items-center rounded-full bg-emerald-500 hover:scale-105 hover:bg-emerald-400 transition-all'>
                  <div className='bg-emerald-400 group-hover:bg-emerald-300 w-12 h-12 absolute rounded-full blur -z-10' />
                  <GiFlute className='w-full h-full p-3'/>
                </div>
                <div className='flex justify-center'>
                  <div className='text-[9pt] text-center flex opacity-0 group-hover:opacity-100 bg-white px-1 rounded-xl absolute -bottom-6'>Flauta Doce</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex group Drop'>
            <Link href="/">
              <a className='relative'>
                <div className='DivIconCurso drop-shadow-sm flex justify-center items-center rounded-full bg-emerald-500 hover:scale-105 hover:bg-emerald-400 transition-all'>
                  <div className='bg-emerald-400 group-hover:bg-emerald-300 w-12 h-12 absolute rounded-full blur -z-10' />
                  <GiClarinet className='w-full h-full p-3'/>
                </div>
                <div className='flex justify-center'>
                  <div className='text-[9pt] text-center flex opacity-0 group-hover:opacity-100 bg-white px-1 rounded-xl absolute -bottom-6'>Clarinete</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex group Drop'>
            <Link href="/">
              <a className='relative'>
                <div className='DivIconCurso drop-shadow-sm flex justify-center items-center rounded-full bg-emerald-500 hover:scale-105 hover:bg-emerald-400 transition-all'>
                  <div className='bg-emerald-400 group-hover:bg-emerald-300 w-12 h-12 absolute rounded-full blur -z-10' />
                  <FaGuitar className='w-full h-full p-3'/>
                </div>
                <div className='flex justify-center'>
                  <div className='text-[9pt] text-center flex opacity-0 group-hover:opacity-100 bg-white px-1 rounded-xl absolute -bottom-6'>Violão</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex group Drop'>
            <Link href="/">
              <a className='relative'>
                <div className='DivIconCurso drop-shadow-sm flex justify-center items-center rounded-full bg-emerald-500 hover:scale-105 hover:bg-emerald-400 transition-all'>
                  <div className='bg-emerald-400 group-hover:bg-emerald-300 w-12 h-12 absolute rounded-full blur -z-10' />
                  <GiTrumpet className='w-full h-full p-3'/>
                </div>
                <div className='flex justify-center'>
                  <div className='text-[9pt] text-center flex opacity-0 group-hover:opacity-100 bg-white px-1 rounded-xl absolute -bottom-6'>Trompete</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex group Drop'>
            <Link href="/">
              <a className='relative'>
                <div className='DivIconCurso drop-shadow-sm flex justify-center items-center rounded-full bg-emerald-500 hover:scale-105 hover:bg-emerald-400 transition-all'>
                  <div className='bg-emerald-400 group-hover:bg-emerald-300 w-12 h-12 absolute rounded-full blur -z-10' />
                  <GiMusicalKeyboard className='w-full h-full p-3'/>
                </div>
                <div className='flex justify-center'>
                  <div className='text-[9pt] text-center flex opacity-0 group-hover:opacity-100 bg-white px-1 rounded-xl absolute -bottom-6'>Teclado</div>
                </div>
              </a>
            </Link>
          </div>
          <div className='flex group Drop'>
            <Link href="/">
              <a className='relative'>
                <div className='DivIconCurso drop-shadow-sm flex justify-center items-center rounded-full bg-emerald-500 hover:scale-105 hover:bg-emerald-400 transition-all'>
                  <div className='bg-emerald-400 group-hover:bg-emerald-300 w-12 h-12 absolute rounded-full blur -z-10' />
                  <GiSaxophone className='w-full h-full p-3'/>
                </div>
                <div className='flex justify-center'>
                  <div className='text-[9pt] text-center flex opacity-0 group-hover:opacity-100 bg-white px-1 rounded-xl absolute -bottom-6'>Saxofone</div>
                </div>

              </a>
            </Link>
          </div>

        </div>
        <div className="">

        </div>
      </div>

    </section>
  )
}

export default Cursos;
