import { useEffect, useState } from 'react';
import { app } from '../firebaseConfig';
import {
  getAuth,
  // createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
 } from 'firebase/auth';
import { useRouter } from 'next/router';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

export default function LoginAdmin() {

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const router = useRouter();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((res) => {
        setCookie(null, 'token', res.user.accessToken, { maxAge: 30 * 24 * 60 * 60 })
        setCookie(null, 'user', res.user.displayName, { maxAge: 30 * 24 * 60 * 60 })
        setCookie(null, 'email', res.user.email, { maxAge: 30 * 24 * 60 * 60 })
        setCookie(null, 'avatar', res.user.photoURL, { maxAge: 30 * 24 * 60 * 60 })
        router.push('/painel')
    })
  }

  // useEffect(() => {
  //   let token = parseCookies('token')
  //   if (token){
  //       router.push('/painel')
  //   }
  // }, [router])

  return (
    <div>

      <main>
        <div className='flex flex-col gap-2 items-center mt-20 justify-center'>
          <h1 className='text-2xl font-bold'>Entrar</h1>
        <button
        onClick={signUpWithGoogle}
        className='bg-zinc-600 text-zinc-200 px-6 py-1 rounded hover:bg-zinc-700 transition-colors'
        type="submit">Entrar com Google</button>


        </div>

      </main>

      <footer>

      </footer>
    </div>
  )
}
