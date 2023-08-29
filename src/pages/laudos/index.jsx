import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    copyToClipboardEncerramento,
    copyToClipboardFaltaDeComunicacao,
    copyToClipboardHoraTecnica
} from '../../copyFunctions';

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
                <div>
                    <button onClick={() => copyToClipboardBomDia(userName, businessName)}>🌞 Bom dia</button>
                    <button onClick={() => copyToClipboardBoaTarde(userName, businessName)}>🌅 Boa tarde</button>
                    <button onClick={() => copyToClipboardBoaNoite(userName, businessName)}>🌙 Boa noite</button>
                    <button onClick={() => copyToClipboardEncerramento()}>👋 Encerramento</button>
                    <button onClick={() => copyToClipboardFaltaDeComunicacao()}>⏰ Falta de comunicação</button>
                    <button onClick={() => copyToClipboardHoraTecnica()}>💲 Hora técnica</button>
                </div>

                <footer>&copy; Rafael Rizzo ~ Dev <Link href="https://phonevox.com.br" target='_blank'>Phonevox</Link></footer>
            </section>
            <ToastContainer autoClose={4000}
                style={toastContainerStyle}
                toastStyle={toastStyle}
            />
        </div>
    );
}
