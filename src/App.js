import "./App.css";
import './Styles/hamburgers.css'
import './Styles/styles.css'
import Footer from "./Componentes/Footer";
import Header from './Componentes/Header'
import MainContainer from "./Componentes/MainContainer";

function App() {
     return (
          <>
               <div className="big-main-container">
                 <Header />
                 <MainContainer />
                 <Footer />
               </div>
          </>
     );
}

export default App;
