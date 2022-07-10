import Image from "next/image";
import Link from 'next/link';
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsGoogle,
  BsWhatsapp
} from 'react-icons/bs'

function Footer() {
  return(
    <section id="contato">
      <div className="Component pb-2 pt-10 bg-emerald-900 text-white">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="flex justify-center">
            <div className="flex my-auto w-[100px] h-[100px] ml-2">
              <Image alt="Logo" src="/images/logo.svg" width={100} height={100} />
            </div>
            <div className="flex flex-col leading-5">
              <div className="mx-2 mb-1 font-medium Poppins">Soarte - Sociedade Artística</div>
              <div className="mx-2 mb-1 hover:underline">soartemusica@gmail.com</div>
              <div className="mx-2 mb-1 hover:underline flex items-center">
                <BsWhatsapp className='w-4 h-4 mr-1'/>
                <Link href="https://api.whatsapp.com/send?phone=85991292607">(85) 9 9129-2607</Link>
                </div>
              <p className="mx-2 text-sm w-64 leading-4">Rua Antônio Luís de Sousa, 560. Monguba Pacatuba/CE CEP: 61805-770</p>

            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center mb-8 md:mb-0 ">
          <div>
              <Link href="https://instagram.com/soartepacatuba">
                <a rel="nofollow" target="_blank">
                  <div>
                    <BsInstagram className='w-10 h-10' />
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/soartepacatuba">
                <a rel="nofollow" target="_blank">
                  <div>
                    <BsFacebook className='w-10 h-10' />
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/channel/UCCZIFT7vpK5DZXlENkt61mw">
                <a rel="nofollow" target="_blank">
                  <div>
                    <BsYoutube className='w-10 h-10' />
                  </div>
                </a>
              </Link>
            </div>
            <div>
              <Link href="mailto:soartemusica@gmail.com">
                <a rel="nofollow">
                  <div>
                    <BsGoogle className='w-10 h-10' />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-5">
          <div className="text-[10pt] text-center Montserrat">
           &copy; 2022 | Soarte - Sociedade Artística | Todos os direitos reservados
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer;
