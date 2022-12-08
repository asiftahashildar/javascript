import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import "./Common.css"
import { Todo } from './Component/Todo';
import { Timer } from './Component/Timer';
import { ToggleButton } from './Component/ToggleButton';

function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    {/* <Todo/> */}
    {/* <Timer/> */}
    <ToggleButton/>
    </div>
  );
}



export default App;
