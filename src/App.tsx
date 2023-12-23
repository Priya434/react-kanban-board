// import './App.css'
import Card from './components/Card'

function App() {

  const cardDetails = { id: "CAM-10", title: "Conduct Security Vulnerability Assessment", tag: ["Feature Request"], userId: "usr-4", status: "Backlog", priority: 1 }

  return (
    <>
      <Card {...cardDetails} />
    </>
  )
}

export default App
