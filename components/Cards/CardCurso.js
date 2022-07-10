import Image from 'next/image';

function CardCurso({oficina, descricao, caminho}) {
  return(
    <>
      <div className='flex mb-2 bg-white border-gray-200 shadow-md rounded-lg w-sm'>
        <div className='flex items-center bg-emerald-200 w-full relative object-cover rounded-l-lg'>
          <Image className='object-cover rounded-l-lg' src={caminho} layout='fill' alt="image" />
        </div>
        <div className='flex flex-col m-2'>
          <h1 className='font-bold text-xl'>
            {oficina}
          </h1>
          <p className='text-sm text-gray-600'>
            {descricao}
          </p>
          <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Ver mais
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
          </a>
        </div>

      </div>
    </>
  )
}

export default CardCurso;
