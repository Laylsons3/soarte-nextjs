import LogoBranco from "../components/LogoBranco";


export default function Matricula() {
  return(
    <div>
      <div className="flex justify-center bg-teal-700 text-teal-50 p-4">
      <div className="flex flex-col items-center text-center Poppins">
        <div className="w-20 h-20 flex">
        <LogoBranco />
        </div>
        <div className="font-bold">
          <h1 className="text-4xl">Soarte</h1>
          <h3>Sociedade Artística</h3>
        </div>
      </div>
      <div>

      </div>
    </div>
      <div className="mx-10 mt-5 flex Drop1 justify-center">
        <div className="w-[700px] bg-emerald-200 p-4">
          <h1 className="text-center font-bold mb-2 text-xl">MATRÍCULA 2022.2</h1>
          <form id="form-matricula" className="flex flex-col gap-2">
          <div className="border border-black rounded flex flex-col gap-2 p-2">
            <div className="flex gap-2 w-full">
              <label>Nome completo:</label>
              <input className="flex-1 pl-1" />
            </div>
            <div className="flex gap-2 w-full">
              <label>CEP:</label>
              <input className="pl-1" size={8} placeholder="00.000-000" />
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
          </div>
          <hr />
          <div className="flex gap-2 w-full ">
            <div className="flex flex-col border border-black rounded p-2">
              <label>Oficina:</label>
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
            <div className="border border-black rounded p-2">Já estudou na Soarte?
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


          </form>
        </div>

      </div>

    </div>
  )
}
