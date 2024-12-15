import Data from './Data'
import Header from './components/Header'
import Footer from './components/Footer'

import Lista from './components/Lista'
import './App.css';

function App() {


  
  return (
    <div className="App">
      <Header atual="Home Page"/>
      <main>
           <Lista data={Data} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
