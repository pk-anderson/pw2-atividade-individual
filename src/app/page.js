import Image from 'next/image'
import styles from './page.module.css'
import TitleDriver from './components/titleDriver/titleDriver'
import DriverInformation from './components/driverInformation/driverInformation'
import ContactDriver from './components/contactDriver/contactDriver'
import MessageBlock from './components/messageBlock/messageBlock'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.barSlide}></div>
      <TitleDriver />
      <DriverInformation />
      <ContactDriver />
      <MessageBlock text="Boris, estou no local já lhe esperando. Estou com camisa azul e calça jeans" photo="clientPhoto.jpeg" />
      <MessageBlock text="Acabei de lhe ver. Vou estacionar o carro próximo." photo="personPhoto.svg" />
    </main>
  )
}
