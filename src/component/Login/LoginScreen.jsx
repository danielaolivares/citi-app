import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../elements/Button';


function LoginScreen() {
  return (
    <div>
      <Link to="/register"><Button>Registrarme</Button></Link>
      <Link to="/login"><Button>Iniciar sesión</Button></Link>
    </div>
  );
}

export default LoginScreen;
