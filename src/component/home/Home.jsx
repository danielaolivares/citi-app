import React from 'react';
import './Home.css';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { BrowserRouter, Link } from 'react-router-dom';

export default () => {
  const firebase = useFirebaseApp();

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <BrowserRouter>
      <div className="containe-btn-home">

        <button type="button" className="btn-home"><Link to="/Profile" >Mi Perfil</Link></button>
        <button type="button" className="btn-home">Pagar Cuentas</button>
        <button type="button" className="btn-home">Transferir</button>
        <button type="button" className="Btn-two" onClick={logout}>Cerrar sesión</button>

      </div>
    </BrowserRouter>
  );
};
