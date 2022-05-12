import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
            {/* <Route index path="synopsis" element={<Synopsis />}>
              <Route path=":informationId" element={<Information />} />
            </Route>
            <Route index path="cast" element={<Cast />}>
              <Route path=":memberId" element={<Member />} />
            </Route>
            <Route index path="gallery" element={<Gallery />}>
              <Route path=":actorId" element={<Actor />} />
            </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

