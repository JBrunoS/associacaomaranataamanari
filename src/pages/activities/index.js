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
        const array1 = []
        const array2 = []

        const idItapebussu = 8394054013998197
        const idAmanari = 5839812516128704
        const itapebussu = 'IGQWRNMEZACcWd1YXl4ZAHk3NTgwNll5SFU5SVR2QnVaVzZAVd0xNTVBzSXNVd2dhZA1B4Q2RfbVlDVndETWkzYWQzUGc3R3lXV3lsSHBsVjJoeDBWUVlqVHNHUEZAwell6SzlYdDRWdU5rRGE2VE1INUlNLTY0TXdUbGcZD'
        const amanari = 'IGQWRNclYxZAV9ZAb3p0YXRGc1JWUkdpV3JCRDJNeUZA5dlBxc2RIaWV1OFg1ckhmN3pOSW94a1FsOGRCLUFJaVVzVlY1WVZAYUXRCOGhJMk0wU3Q2LTZAvdTlNU2JRRzBoNGpTdGhRazV1LXlqVjZAEei1jYkZABcTNrejQZD'

        try {
            await api.get(`https://graph.instagram.com/${idItapebussu}/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${itapebussu}&limit=50`)
                .then(response => {

                    for (let i = 0; i < response.data.data.length; i++) {
                        array1.push(response.data.data[i])
                    }


                })
            await api.get(`https://graph.instagram.com/${idAmanari}/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${amanari}&limit=50`)
                .then(response => {

                    for (let i = 0; i < response.data.data.length; i++) {
                        array2.push(response.data.data[i])
                    }


                })

            const array = array1.concat(array2)
            // array.sort(() => 0.5 - Math.random())

            setIncidents(array)

        } catch (error) {
            alert(error)
        }
    }

    function goToDetails(id, caption, type, username) {
        localStorage.setItem("post_id", id);
        localStorage.setItem("caption_post", caption);
        localStorage.setItem("media_type", type);
        localStorage.setItem("username", username);
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
                            <div className='card' key={incidents.id} onClick={() => goToDetails(incidents.id, incidents.caption, incidents.media_type, incidents.username)} >

                                <div>
                                    {
                                        incidents.media_type === 'VIDEO' ?
                                            <video src={incidents.media_url} ></video> :
                                            <img src={incidents.media_url} alt={incidents.caption} />
                                    }
                                </div>
                                <div>
                                    <p>{incidents.username === "pev_itapebussu" ? "Itapebussu" : "Amanari"} -  {incidents.timestamp ? (incidents.timestamp.slice(8, 10) + '/' + incidents.timestamp.slice(5, 7) + '/' + incidents.timestamp.slice(0, 4)) : (incidents.timestamp)}</p>
                                    <h3>{incidents.caption + '/' + incidents.username}</h3>

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