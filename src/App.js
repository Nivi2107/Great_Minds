import './App.css';
import Home from './pages/Home.jsx';
import Jobs from './pages/Jobs.jsx';
import Mandela from './pages/Mandela.jsx';
import Lincoln from './pages/Lincoln.jsx';
import Gandhi from './pages/Gandhi.jsx';
import {Route} from "react-router-dom";

function App() {
  return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/lincoln" component={Lincoln} />
        <Route exact path="/gandhi" component={Gandhi} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/mandela" component={Mandela} />
      </>
  );
}

export default App;
