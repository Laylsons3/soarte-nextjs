import Image from 'next/image';
import { Popover } from '@headlessui/react'
import { AiFillCloseCircle } from 'react-icons/ai'

function Galeria() {

  const images = [
    {
      path: '/images/galeria/img1.jpg',
      width: 1600,
      height: 1070
    },{
      path: '/images/galeria/img2.jpg',
      width: 960,
      height: 642
    },{
      path: '/images/galeria/img3.jpg',
      width: 960,
      height: 642
    },{
      path: '/images/galeria/img4.jpg',
      width: 960,
      height: 642
    },{
      path: '/images/galeria/img5.jpg',
      width: 960,
      height: 642
    },{
      path: '/images/galeria/img6.jpg',
      width: 960,
      height: 720
    },{
      path: '/images/galeria/img7.jpg',
      width: 720,
      height: 960
    },
  ]

  //260x180

  return(
    <section id="Component">
      <div className='Component'>
        <div className='bg-slate-800 py-8 px-3 relative rounded-lg'>
          <h1 className='text-white text-center text-3xl mb-8'>Imagens</h1>
          <div className='flex gap-2'>
            {images.map((image => (
              <Popover key={image.path} className=''>
              <Popover.Button>
                <div>
                  <Image className='rounded-md object-cover hover:scale-110 transition-transform' src={image.path} width={260} height={180} alt="Imagem Galeria" />
                </div>
              </Popover.Button>

              <Popover.Panel className=" absolute right-0 left-0 -top-28 z-10 w-full h-full">
                <div className='bg-[#000000bb] rounded-lg p-4 overflow-auto w-full z-50 flex justify-center relative'>
                  <Image className='absolute' src={image.path} width={image.width} height={image.height} alt="Imagem Galeria" />
                  <div className='flex text-white items-start text-right'>
                    <Popover.Button className='absolute top-0 right-0 m-4'>
                      <AiFillCloseCircle className='w-8 h-8' />
                    </Popover.Button>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
            )))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galeria;
