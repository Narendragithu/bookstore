import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import CakeComponent from './components/CakeComponent';
// import { store } from './Redux/store';
import { store } from './Redux/Toolkit/store';
import CountComponent from './components/CountComponent';
// import { store } from './Redux/Toolkit/store';
import LaptopComponents from './components/LaptopComponents';
import UserComponent from './components/UserComponent';


function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <CakeComponent />
        <CountComponent />

        <LaptopComponents />
        <UserComponent />
      </Provider>
    </div>
  );
}

export default App;
