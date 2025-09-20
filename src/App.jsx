import Footer from "./components/foooter/Footer"
import Navbar from "./components/navbar/Navbar"

import Home from "./pages/Home"


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
