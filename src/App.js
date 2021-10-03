import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import TreeMapChart from './components/TreeMapChart/TreeMapChart';
import ContainerChart from './components/ContainerChart/ContainerChart';
function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <TreeMapChart></TreeMapChart>
      <ContainerChart></ContainerChart>
    </div>
  );
}

export default App;
