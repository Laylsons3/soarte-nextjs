import Image from 'next/image';
import { Popover } from '@headlessui/react'

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
    <div className='mx-20 md:mx-40 flex flex-row gap-1 relative'>
      <div className=''>
        {images.map((image => (
          <Popover key='' className="">
          <Popover.Button>
            <div className='flex flex-row'>
              <Image className='rounded-md object-cover hover:scale-110 transition-transform' src={image.path} width={260} height={180} alt="Imagem Galeria" />
            </div>
          </Popover.Button>

          <Popover.Panel className="absolute z-10">
            <div className='bg-green-500 p-4 absolute overflow-auto w-full z-50'>
              <Image className='rounded-md object-cover hover:scale-110 transition-transform absolute' src={image.path} width={260} height={180} alt="Imagem Galeria" />
            </div>
          </Popover.Panel>
        </Popover>
        )))}

      </div>

    </div>
  )
}

export default Galeria;
