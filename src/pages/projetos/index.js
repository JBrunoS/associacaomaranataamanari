import React, { useEffect, useState } from "react";
import Modal from 'react-modal'
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'


import './style.css'
import Header from '../../components/header';
import Footer from "../../components/footer";
import api from "../../services/api";

Modal.setAppElement('#root');

export default function Projetos() {
    const [itapImages, setItapImages] = useState([])
    const [amanImages, setAmanImages] = useState([])
    const [modalIsOpenItap, setIsOpenItap] = useState(false)
    const [modalIsOpenAman, setIsOpenAman] = useState(false)
    const [openImageItap, setOpenImageItap] = useState('')
    const [openImageAman, setOpenImageAman] = useState('')
    const [positionItap, setPositionItap] = useState('')
    const [positionAman, setPositionAman] = useState('')

    async function handleIncidents() {
        await api.get('/imagens/547')
            .then(response => {
                setItapImages(response.data)
            })

        await api.get('/imagens/637')
            .then(response => {
                setAmanImages(response.data)
            })
    }

    useEffect(() => {
        handleIncidents();
    }, [])

    function openModal547(incident) {
        setIsOpenItap(true);
        setPositionItap(incident)
        setOpenImageItap(itapImages[incident].url)
    }
    function openModal637(incident) {
        setIsOpenAman(true);
        setPositionAman(incident)
        setOpenImageAman(amanImages[incident].url)
    }

    function closeModal() {
        setIsOpenItap(false);
        setIsOpenAman(false);
    }

    function handleNextImage547() {
        let pos = positionItap;
        pos = pos + 1;

        if (itapImages.length === pos) {
            pos = 0;
        }

        if (itapImages.length > pos) {
            pos = pos++;
        }

        setOpenImageItap(itapImages[pos].url)
        setPositionItap(pos)

    }

    function handlePrevImage547() {
        
        let pos = positionItap;
        pos = pos - 1;

        if (pos < 0) {
            pos = itapImages.length - 1;
        }

        setOpenImageItap(itapImages[pos].url)
        setPositionItap(pos)
    }

    function handleNextImage637() {
        
        let pos = positionAman;
        pos = pos + 1;

        if (amanImages.length === pos) {
            pos = 0;
        }

        if (amanImages.length > pos) {
            pos = pos++;
        }

        setOpenImageAman(amanImages[pos].url)
        setPositionAman(pos)

    }

    function handlePrevImage637() {
        
        let pos = positionAman;
        pos = pos - 1;

        if (pos < 0) {
            pos = amanImages.length - 1;
        }

        setOpenImageAman(amanImages[pos].url)
        setPositionAman(pos)
    }

    return (
        <div className="container">
            <Header />
            <Modal
                className='modal-projects'
                isOpen={modalIsOpenItap}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >

                <img src={openImageItap} alt={openImageItap} />


                <button onClick={closeModal}><FaTimes size={40} color='#c4c4c4' /></button>
                <button className='left' onClick={handlePrevImage547}><FaArrowLeft size={40} color='#c4c4c4' /></button>
                <button className='right' onClick={handleNextImage547}><FaArrowRight size={40} color='#c4c4c4' /></button>
            </Modal>
            <Modal
                className='modal-projects'
                isOpen={modalIsOpenAman}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >

                <img src={openImageAman} alt={openImageAman} />


                <button onClick={closeModal}><FaTimes size={40} color='#c4c4c4' /></button>
                <button className='left' onClick={handlePrevImage637}><FaArrowLeft size={40} color='#c4c4c4' /></button>
                <button className='right' onClick={handleNextImage637}><FaArrowRight size={40} color='#c4c4c4' /></button>
            </Modal>
            <div className="body">
                <div className="content">
                    <span>Projetos</span>
                    <div className="project">
                        <div>
                            <h1>Projeto Ensinando a Viver - Itapebussu</h1>
                            <p>Endereço: Rua ADSDADSDD, 900 - Telefone 98464646644 </p>
                            <p>Crianças atendidas: 900</p>
                            <p>Faixa etária: 3 - 18 anos</p>
                            <h2>Atividades Realizadas</h2>
                            <ul>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                            </ul>

                            <h2>Dias de Atendimento</h2>
                            <p>Terça-feira a Sábado - manhã e tarde</p>

                            <h2>Histórico breve</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                        </div>
                        <div className="imagens-projeto">
                            {
                                itapImages.map((incidents, index) => (
                                    <img key={incidents.id} src={incidents.url} alt={incidents.url} onClick={() => openModal547(index)} />
                                ))
                            }
                        </div>

                    </div>

                    <div className="project">
                        <div>
                            <h1>Projeto Ensinando a Viver - Itapebussu</h1>
                            <p>Endereço: Rua ADSDADSDD, 900 - Telefone 98464646644 </p>
                            <p>Crianças atendidas: 900</p>
                            <p>Faixa etária: 3 - 18 anos</p>
                            <h2>Atividades Realizadas</h2>
                            <ul>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                                <li>Atividade 1: uma breve descriçãoda atividade realizada  no pev</li>
                            </ul>

                            <h2>Dias de Atendimento</h2>
                            <p>Terça-feira a Sábado - manhã e tarde</p>

                            <h2>Histórico breve</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis finibus dui, ac congue mauris tempor eget. Vivamus rhoncus erat eu vestibulum maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent non commodo est. Nulla facilisi. Etiam ornare tortor sit amet est ultrices, sed elementum arcu accumsan. Vestibulum vel felis eu nisi semper laoreet sed non urna. Integer nec pharetra dui, quis mollis enim. Mauris id molestie neque. Sed vitae enim felis. Nam ut bibendum risus. Praesent dignissim interdum tortor eu pellentesque. Proin vel dui vel quam vulputate porta sed ac erat. Nam diam libero, sollicitudin at imperdiet sed, blandit non sem. Donec volutpat, est et ornare consequat, orci elit sollicitudin quam, vel iaculis nibh arcu id massa. Nullam et nibh vitae erat auctor dignissim non at enim.</p>
                        </div>
                        <div className="imagens-projeto">
                            {
                                amanImages.map((incidents, index) => (
                                    <img key={incidents.id} src={incidents.url} alt={incidents.url} onClick={() => openModal637(index)} />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}