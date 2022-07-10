import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Topo(props) {

  const descricao = 'Soarte - Centro Cultural Sons da Aratanha';

  return(
    <section id="Component">
      <Head className="Component">
        <title>Soarte - Sociedade Artística</title>
        <meta name="title" content="Soarte - Sociedade Artística" />
        <meta name="description" content={ props.descricao || descricao} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soarte-org.vercel.app/" />
        <meta property="og:title" content="Soarte - Sociedade Artística" />
        <meta property="og:description" content={ props.descricao || descricao} />
        <meta property="og:image" content="https://soarte-org.vercel.app/images/capa.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://soarte-org.vercel.app/" />
        <meta property="twitter:title" content="Soarte - Sociedade Artística" />
        <meta property="twitter:description" content={ props.descricao || descricao} />
        <meta property="twitter:image" content="https://soarte-org.vercel.app/images/capa.jpg" />

        <link rel="icon" type="image/x-icon" href="logo-soarte.ico"></link>
      </Head>
      <div className="flex justify-between px-4 md:px-40 bg-white h-20">
        <div className="flex items-center">
          <div className="h-16 w-16 mr-2">
            <Image src="/images/logo.svg" width={64} height={64} alt="Logo Soarte" />
          </div>
          <h1 className='text-5xl Poppins text-emerald-500 font-bold'>Soarte</h1>
        </div>
        <div className="font-bold flex items-center">
          <Link href="https://apoia.se/soarte">
            <a rel='nofollow' target="_blank" className='bg-emerald-500 hover:bg-emerald-400 hover:drop-shadow transition-colors text-white py-2 px-4 rounded'>
              Doar
            </a>
          </Link>
        </div>
      </div>
      <div className='flex gap-5 pb-1 justify-center bg-white font-medium'>
        <Link href="/"><a className='hover:underline'>inicio</a></Link>
        <Link href="#galeria"><a className='hover:underline'>galeria</a></Link>
        <Link href="#cursos"><a className='hover:underline'>cursos</a></Link>
        <Link href="#quem-somos"><a className='hover:underline'>quem somos</a></Link>
        <Link href="#contato"><a className='hover:underline'>contato</a></Link>

      </div>
    </section>
  )
}

export default Topo;
