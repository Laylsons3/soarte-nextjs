import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useState } from 'react';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Example() {
  const databaseRef = collection(database, 'galeria')
  const [fireData, setFireData] = useState([]);
  const [image, setImage] = useState('');

  const getData = async () => {
    await getDocs(databaseRef)
    .then((res) => {
      setFireData(res.docs.map((data) => {
        return {...data.data(), id: data.id}
      }))
    })
  }
  getData()

  // const router = useRouter();

  const onChange = e => {
  const files = e.target.files;
  const file = files[0];
  getBase64(file);
  };

  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const onLoad = fileString => {
    setImage(fileString)
  };

  const addData = () => {
    addDoc(databaseRef, {
        image: image,
    })
    .then(() => {
      setImage('');
    })
    .catch((err) => {
        console.error(err)
    })
  }

  //   const router = useRouter();

  //   function Logout() {
  //       sessionStorage.clear('Token')
  //       // if (!token){
  //           router.push('/')
  //       // }
  //   }

  //   const [pathAvatar, setPathAvatar] = useState('')
  //   const [name, setName] = useState('')
  //   const [email, setEmail] = useState('')

  //   useEffect(() => {
  //       function SetSections() {
  //           setPathAvatar(sessionStorage.Avatar)
  //           setName(sessionStorage.User)
  //           setEmail(sessionStorage.Email)
  //       }
  //       SetSections()
  //   },[])

  const user = {
    name: 'Laylson Sousa',
    email: 'laylsons3@gmail.com',
    imageUrl:
      '/images/perfil.png',
  }
  const navigation = [
    { name: 'Galeria', href: '#', current: true },
    { name: 'Equipe', href: '#', current: false },
    { name: 'Alunos', href: '#', current: false },
    { name: 'Projetos', href: '#', current: false },
    { name: 'Relatórios', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Perfil', href: '#' },
    { name: 'Configurações', href: '#' },
    { name: 'Sair', href: '#' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 w-8 h-8">
                      <Link href="/">
                        <a>
                          <Image src="/images/logo.svg" width={32} height={32} alt="Image perfil" />
                        </a>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">Notificações</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Abrir menu do usuário</span>
                            <div className='w-8 h-8'>
                              <Image className='rounded-full' src={user.imageUrl} layout="fill" alt="Image perfil" />
                            </div>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Abrir menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image src={user.imageUrl} width={30} height={30} alt="Image perfil" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">Notificações</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Galeria</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className='flex items-center mb-2'>
              <div>
              <label>
                  <input
                  onChange={onChange}
                  className="block w-full text-sm text-teal-700
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-white file:text-emerald-700
                  hover:file:bg-emerald-200" type="file" />
              </label>
              </div>
              <div>
              <button
              onClick={addData}
              className='bg-white text-emerald-700 text-sm py-2 ml-2 px-10 font-medium rounded-full hover:bg-emerald-200 transition-colors'
              type="submit">Enviar</button>
              </div>
            </div>
            <div className='p-4 bg-teal-800 text-teal-50 border-4 border-emerald-50 rounded-lg'>

              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
                {fireData.map(data => (
                  <div className='w-40 h-40 col-span-1' key={data.id}>
                    <Image className='object-cover' src={data.image} width={160} height={160} alt="Imagem galeria" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps = async ({ req }) => {
  const { token } = req.cookies

  if(!token) {
    return {
      redirect: {
        destination: '/teste',
        permanent: false
      }
    }
  }

  return {
    props: {},
  }
}
