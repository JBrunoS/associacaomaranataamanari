import React, { useEffect, useState } from "react";
import { FaPowerOff, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

import './style.css'
import api from "../../services/api";

import kids1 from '../../assets/kidsto.jpg'

export default function Admin() {
    const [incidents, setIncidents] = useState([])
    const [imagens, setImagens] = useState([])
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
            await api.get('/all/posts')
                .then(response => {
                    setIncidents(response.data)
                    
                    for (let index = 0; index < response.data.length; index++) {
                        api.get(`/image/${response.data[index].id}`)
                            .then(response => {
                                setImagens(response.data)
                                
                            })
                    }
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
        localStorage.setItem('user_id', id)
        navigate('/edit')
    }

    async function handleDelete(id) {

        try {
            await api.delete(`/delete/post/${id}`)
                .then(response => {
                    setIncidents(incidents.filter(incident => incident.id !== id))
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
                        <div className='card-admin' key={incidents.id}>
                            <div className='card-img'>

                                <img src={kids1} alt='imagem' />

                            </div>
                            <div className='card-title'>
                                <p>{incidents.atividade}</p>
                                <p>{incidents.projeto}</p>
                                <p>{incidents.data}</p>
                            </div>
                            <div className='card-buttons'>
                                <div><FaEdit size={20} color='#f97e14' onClick={() => handleEdit(incidents.id)} /></div>
                                <div><FaTrashAlt size={20} color='#f91414' onClick={() => handleDelete(incidents.id)} /></div>
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