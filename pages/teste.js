import Link from 'next/link';
import { setCookie, destroyCookie } from 'nookies';


export default function Teste() {
  function signIn() {
    setCookie(null, 'token', 'valor-do-token', {
      maxAge: 30 * 24 * 60 * 60, // 1 mes
    })
  }

  function signOut() {
    destroyCookie(null, 'token')
  }

  return(
    <div className="flex flex-col gap-5 bg-teal-900 text-white justify-center items-center h-screen">
      <div><Link href="/dashboard"><a className='hover:underline'>Dashboard</a></Link></div>
      <div className='flex flex-row gap-5'>
        <div className="">
          <button className="bg-blue-700 text-white px-8 py-1 rounded-lg" onClick={signIn}>Entrar</button>
        </div>
        <div>
          <button className="bg-blue-700 text-white px-8 py-1 rounded-lg" onClick={signOut}>Sair</button>
        </div>
      </div>
    </div>
  )
}
