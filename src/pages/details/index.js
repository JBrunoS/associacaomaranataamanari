import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import './style.css'

import Header from '../../components/header'
import api from '../../services/api'
import Footer from '../../components/footer'

Modal.setAppElement('#root');

export default function Details() {

    const [incidents, setIncidents] = useState([])
    const [imagens, setImagens] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false)
    const [openImage, setOpenImage] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate();
    const post_id = localStorage.getItem('post_id')
    const caption_post = localStorage.getItem('caption_post')
    const media_type = localStorage.getItem('media_type')
    const username = localStorage.getItem('username')

    const itapebussu = 'IGQWRNMEZACcWd1YXl4ZAHk3NTgwNll5SFU5SVR2QnVaVzZAVd0xNTVBzSXNVd2dhZA1B4Q2RfbVlDVndETWkzYWQzUGc3R3lXV3lsSHBsVjJoeDBWUVlqVHNHUEZAwell6SzlYdDRWdU5rRGE2VE1INUlNLTY0TXdUbGcZD'
        const amanari = 'IGQWRNclYxZAV9ZAb3p0YXRGc1JWUkdpV3JCRDJNeUZA5dlBxc2RIaWV1OFg1ckhmN3pOSW94a1FsOGRCLUFJaVVzVlY1WVZAYUXRCOGhJMk0wU3Q2LTZAvdTlNU2JRRzBoNGpTdGhRazV1LXlqVjZAEei1jYkZABcTNrejQZD'

    function openModal(incident) {
        setIsOpen(true);
        setPosition(incident)

        if (media_type === 'IMAGE') {
            setOpenImage(imagens.media_url)
            return
        } 
            setOpenImage(imagens[incident].media_url)
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleNextImage() {

        // if (position === 0) {
        //     return
        // } else {

            let pos = position;

            pos = pos + 1;


            if (imagens.length === pos) {
                pos = 0;
            }

            if (imagens.length > pos) {
                pos = pos++;
            }

            setOpenImage(imagens[pos].media_url)
            setPosition(pos)
    }

    function handlePrevImage() {

            let pos = position;

            pos = pos - 1;

            if (pos < 0) {
                pos = imagens.length - 1;
            }

            setOpenImage(imagens[pos].media_url)
            setPosition(pos)
    }


    async function handleIncidents() {


        if (post_id === null) {

            navigate('/activities')
            return

        }
        else {

            if (username === 'pev_itapebussu') {
                if (media_type === 'CAROUSEL_ALBUM') {
                    await api.get(`https://graph.instagram.com/${post_id}/children?fields=id,media_type,media_url,username,timestamp&access_token=${itapebussu}`)
                        .then(response => {
                            // console.log(response.data.data)
                            setIncidents(response.data.data[0])
                            setImagens(response.data.data)
                        })
                } else {
                    await api.get(`https://graph.instagram.com/${post_id}/?fields=id,media_type,media_url,username,timestamp&access_token=${itapebussu}`)
                        .then(response => {
                            // console.log(response.data)
                            setIncidents(response.data)
                            setImagens(response.data)
                        })
                }
            } else {
                if (media_type === 'CAROUSEL_ALBUM') {
                    await api.get(`https://graph.instagram.com/${post_id}/children?fields=id,media_type,media_url,username,timestamp&access_token=${amanari}`)
                        .then(response => {
                            // console.log(response.data.data)
                            setIncidents(response.data.data[0])
                            setImagens(response.data.data)
                        })
                } else {
                    await api.get(`https://graph.instagram.com/${post_id}/?fields=id,media_type,media_url,username,timestamp&access_token=${amanari}`)
                        .then(response => {
                            // console.log(response.data)
                            setIncidents(response.data)
                            setImagens(response.data)
                        })
                }
            }
        }
    }

    useEffect(() => {
        handleIncidents();
    }, [])

    return (
        <div className="container">
            <Header />
            <Modal
                className='modal'
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={openImage} alt={openImage} />
                <button onClick={closeModal}><FaTimes size={40} color='#c4c4c4' /></button>
                <button className='left' onClick={handlePrevImage}><FaArrowLeft size={40} color='#c4c4c4' /></button>
                <button className='right' onClick={handleNextImage}><FaArrowRight size={40} color='#c4c4c4' /></button>
            </Modal>

            <div className="body">
                <div className="content">

                    <div key={post_id} className='head-description'>
                        <span>{caption_post} - {incidents.timestamp ? (incidents.timestamp.slice(8, 10) + '/' + incidents.timestamp.slice(5, 7) + '/' + incidents.timestamp.slice(0, 4)) : (incidents.timestamp)}</span>
                        <div className='description'>

                            <h2>Local: {incidents.username === "pev_itapebussu" ? "Itapebussu" : "Amanari"}</h2>
                            <h2>Projeto Ensinando a Viver: {incidents.username === "pev_itapebussu" ? "Itapebussu" : "Amanari"}</h2>
                        </div>
                    </div>

                    <div className={media_type === 'IMAGE' || media_type === 'VIDEO' ? 'flex' : 'grid'}>

                        {media_type === 'CAROUSEL_ALBUM' ?
                            imagens.map((incidents, index) => (
                                <div key={incidents.id}>
                                    {incidents.media_type === 'IMAGE' ?
                                        <img src={incidents.media_url} alt='imagem' onClick={() => openModal(index)} /> :
                                        <video src={incidents.media_url} controls></video>
                                    }
                                </div>
                            )) : <div key={imagens.id}>
                                {imagens.media_type === 'IMAGE' ?
                                    <img src={imagens.media_url} alt='imagem' onClick={() => openModal(0)} /> :
                                    <video src={imagens.media_url} onClick={() => openModal(0)} controls></video>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>

            <Footer />
            <div className='view'>

            </div>
        </div>
    )
}