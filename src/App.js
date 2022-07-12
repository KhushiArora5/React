import './App.css';
import Counter from './counter.js';
import Forms from './forms';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './homepage';
import Apple from './apple';
import Mango from './mango';

function App() {
  return (
    <div className="App">
      <Counter />
      <Forms />
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/apple" element={<Apple />}></Route>
        <Route exact path="/mango" element={<Mango />}></Route>
      </Routes>
    </Router>
    </div>
  </div>
  );
}

export default App;

//npm: node package manager
//es6 syntax
//promises: the event will be successful(resolve) or unsuccessful(reject). 
//used in async function. eg:
// async ftn{
//   //promises 
//   await 
// } 
