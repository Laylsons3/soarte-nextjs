import Topo from '../components/Topo';
import Image from 'next/image';
import Link from 'next/link';

export default function Matricula() {
  return(
    <div>
      <Topo />
      <div className="flex justify-center">

      <div>

      </div>
    </div>
      <div className="mx-10 mt-5 flex Drop1 justify-center">
        <div className="max-w-[740px] bg-gray-50 text-zinc-800 p-8 mb-8">
          <div className='Poppins flex items-center p-1 pl-2 gap-4'>
            <Image src="/images/logo.svg" width={80} height={80} alt="Image logo" />
          <div className='flex flex-col'>
          <h1 className="font-bold text-5xl">SOARTE</h1>
          <h1 className="font-bold text-2xl">CENTRO CULTURAL SONS DA ARATANHA</h1>
          </div>


          </div>
          <h1 className="text-center my-5 bg-gray-200 font-bold text-lg">FICHA DE INSCRIÇÃO SEMESTRE 2022.2 SOARTE</h1>

          <form>
              <div className="grid gap-6 mb-6 lg:grid-cols-4">
                  <div className='col-span-4'>
                      <label forHtml="first_name" className="labelForm">
                        Nome completo
                      </label>
                      <input type="text" id="first_name" className="inputForm" required=""/>
                  </div>

                  <div className='col-span-1'>
                      <label forHtml="last_name" className="labelForm">
                        CEP
                      </label>
                      <input type="text" id="last_name" className="inputForm" required=""/>
                  </div>
                  <div className='col-span-3'>
                      <label forHtml="last_name" className="labelForm">
                        Rua
                      </label>
                      <input type="text" id="last_name" className="inputForm" required=""/>
                  </div>
                  <div className='col-span-1'>
                      <label forHtml="company" className="labelForm">
                        Número
                      </label>
                      <input type="text" id="company" className="inputForm" required=""/>
                  </div>
                  <div className='col-span-1'>
                      <label forHtml="phone" className="labelForm">
                        Complemento
                      </label>
                      <input type="tel" id="phone" className="inputForm" required=""/>
                  </div>

                  <div className='col-span-2'>
                      <label forHtml="last_name" className="labelForm">
                        Bairro
                      </label>
                      <input type="text" id="last_name" className="inputForm" required=""/>
                  </div>
                  <div className='col-span-1'>
                      <label forHtml="company" className="labelForm">
                        Cidade
                      </label>
                      <input type="text" id="company" className="inputForm" required=""/>
                  </div>
                  <div className='col-span-1'>
                      <label forHtml="phone" className="labelForm">
                        Estado
                      </label>
                      <input type="tel" id="phone" className="inputForm" required=""/>
                  </div>

              </div>
              <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                  </div>
                  <label forHtml="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Eu aceito os <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                    termos e condições</a>.</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Enviar</button>
          </form>

        </div>

      </div>

    </div>
  )
}
