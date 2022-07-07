import Topo from '../components/Topo';
import Image from 'next/image';
import Link from 'next/link';

export default function Matricula() {
  return(
    <div>
      <Topo />
      <div className="flex justify-center bg-teal-700 text-teal-50 p-4">

      <div>

      </div>
    </div>
      <div className="mx-10 mt-5 flex Drop1 justify-center">
        <div className="w-[740px] bg-white p-8 mb-8">
          <div className="flex flex-col Poppins border text-emerald-500 border-black rounded p-2">
            <div className="font-bold flex flex-row justify-center items-center gap-2">
            <div className="flex items-center">
              <Image src="/images/logo.svg" alt="Logo" width={60} height={60} />
            </div>
              <h1 className="text-6xl">Soarte</h1>
            </div>
            <h3 className='text-2xl text-center font-medium'>Centro Cultural Sons da Aratanha</h3>
          </div>
          <h1 className="text-center font-bold my-2 text-xl text-zinc-800">MATRÍCULA 2022.2</h1>
          <form id="form-matricula" className="flex flex-col gap-2">
          <div id="form-section" className="flex flex-col gap-2">
            <div className="flex gap-2 w-full">
              <label>Nome completo:</label>
              <input className="flex-1 pl-1 border-2" />
            </div>
            <div className="flex gap-2 w-full">
              <label>CEP:</label>
              <input className="pl-1" size={8} />
              <label>Rua:</label>
              <input className="flex-1 pl-1" />
              <label>Nº:</label>
              <input className="pl-1" size={4} />
            </div>
            <div className="flex gap-2 w-full">
              <label>Bairro:</label>
              <input className="flex-1 pl-1" size={9} />
              <label>Cidade:</label>
              <input className="flex-1 pl-1" />
              <label>Estado:</label>
              <input className="pl-1" size={7} />
            </div>
            <div>
              <div className="flex gap-2 w-full">
                <label>CPF:</label>
                <input className="flex-1 pl-1" size={6} />
                <label>RG:</label>
                <input className="flex-1 pl-1" size={6} />
                <label>Data de Nasc.:</label>
                <input className="pl-1" size={12} type="date" />
              </div>
            </div>
            <div>
              <div className="flex gap-2 w-full">
                <label>Escolaridade:</label>
                <select>
                  <option></option>
                  <option>Infantil</option>
                  <option>Fundamental</option>
                  <option>Médio incompleto</option>
                  <option>Médio completo</option>
                  <option>Superior incompleto</option>
                  <option>Superior completo</option>
                  <option>Pós graduação</option>
                </select>
                <label>Instituição:</label>
                <input className="flex-1 pl-1 uppercase" size={6} />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-2 w-full ">
            <div id="form-section" className="flex flex-col">
              <div>Oficina:</div>
            <label>
              <input className="mr-1" type="checkbox" />
              Flauta Doce
            </label>
            <label>
              <input className="mr-1" type="checkbox" />
              Clarinete
            </label>
            <label>
              <input className="mr-1" type="checkbox" />
              Violão
            </label>
            <label>
              <input className="mr-1" type="checkbox" />
              Trompete
            </label>
            <label>
              <input className="mr-1" type="checkbox" />
              Teclado
            </label>


            </div>
            <div className="flex flex-col">
            <div id="form-section" className="">Já estudou na Soarte?
              <div className="flex justify-center gap-2">
                  <label>
                    <input className="mr-1" name="aluno-novo" type="radio" />
                    Sim
                    </label>
                    <label>
                    <input className="mr-1" name="aluno-novo" type="radio" />
                    Não
                    </label>
                </div>
            </div>





            </div>


          </div>
            <hr />
            <div id="form-section" className=''>
              O envio deste formulário implica a nossa
              <Link href="/#privacidade">
                <a className='hover:underline px-1 font-medium'>
                  Política de privacidade.
                </a>
              </Link>
            </div>

            <div className='flex justify-center mt-8'>
              <button className='bg-emerald-400 px-8 py-1 font-medium rounded'>Enviar</button>
            </div>


          </form>
        </div>

      </div>

    </div>
  )
}
