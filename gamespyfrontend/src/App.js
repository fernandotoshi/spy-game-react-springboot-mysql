import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
//import { Container, Row, Col } from 'react-bootstrap';
//import { Link, Outlet } from "react-router-dom";
//import Header from './components/header';
//import Profile from './components/profile';
//import Content from './components/content';
//import Footer from './components/footer';

import Layout from './components/Layout';
import CadastroJogadores from './pages/CadastroJogadores';
import InformacoesJogo from './pages/InformacoesJogo';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cadastroJogadores" element={<CadastroJogadores />} />
          <Route path="informacoesJogo" element={<InformacoesJogo/>} />
          <Route path="*" element={
            <div>There's nothing here!</div>
          } />
        </Route>
    </Routes>
  )
}

export default App;
