import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/router'; // Importe o useRouter para fazer o redirecionamento
import Link from "next/link";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Laudos.module.css'

export default function Laudos() {
    const router = useRouter();

    const [userName, setUserName] = useState('')
    const [businessName, setBusinessName] = useState('')

    // Função para captalizar os states
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Funções dos botões

    // Bom dia
    const copyToClipboardBomDia = (name, business) => {
        if (typeof window !== 'undefined' && 'navigator' in window) {
            navigator.clipboard.writeText(`Bom dia! aqui é o ${capitalize(userName)} do suporte da ${capitalize(businessName)}, tudo bom?`)
                .then(() => {
                    toast.success('Laudo copiado com sucesso!');
                })
                .catch((error) => {
                    toast.error('Erro ao copiar', error);
                });
        }
    };

    // Boa tarde
    const copyToClipboardBoaTarde = (name, business) => {
        if (typeof window !== 'undefined' && 'navigator' in window) {
            navigator.clipboard.writeText(`Boa tarde! aqui é o ${capitalize(userName)} do suporte da ${capitalize(businessName)}, tudo bom?`)
                .then(() => {
                    toast.success('Laudo copiado com sucesso!');
                })
                .catch((error) => {
                    toast.error('Erro ao copiar', error);
                });
        }
    };

    // Boa tarde
    const copyToClipboardBoaNoite = (name, business) => {
        if (typeof window !== 'undefined' && 'navigator' in window) {
            navigator.clipboard.writeText(`Boa noite! aqui é o ${capitalize(userName)} do suporte da ${capitalize(businessName)}, tudo bom?`)
                .then(() => {
                    toast.success('Laudo copiado com sucesso!');
                })
                .catch((error) => {
                    toast.error('Erro ao copiar', error);
                });
        }
    };

    // Encerramento
    const copyToClipboardEncerramento = (name, business) => {
        if (typeof window !== 'undefined' && 'navigator' in window) {
            navigator.clipboard.writeText(`Vou estar encerrando o chat aqui então, qualquer coisa estamos a disposição, tenha um ótimo dia! 😊`)
                .then(() => {
                    toast.success('Laudo copiado com sucesso!');
                })
                .catch((error) => {
                    toast.error('Erro ao copiar', error);
                });
        }
    };

    // Hora técnica
    const copyToClipboardHoraTecnica = (name, business) => {
        if (typeof window !== 'undefined' && 'navigator' in window) {
            toast.error('Esse botão ainda não foi configurado');
            // navigator.clipboard.writeText(`Vou estar encerrando o chat aqui então, qualquer coisa estamos a disposição, tenha um ótimo dia! 😊`)
            //     .then(() => {
            //         toast.success('Laudo copiado com sucesso!');
            //     })
            //     .catch((error) => {
            //         toast.error('Erro ao copiar', error);
            //     });
        }
    };

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

    const svgStyle = {
        fill: 'green', // Altere a cor desejada
        marginRight: '8px' // Apenas para espaçamento
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div>
                    <p>Nome: {capitalize(userName)}</p>
                    <p>Empresa: {capitalize(businessName)}</p>
                </div>

                <div>
                    Voltar
                </div>
            </nav>

            <section className={styles.section}>
                <div>
                    <button onClick={copyToClipboardBomDia}>🌞 Bom dia</button>
                    <button onClick={copyToClipboardBoaTarde}>🌅 Boa tarde</button>
                    <button onClick={copyToClipboardBoaNoite}>🌙 Boa noite</button>
                    <button onClick={copyToClipboardEncerramento}>👋 Encerramento</button>
                    <button onClick={copyToClipboardHoraTecnica}>💲 Hora técnica ...</button>
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
