import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import Image from "next/image";
import Logo from '../public/images/logo.svg';
import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function Painel() {

    const onChange = e => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
      };
    
      const onLoad = fileString => {
        // console.log(fileString);
        setImage(fileString)
      };
    
      const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onLoad(reader.result);
        };
      };

  const databaseRef = collection(database, 'galeria')

  const [image, setImage] = useState('');

  const addData = () => {
    addDoc(databaseRef, {
      image: image,
    })
    .then(() => {
      alert('Imagem adicionada')
      setImage('');
    })
    .catch((err) => {
      console.error(err)
    })
  }

    const router = useRouter();

    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token){
            getData()
          }
        if (!token){
            router.push('/login-admin')
        }
      }, [router]) //eslint-disable-line

    function Logout() {
        sessionStorage.clear('Token')
        // if (!token){
            router.push('/')
        // }
    }

    const [fireData, setFireData] = useState([]);

    const getData = async () => {
        await getDocs(databaseRef)
        .then((res) => {
            setFireData(res.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    const imgPaths = fireData.map(data=> data.image.replace(/^data:image\/jpeg;base64,/, ''))

    const [pathAvatar, setPathAvatar] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        function SetSections() {
            setPathAvatar(sessionStorage.Avatar)
            setName(sessionStorage.User)
            setEmail(sessionStorage.Email)
        }
        SetSections()
    },[])

    // console.log(pathAvatar)

        return(
        <div>
            <div>
                <header className="flex justify-between items-center bg-teal-700">
                    <div className="flex m-2 items-end">
                        <div className="h-16 w-16 flex items-end pb-1">
                        <Image src={Logo} alt="Logo" />
                        </div>
                        <div className="text-white font-bold text-4xl ml-2">Painel</div>
                    </div>
                    <div className="text-white flex flex-col items-center justify-center">
                        <div>{name}</div>
                        <div>{email}</div>
                    </div>
                    <div className="p-4">
                        <button onClick={Logout} className="bg-emerald-200 text-emerald-800 font-medium px-6 py-1 rounded">Sair</button>
                    </div>
                </header>
            </div>
            <div className="flex bg-emerald-50 justify-center p-4">
                <div className="bg-teal-900 text-teal-50 p-4 w-full">
                <div className="font-medium">Galeria</div>
                <div className="my-4 flex">
                    <label>
                        <input 
                        onChange={onChange}
                        className="block w-full text-sm text-teal-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-emerald-700
                        hover:file:bg-violet-100" type="file" />
                    </label>
                    <div>
                    <button
                    onClick={addData}
                    className='bg-zinc-200 text-zinc-700 px-10 font-medium py-1 rounded hover:bg-zinc-300 transition-colors'
                    type="submit">Enviar</button>
                    </div>
                    
                </div>

                <div className="flex p-2 h-20 bg-teal-700">
                    {fireData.map(data => (
                        <div key={data.id}>
                            {/* <Image alt="Imagem" width={150} height={150} data={imgPaths} /> */}
                            {/* <img src={imgPaths} /> */}
                            <p>{data.image}</p>
                        </div>
                    ))}                  
                </div>

                </div>

            </div>
        </div>
    )
}