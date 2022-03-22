import React from 'react'
import { Link } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'

import Logo from '../../assets/logo-pev.png'    

export default function Header(){
    return(
        <div className='header'>
                <div>
                    <img src={Logo} alt='Logo Pev' />
                    <Link to='/'>Associação Maranata</Link>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>Quem Somos</Link>
                    <Link to='/projects'>Projetos</Link>
                    <Link to='/activities'>Atividades</Link>
                    {/* <Link to='/details'>Títulos e Reconhecimento</Link> */}
                    <Link to='/contato'>Contato</Link>
                    <Link to='/admin' target='_blank'><FaLock size={15} color='#FFFFFF' /></Link>
                    {/* <Link to='/contato'>Campanhas</Link> */}
                </div>
            </div>
    )
}