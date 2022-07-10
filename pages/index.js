import Topo from '../components/Topo'
import Capa from '../components/Capa'
import Frase from '../components/Frase'
import QuemSomos from '../components/QuemSomos'
import Cursos from '../components/Cursos'
import Galeria from '../components/Galeria'
import Videos from '../components/Videos'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Topo />
      <Capa />
      <Frase />
      <QuemSomos />
      <Cursos />
      {/* <Galeria /> */}
      <Videos />
      <Footer />
    </div>
  )
}
