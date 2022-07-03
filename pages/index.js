import Image from 'next/image'
import Videos from '../components/Videos'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Topo from '../components/Topo'
import Galeria from '../components/Galeria'

export default function Home() {
  return (
    <div>
      <Topo />
      <Section1 />
      <Section2 />
      <Galeria />
      <Videos />


    </div>
  )
}
