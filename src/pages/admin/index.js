import React, { useEffect, useState } from "react";
import { FaPowerOff, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

import './style.css'
import api from "../../services/api";

export default function Admin() {
    const [incidents, setIncidents] = useState([])
    const [mensagens, setMensagens] = useState([])
    
    const navigate = useNavigate()

    function handleLogged(){
        const admin = localStorage.getItem('admin')
        if (!admin) {
            navigate('/login')
        }
    }

    async function handleIncidents() {
        try {
            await api.get('publicacoes')
                .then(response => {
                    setIncidents(response.data)
                })
        
        } catch (error) {
            console.log(error)
        }
    }

    async function handleMensagens(){
        await api.get('/messages')
        .then(response => {
            setMensagens(response.data)
        })
    }

    useEffect(() => {
        handleIncidents();
        handleMensagens();
        handleLogged();
    }, [])

    function handleRegister() {
        navigate('/register')
    }

    function handleLogout() {
        localStorage.setItem('admin', '')
        navigate('/login')
    }

    function handleEdit(id) {
        localStorage.setItem('user_id', parseInt(id))
        navigate('/edit')
    }

    async function handleDelete(id) {

        try {
            await api.delete(`/delete/post/${parseInt(id)}`)
                .then(response => {
                    setIncidents(incidents.filter(incident => incident.user_id !== id))
                })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='container-admin'>
            <div className='header-admin'>
                <span>Associação Maranata</span>
                <div onClick={handleLogout} ><FaPowerOff size={20} color='#FFFFFF' /></div>
            </div>
            <div className='body-admin'>
                <div className='button-admin'>
                    <button onClick={handleRegister}>Adicionar</button>
                </div>
                <div className='content-admin'>
                    {incidents.map((incidents, index) => (
                        <div className='card-admin' key={incidents.user_id}>
                            <div className='card-img'>

                                <img src={incidents.url} alt={incidents.nome} />

                            </div>
                            <div className='card-title'>
                                <p>{incidents.atividade}</p>
                                <p>Projeto Ensinando a Viver - {incidents.projeto}</p>
                                <p>{incidents.data}</p>
                            </div>
                            <div className='card-buttons'>
                                <div><FaEdit size={20} color='#f97e14' onClick={() => handleEdit(incidents.user_id)} /></div>
                                <div><FaTrashAlt size={20} color='#f91414' onClick={() => handleDelete(incidents.user_id)} /></div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="mensagens">
                {mensagens.map((e, index) => (
                    <div key={index}>
                        <span>{e.nome}</span>
                        <span>{e.email}</span>
                        <p>{e.mensagem}</p>
                        <span>{e.created_at}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}