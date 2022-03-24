import React, { useState, useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

import './style.css'

import api from "../../services/api";

export default function Register() {

    const [atividade, setAtividade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [area, setArea] = useState('')
    const [data, setData] = useState('')
    const [projeto, setProjeto] = useState('')
    const [local, setLocal] = useState('')
    const [imagens, setImagens] = useState([])
    const [files, setFiles] = useState([])
    const previewImg = []
    const previewFile = []

    const navigate = useNavigate();

    useEffect(() => {
        loadPreview();
    }, [imagens])

    function loadPreview() {
        if (imagens.length > 0) {
            for (let i = 0; i < imagens.length; i++) {
                previewImg.push(imagens[i])
            }
        }
        setFiles(previewImg)
    }

    async function handleRegister(e) {
        e.preventDefault();

        const dataImage = new FormData();
        let id = '';

        const values = {
            atividade,
            descricao,
            area,
            data,
            projeto,
            local
        }

        // console.log(values)

        try {

            for (let index = 0; index < files.length; index++) {
                if (files[index].size > (2 * 1024 * 1024)) {
                    alert('A Foto nº ' + (index + 1) + ' é maior que 2 megas')
                    return
                }
            }

            if (files.length > 0 && files.length <= 15) {
                await api.post('/post', values)
                    .then(response => {
                        for (let i = 0; i < files.length; i++) {
                            dataImage.append('file', files[i])
                            api.post(`/post/${response.data[0].id}`, dataImage)
                            dataImage.delete('file', files[i])
                        }
                        id = response.data[0].id;

                        alert('Postagem Adicionada com sucesso!')
                    })
            } else {
                if (files.length <= 0) {
                    alert("Selecionar alguma foto!")
                    return
                }

                if (files.length > 15) {
                    alert("O máximo de fotos permitido é 15!")
                    return
                }
            }

            setAtividade('')
            setDescricao('')
            setData('')
            setArea('')
            setProjeto('')
            setLocal('')
            setImagens([])

            try {
                await api.post(`publicacao/${id}`)
            } catch (error) {
                alert(error)
            }

            navigate('/admin');

        } catch (error) {
            alert(error)
        }


    }

    function deleteImagem(name) {

        for (let i = 0; i < files.length; i++) {
            previewFile.push(files[i])
            if (files[i].name === name) {
                previewFile.pop(files[i])
            }

            previewImg.push(previewFile)
        }

        setFiles(previewFile)
    }
    return (
        <div className='container-register'>
            <form onSubmit={handleRegister}>
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
                    <label>Projeto</label>

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
                <div>
                    <label>Imagens</label>
                    <input
                        required
                        type='file'
                        multiple
                        accept='image/*'
                        onChange={e => setImagens(e.target.files)}
                    />
                </div>

                <button>Salvar postagem</button>
            </form>

            <div className='photos'>
                {
                    files.map((incidents => (
                        <div className='card-photos' key={incidents.name}>
                            <img src={URL.createObjectURL(incidents)} alt='imagem' />
                            <div onClick={() => deleteImagem(incidents.name)}>
                                <FaTrashAlt size={15} color='#db2020' />
                            </div>

                        </div>
                    )))
                }

            </div>
        </div>
    )
}