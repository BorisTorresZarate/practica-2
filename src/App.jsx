
import './App.css'
import { Card } from './components/Card'
import teamBuilder from './assets/images/icon-team-builder.svg'
import Supervisor from './assets/images/icon-supervisor.svg'
import karma from './assets/images/icon-karma.svg'
import calculator from './assets/images/icon-calculator.svg'

function App() {
  const card1 = { borderTop: 'solid 3px cyan' }
  const card2 = { borderTop: 'solid 3px red' }
  const card3 = { borderTop: 'solid 3px orange' }
  const card4 = { borderTop: 'solid 3px blue' }
  const imagenTeamBuilder = teamBuilder
  const imagenSupervisor = Supervisor
  const imagenKarma = karma
  const imagenCalculator = calculator
  const t1 = "Supervisor"
  const t2 = "Team Builder"
  const t3 = "Karma"
  const t4 = "Calculator"
  const p1 = "Monitors activity to identify project roadblocks"
  const p2 = "Scans our talent network to create the optimal team four your project"
  const p3 = "Regularity evaluates our talent to ensure quality"
  const p4 = "Uses data from past projects to provide better delivery estimates"
  return (
    <>
      <div className='main'>
        <div className='header'>
          <h1>Reliable, efficient delivery <br /></h1>
          <h1>Powered by Technology <br /></h1>
          <p>Our Artificial Intelligence powered tools use millions of project data points <br /> </p>
          <p>to ensure that your project is successful</p>
        </div>
        <div className="main-container">
          <Card card={card1} imagen={imagenSupervisor} p={p1} t={t1}/>
          <div className="middle-card-container">
            <Card card={card2} imagen={imagenTeamBuilder} p={p2} t={t2}/>
            <Card card={card3} imagen={imagenKarma} p={p3} t={t3}/>
          </div>
          <Card card={card4} imagen={imagenCalculator} p={p4} t={t4}/>
        </div>
      </div>
    </>
  )
}

export default App
