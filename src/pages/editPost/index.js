import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import './style.css'

import api from "../../services/api";

export default function EditPost() {
    
    const [atividade, setAtividade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [area, setArea] = useState('')
    const [data, setData] = useState('')
    const [projeto, setProjeto] = useState('')
    const [local, setLocal] = useState('')
    
    const [incidents, setIncidents] = useState([])
    
    const navigate = useNavigate();

    useEffect(() => {
        handleIncidents();
    }, [])

    async function handleIncidents(){
        try {
            await api.get(`/posts/${localStorage.getItem('user_id')}`)
            .then(response => {
                console.log(response.data[0])
                setAtividade(response.data[0].atividade)
                setDescricao(response.data[0].descricao)
                setArea(response.data[0].area)
                setData(response.data[0].data)
                setProjeto(response.data[0].projeto)
                setLocal(response.data[0].local)

                setIncidents(response.data)
            })
        } catch (error) {
            alert(error)
        }
    }

    async function handleEdit(e) {
        e.preventDefault();

        

        const values = {
            atividade,
            descricao,
            area,
            data,
            projeto,
            local
        }


        try {

            await api.put(`/edit/post/${localStorage.getItem('user_id')}`, values)
            alert("Alterado com sucesso!")
            
            setAtividade('')
            setDescricao('')
            setData('')
            setArea('')
            setProjeto('')
            setLocal('')

            navigate('/admin');

            
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <div className='container-register'>
            
            <form onSubmit={handleEdit}>
                <div>
                    <label>Nome da Atividade</label>
                    <input
                        required
                        placeholder='Nome da Atividade'
                        value={atividade}
                        onChange={e => setAtividade(e.target.value)}
                    />
                </div>
                <div>
                    <label>Descrição da Atividade</label>
                    <textarea
                        required
                        placeholder='Descrição da Atividade'
                        maxLength={255}
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                </div>
                <div>
                    <label>Área desenvolvida</label>
                    <select
                        required
                        type='text'
                        placeholder='Área desenvolvida'
                        value={area}
                        onChange={e => setArea(e.target.value)}
                    >
                        <option value=''></option>
                        <option value='Sáude e Bem estar'>Saúde e Bem estar</option>
                        <option value='Cognitiva'>Cognitiva</option>
                        <option value='Socioemocional'>Socioemocional</option>
                        <option value='Cidadania'>Cidadania</option>
                    </select>
                </div>
                <div>
                    <label>Data da Atividade</label>
                    <input
                        required
                        type='date'
                        value={data}
                        onChange={e => setData(e.target.value)}
                    />
                </div>
                <div>
                    <label>Projeto + BR</label>
                    <select
                        required
                        placeholder='projeto + BR'
                        value={projeto}
                        onChange={e => setProjeto(e.target.value)}
                    >
                        <option value=''></option>
                        <option value='547'>PEV - Itapebussu</option>
                        <option value='637'>PEV - Amanari</option>
                    </select>
                </div>
                <div>
                    <label>Local da Atividade</label>
                    <input
                        required
                        placeholder='Local da Atividade'
                        value={local}
                        onChange={e => setLocal(e.target.value)}
                    />
                </div>
                

                <button>Editar postagem</button>
            </form>

            <div className='photos'>
                {
                    incidents.map((incidents => (
                        <div className='card-photos' key={incidents}>
                            <img src={incidents.url} alt='imagem' />
                            

                        </div>
                    )))
                }

            </div>
        </div>
    )
}