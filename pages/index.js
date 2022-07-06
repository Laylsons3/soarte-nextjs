import Videos from '../components/Videos'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Topo from '../components/Topo'
import Galeria from '../components/Galeria'
import Footer from '../components/Footer'
import QuemSomos from '../components/QuemSomos'

export default function Home() {
  return (
    <div>
      <Topo descricao="Soarte - Centro Cultural Sons da Aratanha" />
      <Section1 />
      <Section2 />
      <QuemSomos />
      <Section3 />
      <Galeria />
      <Videos />
      <Footer />

    </div>
  )
}

