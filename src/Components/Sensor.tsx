import AI from './AI'
import StatSensor from './Sensors/StatSensor'

interface SensorProps {
  sensor5?: string | number
  sensor6?: string | number
  sensor7?: string | number
  sensor8?: string | number
}


const Sensor = ({ sensor5, sensor6, sensor7, sensor8 }: SensorProps) => {
  return (
    <div className="grid items-center justify-center w-full min-h-screen grid-cols-1 gap-5 px-12 sensors xl:-mt-16 xl:grid-cols-2 xl:gap-5">
      <StatSensor
        sensor5={sensor5}
        sensor6={sensor6}
        sensor7={sensor7}
        sensor8={sensor8}
      />
      <AI />
    </div>
  )
}

export default Sensor
