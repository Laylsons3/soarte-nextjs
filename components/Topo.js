import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function Topo() {
  return(
    <div>
      <Head>
        <title>Soarte</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="logo-soarte.ico"></link>
      </Head>
      <div className="flex justify-between bg-white h-20">
        <div className="ml-20 md:ml-40 flex items-center">
          <Image alt="Logo" src="/images/logo-soarte.svg" width={50} height={50} />
          <h1 className='text-5xl ml-2 Poppins text-emerald-500 font-bold'>Soarte</h1>
          </div>
        <div className="mr-20 md:mr-40 font-bold flex items-center"><Link href="/"><a className='bg-emerald-400 hover:bg-emerald-500 transition-colors py-2 px-4 rounded'>Doar</a></Link></div>
      </div>
    </div>
  )
}

export default Topo;
