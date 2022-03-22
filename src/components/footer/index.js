import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa'

import './style.css'

export default function Footer() {
    return (
        <div className="container-footer">
            <div className='social-media'>
                <a
                    href='https://www.instagram.com/projeto_pev/'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaInstagram size={60} color='#000' />
                </a>
                <a
                    href='www.instagram.com'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaFacebook size={60} color='#1877f2' />
                </a>
                <a
                    href='https://www.youtube.com/channel/UCmHphXPxiwLZjYW7me1Og-w'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaYoutube size={60} color='#ff0000' />
                </a>
                <a
                    href='https://api.whatsapp.com/send?phone=5585987306182&text=Olá'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaWhatsapp size={60} color='#000' />
                </a>
            </div>
            <div className='social-media-mobile'>
                <a
                    href='https://www.instagram.com/projeto_pev/'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaInstagram size={30} color='#000' />
                </a>
                <a
                    href='www.instagram.com'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaFacebook size={30} color='#1877f2' />
                </a>
                <a
                    href='https://www.youtube.com/channel/UCmHphXPxiwLZjYW7me1Og-w'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaYoutube size={30} color='#ff0000' />
                </a>
                <a
                    href='https://api.whatsapp.com/send?phone=5585987306182&text=Olá'
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaWhatsapp size={30} color='#000' />
                </a>
            </div>
            <footer>
                <div>
                    <p>Associação Maranata de Desenvolvimento Social</p>
                    <p>associacao@gmail.com</p>
                    <p>(085) 98877-6655 / (085) 98877-6655</p>
                    <p>&copy; 2022 Maranata</p>
                </div>
            </footer>
        </div>
    )
}