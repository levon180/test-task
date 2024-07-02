import './App.css'
import Body from "./layouts/Body.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <Body />
      <Footer />
    </main>
  )
}

export default App
