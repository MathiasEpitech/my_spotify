import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Error from './components/Error';
// import Albums from './components/Albums';
// import AlbumDetail from './components/Albums/AlbumsDetail';
import Home from './pages/Home';
import Survey from './pages/Survey';
import './index.css';
import AlbumsP from './pages/Albums';
import AlbumsDetailP from './pages/AlbumsDetail';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/albums" element={<AlbumsP/>} />
        <Route path="/albums/:id" element={<AlbumsDetailP/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
