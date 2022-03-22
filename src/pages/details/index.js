import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import './style.css'

import Header from '../../components/header'
import api from '../../services/api'
import Footer from '../../components/footer'

Modal.setAppElement('#root');

export default function Details() {
    // const customStyles = {
    //     content: {
    //         top: '50%',
    //         left: '50%',
    //         right: 'auto',
    //         bottom: 'auto',
    //         marginRight: '-50%',
    //         transform: 'translate(-50%, -50%)',
    //     },
    // };

    const [incidents, setIncidents] = useState([])
    const [imagens, setImagens] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false)
    const [openImage, setOpenImage] = useState('')
    const [position, setPosition] = useState('')

    function openModal(incident) {
        setIsOpen(true);
        setPosition(incident)
        setOpenImage(imagens[incident].url)
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleNextImage() {
        
        let pos = position;

        pos = pos + 1;


        if (imagens.length === pos) {
            pos = 0;
        }

        if (imagens.length > pos) {
            pos = pos++;
        }

        setOpenImage(imagens[pos].url)
        setPosition(pos)

        // for (let i = 0; i < imagens.length; i++) {
        //     if (i < pos) {
        //         setOpenImage(imagens[pos].url)
        //         setPosition(pos)
        //     }

        // }

    }

    function handlePrevImage() {
        
        let pos = position;

        pos = pos - 1;
        

        if (pos < 0) {
            pos = imagens.length - 1;
        }

        setOpenImage(imagens[pos].url)
        setPosition(pos)
    }


    async function handleIncidents() {

        await api.get(`/posts/${localStorage.getItem('post_id')}`)
            .then(response => {
                setIncidents(response.data[0])
                setImagens(response.data)
            })
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

                    <div key={incidents.user_id} className='head-description'>
                        <span>{incidents.atividade} - {incidents.data}</span>
                        <div className='description'>
                            <p>{incidents.descricao}</p>
                            <h3>{incidents.local}</h3>
                            <h3>{incidents.projeto}</h3>
                            <h3>Área: {incidents.area}</h3>
                        </div>
                    </div>


                    <div className='grid'>
                        {imagens.map((incidents, index) => (
                            <div key={incidents.id}>
                                <img src={incidents.url} alt='imagem' onClick={() => openModal(index)} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <Footer />
            <div className='view'>

            </div>
        </div>
    )
}