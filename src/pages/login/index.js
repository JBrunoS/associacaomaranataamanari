import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

import './style.css'
import api from '../../services/api'

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        const data = {email, senha};

            try {
                await api.post('/admin', data)
                .then(response => {
                    
                    if (response.data.length <= 0) {
                        alert('Usuário não cadastrado')
                        return
                    }else{
                        localStorage.setItem('admin', response.data.id)
                        navigate('/admin')
                    }

                })
            } catch (error) {
                console.log(error)
            }
        
        
    }
    return(
        <div className='container-login'>
            <form onSubmit={handleLogin}>
                <span>Maranata - Administrador</span>
                <input 
                    type='email' 
                    placeholder='e-mail' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input 
                    type='password' 
                    placeholder='senha' 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    required
                />
                <button>entrar</button>
            </form>
        </div>
    )
}