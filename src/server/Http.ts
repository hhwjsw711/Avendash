import { useEffect, useState } from 'react'

interface Message {
  pH?: number | undefined
  turbidity?: number | undefined
  DO?: number | undefined
  T?: number | undefined
}

interface Report {
  id: string
  dissolvedoxygen: number
  turbidity: number
  waterPH: number
  waterT: number
  clientId: string
  detectedTime?: Date
  createdAt?: Date
}

const convertToMessage = (report: Report): Message => {
  return {
    pH: report.waterPH,
    turbidity: report.turbidity,
    DO: report.dissolvedoxygen,
    T: report.waterT,
  }
}

const fetchLatestReport = async (): Promise<Report | null> => {
  try {
    /* const response = await fetch('http://localhost:5173/api/reports', { */
    const response = await fetch('https://lszmwh.cn/api/reports', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data: Report[] = await response.json()
    console.log('Fetched data:', data)

    if (data.length > 0) {
      return data.reduce(
        (latest, report) => {
          if (!latest) return report
          return report.createdAt &&
            latest.createdAt &&
            report.createdAt > latest.createdAt
            ? report
            : latest
        },
        null as Report | null,
      )
    }
    return null
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    throw error
  }
}

const HTTPComponent = () => {
  const [latestMessage, setLatestMessage] = useState<Message>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestReport = await fetchLatestReport()
        if (latestReport) {
          setLatestMessage(convertToMessage(latestReport))
        }
      } catch {
        // Optionally handle errors here
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 10000)

    return () => clearInterval(intervalId)
  }, [])

  console.log(latestMessage)
  return latestMessage
}

export default HTTPComponent
