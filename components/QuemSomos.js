import LogoBranco from './LogoBranco';

function QuemSomos() {
  return(
    <section id="Component" className=''>
      <div className="Component2 bg-quem-somos bg-no-repeat my-8 block py-8">
        <div className="Poppins bg-[#ffffff70] my-0 rounded-lg flex flex-col max-w-[720px] p-4">
          <h1 className="text-4xl md:text-6xl font-black mb-2 opacity-50">QUEM SOMOS</h1>
          <p className="text-justify text-xs md:text-sm mb-2">
            A Soarte é uma Organização da Sociedade Civil (OSC), não governamental sem fins lucrativos,
            fundada em 2009 por alguns professores e jovens que queriam mudar a realidade de sua comunidade.
            Utilizamos a arte e outras linguagens como meio para promover o desenvolvimento social e cultural,
            oferecendo, gratuitamente, cursos, palestras e oficinas na comunidade de Monguba, em Pacatuba-Ceará.
          </p>
          <p className="text-justify text-xs md:text-sm mb-2">
            Estamos localizados dentro de uma periferia da cidade e as atividades/oportunidades que oferecemos/desenvolvemos,
            gratuitamente, são, em 95% dos casos, o único meio acessível; crianças de periferia que têm a oportunidade de
            estudar música popular e música erudita com professores especializados; fornecemos o espaço para estudo, o
            professor e também o instrumento musical adequado.
          </p>
          <p className="text-justify text-xs md:text-sm mb-2">
            Atualmente, no Centro Cultural Sons da Aratanha, um centro Cultural independente, promovido pela Soarte,
            onde oferecemos, gratuitamente, 14 oficinas (com várias turmas) de fluxo contínuo com aulas semanais
            (Prática de Banda de Música, Música de Câmara, Flauta doce, Flauta transversal, Clarinete, Sax, Trombone,
            Trompete, Teoria Musical, Canto Coral, Violão, Teclado, Poesia, informática), além de vários recitais
            temáticos, palestras, Intercâmbios culturais, concertos didáticos, concertos em espaços públicos,
            apresentações à convites da sociedade, exposições fotográficas,  lives culturais e produção de videoclipes
            com alunas, alunos e professores (tudo de classificação livre e sempre a aberto à comunidade).
          </p>
          <div className='flex justify-between relative'>
            <div className='h-10 opacity-0'></div>
            <div className='flex w-20 h-20 bg-emerald-500 p-2 rounded absolute -right-8 -bottom-8'>
              <LogoBranco />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default QuemSomos;
