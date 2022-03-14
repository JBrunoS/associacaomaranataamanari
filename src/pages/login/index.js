import React from "react";
import { useNavigate } from 'react-router-dom'

import './style.css'

export default function Login(){
    const navigate = useNavigate();

    function handleLogin(){
        navigate('/admin')
    }
    return(
        <div className='container-login'>
            <form onSubmit={handleLogin}>
                <span>Maranata - Administrador</span>
                <input type='email' placeholder='e-mail' />
                <input type='password' placeholder='senha' />
                <button>entrar</button>
            </form>
        </div>
    )
}