import Head from 'next/head';
import Link from 'next/link';
import Logo from './Logo';

function Topo() {
  return(
    <div>
      <Head>
        <title>Soarte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Soarte"/>
        <meta property="og:type" content="Música, arte e cultura."/>
        <meta property="og:url" content="https://soarte-org.vercel.app"/>
        <meta property="og:image" content="https://soarte-org.vercel.app/images/capa.jpgg"/>
        <meta property="og:site_name" content="Soarte - Sociedade Artística"/>
        <meta property="og:description"
              content="Descrição de teste."/>

        <link rel="icon" type="image/x-icon" href="logo-soarte.ico"></link>
      </Head>
      <div className="flex justify-between bg-white h-20">
        <div className="ml-20 md:ml-40 flex items-center">
          <Logo className="h-16 w-16" />
          <h1 className='text-5xl ml-2 Poppins text-emerald-500 font-bold'>Soarte</h1>
          </div>
        <div className="mr-20 md:mr-40 font-bold flex items-center"><Link href="/">
          <a className='bg-emerald-500 hover:bg-emerald-400 hover:drop-shadow transition-colors text-white py-2 px-4 rounded'>Doar</a></Link></div>
      </div>
    </div>
  )
}

export default Topo;
