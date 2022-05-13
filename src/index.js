import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Synopsis from './pages/Synopsis';
import Information from './pages/Synopsis/information';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="synopsis" element={<Synopsis />}>
              <Route path=":informationId" element={<Information />} />
            </Route>
              {/* <Route path="cast" element={<Cast />}>
                <Route path=":memberId" element={<Member />} />
              </Route>
              <Route path="gallery" element={<Gallery />}>
                <Route path=":actorId" element={<Actor />} />
              </Route>  */}
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);

