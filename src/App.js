import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Home from './Pages/Home';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
      {/* <Header/> */}
      <Home/>
      </RecoilRoot>
    </div>
  );
}

export default App;
