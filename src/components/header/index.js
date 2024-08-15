import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'

import Logo from '../../assets/logo-pev.png'
import Maranata from '../../assets/logo-maranata.png'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(!isOpen);
    }

    function openModal() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='header'>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className='modal-header'
                contentLabel='Editar Usuário'
                closeTimeoutMS={200}
            >
                <div className="header-links">
                    <Link onClick={closeModal} to='/'>Home</Link>
                    <Link onClick={closeModal} to='/about'>Quem Somos</Link>
                    <Link onClick={closeModal} to='/projects'>Projetos</Link>
                    <Link onClick={closeModal} to='/activities'>Atividades</Link>
                    <Link onClick={closeModal} to='/contato'>Contato</Link>
                    <a href='https://drive.google.com/file/d/1K3GOnD66mQoFNmedO3a5prPJCWFfwYdn/view?usp=drive_link' target='_blank' rel="noreferrer">Relatório de Atividades 2023</a>
                    <a href='https://drive.google.com/file/d/1Vymjmn9eb72Ty_mqepoHgA-MbHJY7cBB/view?usp=drive_link' target='_blank' rel="noreferrer">Informativo Trimestral - 1º trimestre 2024</a>
                    <a href='#' target='_blank' rel="noreferrer">Balanço Financeiro - 2023</a>
                </div>

            </Modal>
            <div className='logo'>
                <img src={Logo} alt='Logo Pev' />
                <img src={Maranata} alt='Logo Associação' />
            </div>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/about'>Quem Somos</Link>
                <Link to='/projects'>Projetos</Link>
                <Link to='/activities'>Atividades</Link>
                {/* <Link to='/details'>Títulos e Reconhecimento</Link> */}
                <Link to='/contato'>Contato</Link>
                <a>
                    <div class="dropdown">
                        <button class="dropbtn">Publicações</button>
                        <div class="dropdown-content">
                            <a href="https://drive.google.com/file/d/1K3GOnD66mQoFNmedO3a5prPJCWFfwYdn/view?usp=drive_link" target='_blank' rel='noreferrer'>Relatório de Atividades 2023</a>
                            <a href="https://drive.google.com/file/d/1Vymjmn9eb72Ty_mqepoHgA-MbHJY7cBB/view?usp=drive_link" target='_blank' rel='noreferrer'>Informativo Trimestral 1º trimestre 2024</a>
                            <a href="#" rel="noreferrer">Balanço Financeiro 2023</a>
                        </div>
                    </div>
                </a>

                {/* <a href='https://drive.google.com/file/d/1K3GOnD66mQoFNmedO3a5prPJCWFfwYdn/view?usp=drive_link' target='_blank'>Relatório 2023</a> */}

                {/* <Link to='/contato'>Campanhas</Link> */}
            </div>
            <div className='bars-menu'>
                <button onClick={openModal} >
                    {
                        !isOpen ? <FaBars size={30} color='#FFF' /> : <FaTimes size={30} color='#FFF' />
                    }
                </button>
            </div>
        </div>
    )
}