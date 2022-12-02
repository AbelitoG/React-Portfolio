import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import {useState} from "react"

function App() {
  const [page, setPage] = useState("about")

  const Render = () => {
    switch (page){
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
    }
  }


  return (
    <div className="App">
      <Navigation page = {page} setPage = {setPage} />
      <Render />
      <Footer />
    </div>
  );
}

export default App;
