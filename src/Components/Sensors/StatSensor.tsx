import { useRef, useEffect } from 'react'
import Stat from '../stats/Stat'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'

interface SensorProps {
  sensor5?: string | number | undefined
  sensor6?: string | number | undefined
  sensor7?: string | number | undefined
  sensor8?: string | number | undefined
}

const StatSensor = ({
  sensor5,
  sensor6,
  sensor7,
  sensor8,
}: SensorProps) => {
  const { t } = useTranslation()
  const themeLtH = (sensor: string | number | undefined): string => {
    const sensorValue = sensor ? parseInt(sensor.toString()) : NaN
    if (!isNaN(sensorValue)) {
      if (sensorValue < 50) {
        return 'bg-[url("img/hujan.gif")]'
      } else if (sensorValue > 50) {
        return 'bg-[url("img/panas.gif")]'
      } else {
        return 'bg-[url("img/orang.gif")]'
      }
    }
    return 'bg-[url("img/kucing.gif")]'
  }

  const themeHtL = (sensor: string | number | undefined): string => {
    const sensorValue = sensor ? parseInt(sensor.toString()) : NaN
    if (!isNaN(sensorValue)) {
      if (sensorValue < 50) {
        return 'bg-[url("img/orang.gif")]'
      } else if (sensorValue > 50) {
        return 'bg-[url("img/hujan.gif")]'
      } else {
        return 'bg-[url("img/hujan.gif")]'
      }
    }
    return 'bg-[url("img/kucing.gif")]'
  }

  const sensorRef = useRef<HTMLDivElement>(null)
  const indicatorTopRef = useRef<HTMLDivElement>(null)
  const indicatorBottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      sensorRef.current,
      { opacity: 0, x: -400 },
      { opacity: 1, x: 0, duration: 1 },
    )
    gsap.fromTo(
      indicatorTopRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5 },
    )
    gsap.fromTo(
      indicatorBottomRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 2 },
    )
  }, [])

  return (
    <div className="sensor-wrapper box-border flex h-full flex-col items-start justify-start gap-5 rounded-box pt-10 text-xl text-secondary-content shadow-primary md:pt-4 xl:h-3/4 xl:pt-0">
      <div
        className="sensor-text flex h-full w-full flex-col gap-5 md:flex-row"
        ref={indicatorTopRef}
      >
        <Stat addClass={`${themeHtL(sensor5)}`}>
          <h1 className="text-xl font-semibold">
            {t('statsensor.pH', { sensor5 })}
          </h1>
        </Stat>
      </div>
      <div
        className="sensor-text flex h-full w-full flex-col gap-5 md:flex-row"
        ref={indicatorBottomRef}
      >
        <Stat addClass={`${themeLtH(sensor6)}`}>
          <h1 className="text-xl font-semibold">
            {t('statsensor.turbidity', { sensor6 })}
          </h1>
        </Stat>
      </div>
      <div
        className="sensor-text flex h-full w-full flex-col gap-5 md:flex-row"
        ref={indicatorBottomRef}
      >
        <Stat addClass={`${themeLtH(sensor7)}`}>
          <h1 className="text-xl font-semibold">
            {t('statsensor.DO', { sensor7 })}
          </h1>
        </Stat>
      </div>
      <div
        className="sensor-text flex h-full w-full flex-col gap-5 md:flex-row"
        ref={indicatorBottomRef}
      >
        <Stat addClass={`${themeLtH(sensor8)}`}>
          <h1 className="text-xl font-semibold">
            {t('statsensor.T', { sensor8 })}
          </h1>
        </Stat>
      </div>
    </div>
  )
}

export default StatSensor
