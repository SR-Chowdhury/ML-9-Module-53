import './App.css'
import AxiosComp from './components/AxiosComp/AxiosComp';
import Chart1 from './components/Chart/Chart1';
import Navbar from './components/NavBar/Navbar';
import PriceList from './components/PriceList/PriceList';

function App() {

  return (
    <div className="App">

      {/* ML-9-Module 53.3 To 53.4 */}
      <Navbar />

      <h1 className="text-6xl text-purple-800 text-center my-5 mb-11">Bimsillahir Rahmanir Rahim</h1>

      {/* ML-9-Module 53.5 To 53.6*/}
      <PriceList />

      {/* ML-9-Module 53.7 */}
      <Chart1/>

      {/* ML-9-Module 53.8 */}
      <AxiosComp/>
    </div>
  )
}

export default App
