import Head from "next/head";
import LogoBranco from "../components/LogoBranco";
import Image from "next/image";
import Link from "next/link";
import Galeria from "../components/Galeria";
import TypingText from "../components/TypingText";

export default function Home() {
  const menu = [
    { name: "Inicio", src: "/" },
    { name: "Oficinas", src: "#" },
    { name: "Eventos", src: "#" },
    { name: "Quem Somos", src: "#section-2" },
    { name: "Contato", src: "#section-4" },
  ];

  const professores = [
    {
      name: "Paulo Ferreira",
      image: "/images/paulo.jpg",
      description:
        "Mestrando em Interpretação Musical pela UFBA, Especialização em Performance Musical nos Alpes no sul da França",
      title: "Professor de Flauta Transversal e Maestro...",
    },
    {
      name: "Paulo Ferreira",
      image: "/images/paulo.jpg",
      description:
        "Mestrando em Interpretação Musical pela UFBA, Especialização em Performance Musical nos Alpes no sul da França",
      title: "Professor de Flauta Transversal e Maestro...",
    },
    {
      name: "Paulo Ferreira",
      image: "/images/paulo.jpg",
      description:
        "Mestrando em Interpretação Musical pela UFBA, Especialização em Performance Musical nos Alpes no sul da França",
      title: "Professor de Flauta Transversal e Maestro...",
    },
    {
      name: "Paulo Ferreira",
      image: "/images/paulo.jpg",
      description:
        "Mestrando em Interpretação Musical pela UFBA, Especialização em Performance Musical nos Alpes no sul da França",
      title: "Professor de Flauta Transversal e Maestro...",
    },
    {
      name: "Paulo Ferreira",
      image: "/images/paulo.jpg",
      description:
        "Mestrando em Interpretação Musical pela UFBA, Especialização em Performance Musical nos Alpes no sul da França",
      title: "Professor de Flauta Transversal e Maestro...",
    },
    {
      name: "Paulo Ferreira",
      image: "/images/paulo.jpg",
      description:
        "Mestrando em Interpretação Musical pela UFBA, Especialização em Performance Musical nos Alpes no sul da França",
      title: "Professor de Flauta Transversal e Maestro...",
    },
  ];

  return (
    <div>
      <Head>
        <title>Soarte</title>
      </Head>
      <header className="flex w-full h-screen">
        <div className="flex justify-between items-start bg-capa bg-no-repeat bg-cover bg-fixed bg-center w-full h-full">
          <div className="absolute right-4 top-2 text-white">
            <div>
              <ul className="flex gap-x-5 text-lg mr-10 mt-4">
                {menu.map((m, i) => (
                  <li className="hover:underline" key={i}>
                    <Link href={m.src}>{m.name}</Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center w-full justify-center h-full bg-black/40">
            <div className="flex gap-x-2 text-slate-100 justify-center w-full mt-16">
              <div className="w-40 h-40">
                <LogoBranco
                  color="white"
                  className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                />
              </div>
              <h1 className="font-bold  text-8xl">Soarte</h1>
            </div>
            <div className="absolute bottom-0 right-0 left-0">
              <div className="flex w-full justify-center mb-16">
                <h1 className="text-5xl font-bold text-white">
                  HÁ 12 ANOS TRANSFORMANDO VIDAS ATRAVÉS DA ARTE!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Galeria />

      <section
        id="section-2"
        className="bg-quem-somos bg-fixed bg-no-repeat bg-cover bg-center w-full h-screen"
      >
        <div className="flex justify-end items-center w-full h-full">
          <div className="bg-white/60 w-full relative max-w-3xl p-8 pt-6 mr-24 rounded-xl shadow">
            <h1 className="text-6xl uppercase font-black text-gray-600/80 mb-4">
              Quem somos
            </h1>
            <p className="text-justify text-black">
              A Soarte é uma Organização da Sociedade Civil (OSC), não
              governamental sem fins lucrativos, fundada em 2009 por alguns
              professores e jovens que queriam mudar a realidade de sua
              comunidade. Utilizamos a arte e outras linguagens como meio para
              promover o desenvolvimento social e cultural, oferecendo,
              gratuitamente, cursos, palestras e oficinas na comunidade de
              Monguba, em Pacatuba-Ceará. Estamos localizados dentro de uma
              periferia da cidade e as atividades/oportunidades que
              oferecemos/desenvolvemos, gratuitamente, são, em 95% dos casos, o
              único meio acessível; crianças de periferia que têm a oportunidade
              de estudar música popular e música erudita com professores
              especializados; fornecemos o espaço para estudo, o professor e
              também o instrumento musical adequado. Atualmente, no Centro
              Cultural Sons da Aratanha, um centro Cultural independente,
              promovido pela Soarte, onde oferecemos, gratuitamente, 14 oficinas
              (com várias turmas) de fluxo contínuo com aulas semanais (Prática
              de Banda de Música, Música de Câmara, Flauta doce, Flauta
              transversal, Clarinete, Sax, Trombone, Trompete, Teoria Musical,
              Canto Coral, Violão, Teclado, Poesia, informática), além de vários
              recitais temáticos, palestras, Intercâmbios culturais, concertos
              didáticos, concertos em espaços públicos, apresentações à convites
              da sociedade, exposições fotográficas, lives culturais e produção
              de videoclipes com alunas, alunos e professores (tudo de
              classificação livre e sempre a aberto à comunidade).
            </p>
            <div className="absolute -right-4 -bottom-8 bg-teal-600 w-20 h-20 rounded p-2">
              <div className="flex w-full h-full justify-center items-center">
                <LogoBranco color="white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-3" className="bg-teal-400 w-full h-screen">
        <div className="flex flex-col gap-y-6 justify-center items-center w-full h-full text-teal-900">
          <h1 className="text-3xl font-extrabold">Recital de Natal</h1>
          <div className="flex shadow-lg shadow-zinc-800/60 rounded">
            <Image
              src="/images/bg-2.png"
              width={1200}
              height={400}
              alt="Foto Recital"
              className="object-cover rounded"
            />
          </div>
          <div>
            <p>
              Realizado anualmente no período natalino, é uma forma de mostrar à
              comunidade quanto nossos alunos se desenvolveram ao longo do ano.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section-4"
        className="bg-capa bg-no-repeat bg-cover bg-fixed bg-center w-full h-screen"
      >
        <div className="flex justify-center items-end w-full h-full text-teal-100">
          <div className="flex flex-col max-w-4xl text-justify bg-black/60 rounded-lg p-4 mb-16">
            <h1 className="text-4xl font-extrabold">
              Banda de Música Sons da Aratanha
            </h1>
            <p>
              A Banda de Música Sons da Aratanha, sob a orientação do talentoso
              Maestro Paulo Ferreira, é um exemplo notável de colaboração e
              expressão musical, composta por alunos, voluntários e professores
              da OSCIP Soarte, localizada no município de Pacatuba, no Ceará.
              Mestrando em Interpretação Musical, pela renomada UFBA
              (Universidade Federal da Bahia) e com Especialização em
              Performance Musical nos Alpes no sul da França, o Maestro Paulo
              Ferreira traz consigo uma expertise valiosa que enriquece a
              experiência musical da Banda. Uma manifestação vibrante da
              dedicação à música e ao crescimento comunitário, essa Banda é uma
              das várias oficinas enriquecedoras que a OSCIP oferece à
              comunidade. O público atendido é constituído, prioritariamente, de
              crianças e jovens em situação de vulnerabilidade social. A
              diversidade instrumental é o que dá vida à música dos Sons da
              Aratanha, abrangendo uma ampla gama de categorias sonoras.
              Madeiras como clarinetes, flautas e saxofones, metais como
              trompetes e trombones, sopros como bombardinos e tubas, e uma
              variedade de instrumentos de percussão se unem harmoniosamente
              para criar uma sinfonia rica e cativante. Essa colaboração musical
              não apenas proporciona um ambiente educativo enriquecedor, mas
              também reforça os laços sociais e culturais dentro da comunidade,
              tornando Sons da Aratanha um exemplo inspirador de como a música
              pode Unir e Transformar Vidas.
            </p>
          </div>
        </div>
      </section>
      <section id="section-5" className="bg-teal-900 w-full h-full">
        <div className="flex flex-col items-center py-10 w-full h-full text-teal-100">
          <div className="flex flex-col gap-y-8 items-center">
            <h1 className="text-4xl font-extrabold mb-4 w-full text-center">
              Nossa equipe
            </h1>
            <div className="flex gap-x-4">
              <div className="grid grid-cols-3 bg-black/30 max-w-xs">
                <Image
                  src="/images/paulo.jpg"
                  width={20}
                  height={120}
                  alt="Foto Paulo"
                  className="object-cover rounded"
                />
                <div className="p-2 col-span-2">
                  <h2 className="font-bold">Presidente</h2>
                  <h3 className="text-sm font-bold">Paulo Ferreira da Costa</h3>
                  <p className="text-xs">
                    Mestrando em Interpretação Musical pela UFBA, Especialização
                    em Performance Musical nos Alpes no sul da França
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 bg-black/30 max-w-xs">
                <Image
                  src="/images/paulo.jpg"
                  width={20}
                  height={120}
                  alt="Foto Paulo"
                  className="object-cover rounded"
                />
                <div className="p-2 col-span-2">
                  <h2 className="font-bold">Presidente</h2>
                  <h3 className="text-sm font-bold">Paulo Ferreira da Costa</h3>
                  <p className="text-xs">
                    Mestrando em Interpretação Musical pela UFBA, Especialização
                    em Performance Musical nos Alpes no sul da França
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold mb-4">Professores</h1>
            <div className="grid grid-cols-4 gap-4 items-center">
              {professores.map(({ name, image, description, title }, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 bg-black/30 max-w-xs"
                >
                  <Image
                    src={image}
                    width={20}
                    height={120}
                    alt="Foto Paulo"
                    className="object-cover rounded"
                  />
                  <div className="p-2 col-span-2">
                    <h3 className="font-bold">{name}</h3>
                    <h2 className="text-sm font-bold">{title}</h2>
                    <p className="text-xs">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-4xl font-extrabold text-center py-4">
              Contato
            </h1>
            <div className="text-center">
              <Link
                target="_blank"
                rel="nofollow"
                href="https://web.whatsapp.com/send?phone=5585991292607"
              >
                <span className="hover:underline cursor-pointer">
                  {"Abrir WhatsApp (85) 9 9129-2607"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
