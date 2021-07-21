import './App.scss';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App(){
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer name="@gunzenroses"/>
    </div>
  );
}

export default App;
