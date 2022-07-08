import { useEffect, useState } from 'react';
import { app } from '../firebaseConfig';
import {
  getAuth,
  // createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
 } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function LoginAdmin() {

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const router = useRouter();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((res) => {
        sessionStorage.setItem('Token', res.user.accessToken)
        sessionStorage.setItem('User', res.user.displayName)
        sessionStorage.setItem('Email', res.user.email)
        sessionStorage.setItem('Avatar', res.user.photoURL)
        router.push('/painel')
    })
  }

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (token){
        router.push('/painel')
    }
  }, [router])

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
