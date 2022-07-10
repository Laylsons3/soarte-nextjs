import {
  GiMusicalNotes,
  GiFlute,
  GiClarinet,
  GiTrumpet,
  GiMusicalKeyboard,
  GiSaxophone
} from 'react-icons/gi'
import { FaGuitar } from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';
import CardCurso from './Cards/CardCurso';

const Oficinas = [
  {oficina: 'Oficina de Flauta Doce', descricao: 'Promover a inicialização da musicalização através d...', caminho: '/images/flauta-doce.jpeg'},
  {oficina: 'Oficina de Violão', descricao: 'Promover a inicialização da musicalização através d...', caminho: '/images/violao.jpeg'},
  {oficina: 'Oficina de Clarinete', descricao: 'Promover a inicialização da musicalização através d...', caminho: '/images/clarinete.jpeg'},
]

function Cursos() {
  return(
    <section id="cursos">
      <div className='Component grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-evenly gap-2'>
        {Oficinas.map(data => (
          <CardCurso
          key={data.oficina}
          oficina={data.oficina}
          descricao={data.descricao}
          caminho={data.caminho}
          />

        ))}
      </div>


    </section>
  )
}

export default Cursos;
