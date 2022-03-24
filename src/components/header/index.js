import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLock, FaBars, FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'

import Logo from '../../assets/logo-pev.png'

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
                    {/* <Link to='/details'>Títulos e Reconhecimento</Link> */}
                    <Link onClick={closeModal} to='/contato'>Contato</Link>
                    <Link onClick={closeModal} to='/admin' target='_blank'><FaLock size={15} color='#FFFFFF' /></Link>
                    {/* <Link to='/contato'>Campanhas</Link> */}
                </div>

            </Modal>
            <div>
                <img src={Logo} alt='Logo Pev' />
                <Link to='/'>Associação Maranata</Link>
            </div>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/about'>Quem Somos</Link>
                <Link to='/projects'>Projetos</Link>
                <Link to='/activities'>Atividades</Link>
                {/* <Link to='/details'>Títulos e Reconhecimento</Link> */}
                <Link to='/contato'>Contato</Link>
                <Link to='/admin' target='_blank'><FaLock size={15} color='#FFFFFF' /></Link>
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