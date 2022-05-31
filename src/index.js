import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Synopsis from './pages/Synopsis';
import Gems from './pages/Synopsis/gems';
import Gauntlet from './pages/Synopsis/gauntlet';
import Avengers from 'pages/Synopsis/avengers';
import Cast from 'pages/Cast';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="synopsis" element={<Synopsis />}>
              <Route index element={<Avengers/>} />
              <Route path="gauntlet" element={<Gauntlet />}/>
              <Route path=":gems" element={<Gems />} />
            </Route>
               <Route path="cast" element={<Cast />}>
                {/* <Route path=":memberId" element={<Member />} /> */}
              </Route>
              {/* <Route path="gallery" element={<Gallery />}>
                <Route path=":actorId" element={<Actor />} />
              </Route>   */}
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);

