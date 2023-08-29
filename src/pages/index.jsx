import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import styles from '@/pages/Home.module.css';
import Link from 'next/link';

export default function Home() {
    const [nameUser, setNameUser] = useState('');
    const router = useRouter();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (nameUser) {
            Cookies.set('name', nameUser, { expires: 7 });
            router.push('/empresa'); // Navigates to "/empresa" using the router
        }
    };

    useEffect(() => {
        if (Cookies.get("name") || Cookies.get("business")) {
            router.push("/laudos");
        }
    }, [])

    return (
        <>
            <main className={styles.main}>
                <form onSubmit={handleFormSubmit}>
                    <h1>Vamos começar!</h1>

                    <label htmlFor="inputName">
                        <h2>Digite o seu nome</h2>
                    </label>
                    <input
                        id="inputName"
                        type="text"
                        value={nameUser}
                        autoComplete="off"
                        placeholder="..."
                        onChange={(e) => setNameUser(e.target.value)}
                    />
                    {nameUser && <button type="submit">Avançar</button>}
                </form>

                <footer>&copy; Rafael Rizzo ~ Dev <Link href="https://phonevox.com.br" target='_blank'>Phonevox</Link></footer>
            </main>
        </>
    );
}
