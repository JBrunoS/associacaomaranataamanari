import React from "react";
import { FaPowerOff, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

import './style.css'

import kids from '../../assets/kids.jpg'
import kids1 from '../../assets/kidsto.jpg'

export default function Admin() {
    const navigate = useNavigate()

    function handleRegister(){
        navigate('/register')
    }

    function handleLogout(){
        navigate('/login')
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
                    <div className='card-admin'>
                        <div className='card-img'>
                            <img src={kids} alt='crianças' />
                        </div>
                        <div className='card-title'>
                            <p>Título da Atividade</p>
                            <p>Nome do projeto</p>
                            <p>22-02-2220</p>
                        </div>
                        <div className='card-buttons'>
                            <div><FaEdit size={20} color='#f97e14' /></div>
                            <div><FaTrashAlt size={20} color='#f91414' /></div>
                        </div>
                    </div>
                    <div className='card-admin'>
                        <div className='card-img'>
                            <img src={kids} alt='crianças' />
                        </div>
                        <div className='card-title'>
                            <p>Título da Atividade</p>
                            <p>Nome do projeto</p>
                            <p>22-02-2220</p>
                        </div>
                        <div className='card-buttons'>
                            <div><FaEdit size={20} color='#f97e14' /></div>
                            <div><FaTrashAlt size={20} color='#f91414' /></div>
                        </div>
                    </div>
                    <div className='card-admin'>
                        <div className='card-img'>
                            <img src={kids} alt='crianças' />
                        </div>
                        <div className='card-title'>
                            <p>Título da Atividade</p>
                            <p>Nome do projeto</p>
                            <p>22-02-2220</p>
                        </div>
                        <div className='card-buttons'>
                            <div><FaEdit size={20} color='#f97e14' /></div>
                            <div><FaTrashAlt size={20} color='#f91414' /></div>
                        </div>
                    </div>
                    <div className='card-admin'>
                        <div className='card-img'>
                            <img src={kids} alt='crianças' />
                        </div>
                        <div className='card-title'>
                            <p>Título da Atividade</p>
                            <p>Nome do projeto</p>
                            <p>22-02-2220</p>
                        </div>
                        <div className='card-buttons'>
                            <div><FaEdit size={20} color='#f97e14' /></div>
                            <div><FaTrashAlt size={20} color='#f91414' /></div>
                        </div>
                    </div>
                    <div className='card-admin'>
                        <div className='card-img'>
                            <img src={kids1} alt='crianças' />
                        </div>
                        <div className='card-title'>
                            <p>Título da Atividade</p>
                            <p>Nome do projeto</p>
                            <p>22-02-2220</p>
                        </div>
                        <div className='card-buttons'>
                            <div><FaEdit size={20} color='#f97e14' /></div>
                            <div><FaTrashAlt size={20} color='#f91414' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}