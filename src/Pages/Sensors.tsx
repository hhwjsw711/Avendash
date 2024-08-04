import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sensor from '../Components/Sensor'

interface SensorProps {
  sensor5?: string | undefined | number
  sensor6?: string | undefined | number
  sensor7?: string | undefined | number
  sensor8?: string | undefined | number
}

const Sensors = ({ sensor5, sensor6, sensor7, sensor8 }: SensorProps) => {
  return (
    <>
      <Navbar addClass="" />
      <Sensor
        sensor5={sensor5}
        sensor6={sensor6}
        sensor7={sensor7}
        sensor8={sensor8}
      />
      <Footer addClass="mt-10" />
    </>
  )
}

export default Sensors
