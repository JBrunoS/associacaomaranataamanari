import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'

import kids1 from '../../assets/kidsto.jpg'
import Header from '../../components/header'
import api from '../../services/api'
import Footer from '../../components/footer'

export default function About() {
    const [incidents, setIncidents] = useState([])
    const [imagens, setImagens] = useState([])

    const navigate = useNavigate()

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
            alert(error)
        }
    }

    function goToDetails(id) {
        localStorage.setItem("post_id", id);
        navigate('/details')
    }

    useEffect(() => {
        handleIncidents();
    }, [])

    return (
        <div className="container">
            <Header />
            <div className="body">
                <div className="content">
                    <span>Últimas Atividades</span>

                    <div className='cards'>
                        {incidents.map((incidents, index) => (
                            <div className='card' key={incidents.id} onClick={() => goToDetails(incidents.id)} >

                                <div>
                                    <img src={kids1} alt='imagem' />

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