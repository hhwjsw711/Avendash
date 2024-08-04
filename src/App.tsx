import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sensors from './Pages/Sensors'
import Hero from './Pages/Hero'
import Videos from './Pages/Videos'
import HTTPComponent from './server/Http'

const App = () => {

  const { pH, turbidity, DO, T } = HTTPComponent()

  const applyCeil = (value: number | undefined) =>
    value !== undefined ? Math.ceil(value) : undefined

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/sensors"
          element={
            <Sensors
              sensor5={applyCeil(pH)}
              sensor6={applyCeil(turbidity)}
              sensor7={applyCeil(DO)}
              sensor8={applyCeil(T)}
            />
          }
        />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  )
}

export default App
