import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

import Header from '../../components/header'
import api from '../../services/api'
import Footer from '../../components/footer'

export default function About() {
    const [incidents, setIncidents] = useState([])

    const navigate = useNavigate()

    async function handleIncidents() {
        try {
            await api.get('/publicacoes')
                .then(response => {
                    setIncidents(response.data)
                    
                })
        } catch (error) {
            alert(error)
        }
    }

    function goToDetails(id) {
        localStorage.setItem("post_id", parseInt(id));
        navigate('/details')
    }

    useEffect(() => {
        handleIncidents();
    }, [])

    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content-activities">
                    <span>Últimas Atividades</span>

                    <div className='cards'>
                        {incidents.map((incidents, index) => (
                            <div className='card' key={incidents.user_id} onClick={() => goToDetails(incidents.user_id)} >

                                <div>
                                    <img src={incidents.url} alt={incidents.nome} />

                                </div>
                                <div>
                                    <p>{incidents.atividade + '-' + incidents.local}</p>
                                    <p>{incidents.data}</p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
    )
}