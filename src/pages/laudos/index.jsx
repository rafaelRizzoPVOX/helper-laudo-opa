import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/router'; // Importe o useRouter para fazer o redirecionamento
import Link from "next/link";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Laudos.module.css'
import {
    copyToClipboardBoaNoite,
    copyToClipboardBoaTarde,
    copyToClipboardBomDia,
    copyToClipboardComoAjudo,
    copyToClipboardExplqueMelhor,
    copyToClipboardEncerramento,
    copyToClipboardFaltaDeComunicacao,
    copyToClipboardHoraTecnica
} from '../../copyFunctions';

import AddCardBtn from '@/addCard';
import Image from 'next/image';

export default function Laudos() {
    const router = useRouter();

    const [userName, setUserName] = useState('')
    const [businessName, setBusinessName] = useState('')

    // Função para captalizar os states
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function clearCookies() {
        Cookies.remove('name');
        Cookies.remove('business');
    }

    useEffect(() => {
        // Caso o nome ou a empresa esteja vázia mando para o inicio de tudo para preencher
        if (!Cookies.get("name") || !Cookies.get("business")) {
            router.push("/");
        }

        // Pega os valores do cookie
        const nameValue = Cookies.get("name");
        const BusinessValue = Cookies.get("business");

        // Seto os valores no state
        setUserName(nameValue)

        setBusinessName(BusinessValue)

    }, []);

    const toastContainerStyle = {
        width: '320px'
    };

    const toastStyle = {
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '4px',
        padding: '12px',
        fontSize: '14px',
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div>
                    <p>Nome: {capitalize(userName)}</p>
                    <p>Empresa: {capitalize(businessName)}</p>
                </div>

                <Box>
                    <Tooltip title="Voltar" placement="left" onClick={clearCookies}>
                        <Link href={"/"}>
                            <ArrowBackIcon />
                        </Link>
                    </Tooltip>
                </Box>
            </nav>

            <section className={styles.section}>
                <div className={styles.container_btns}>
                    <button onClick={() => copyToClipboardBomDia(userName, businessName)}><Image unoptimized={true} src={"/icons/dia.gif"} width={30} height={30} /> Bom dia</button>
                    <button onClick={() => copyToClipboardBoaTarde(userName, businessName)}><Image unoptimized={true} src={"/icons/tarde.gif"} width={30} height={30} />Boa tarde</button>
                    <button onClick={() => copyToClipboardBoaNoite(userName, businessName)}><Image unoptimized={true} src={"/icons/noite.gif"} width={30} height={30} /> Boa noite</button>
                    <button onClick={() => copyToClipboardComoAjudo()}><Image unoptimized={true} src={"/icons/explique-melhor.gif"} width={30} height={30} /> Pergunta dúvida</button>
                    <button onClick={() => copyToClipboardExplqueMelhor()}><Image unoptimized={true} src={"/icons/pergunta-duvida.gif"} width={30} height={30} /> Explique melhor</button>
                    <button onClick={() => copyToClipboardEncerramento()}><Image unoptimized={true} src={"/icons/tchau.gif"} width={30} height={30} /> Encerramento</button>
                    <button onClick={() => copyToClipboardFaltaDeComunicacao()}><Image unoptimized={true} src={"/icons/relogio.gif"} width={30} height={30} /> Falta de comunicação</button>
                    <button onClick={() => copyToClipboardHoraTecnica()}><Image unoptimized={true} src={"/icons/hora-tecnica.gif"} width={30} height={30} /> Hora técnica</button>
                    {/* <AddCardBtn /> */}
                </div>

                <footer>
                    &copy; Rafael Rizzo ~ Dev <Link href="https://phonevox.com.br" target='_blank'>Phonevox</Link>
                </footer>
            </section>

            <ToastContainer autoClose={4000}
                style={toastContainerStyle}
                toastStyle={toastStyle}
            />

            {/* Modal add card */}
            <div className={styles.modal_container}>
                <CloseIcon />
                <form className={styles.modal_content}>
                    <h1>Novo script</h1>
                    <div className={styles.modal_title}>
                        <label htmlFor="new_title">
                            <p>Título:</p>
                            <input type="text" id="new_title" className={styles.card_input_title} placeholder="Ex: Manutenção" />
                        </label>
                    </div>
                    <div className={styles.modal_text}>
                        <label htmlFor="new_script">
                            <p>Mensagem:</p>
                            <textarea id="new_script" cols="30" rows="10" placeholder="Digite aqui o que gostaria de ser copiado..."></textarea>
                        </label>
                    </div>
                    <button>Salvar</button>
                </form>
            </div>
        </div>
    );
}
