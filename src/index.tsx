/**
 * @ Router, alert 각종설정
 */
import Home from './Home';
import App from './Wardle';
import Join from './components/join/Join';
import Header from './components/layout/Header';
import { AlertProvider } from './context/AlertContext';
import './index.css';
import WagmiProvider from './wagmi/Provider';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WaitingRoom from '../src/components/layout/WaitingRoom';
import UserContextProvider from './store/context';

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <WagmiProvider>
        <AlertProvider>
          <div className='w-screen flex h-screen bg-black justify-center'>
            <div
              className='flex
        justify-center w-screen bg-slate-400  h-full relative'
            >
              <Header />
              <Routes>
                <Route path='/waiting' element={<WaitingRoom />} />
                <Route path='/playgrounds' element={<App />} />
                <Route path='/' element={<Home />} />
                <Route path='/join' element={<Join />} />
              </Routes>
            </div>
          </div>
        </AlertProvider>
      </WagmiProvider>
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
