import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import styles from './Empresa.module.css';
import Link from 'next/link';

export default function Empresa() {
    const router = useRouter();
    const [nameBusiness, setNameBusiness] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (nameBusiness) {
            Cookies.set('business', nameBusiness, { expires: 365 });
            router.push('/laudos');
        }
    };

    useEffect(() => {
        document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());

        document.querySelector('#inputBusiness').focus();

        const nameUser = Cookies.get('name');

        if (!nameUser) {
            router.push('/');
        }
    }, []);

    return (
        <>
            <main className={styles.main}>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="inputBusiness">
                        <h2>Digite o nome da sua empresa</h2>
                        <input
                            id="inputBusiness"
                            type="text"
                            value={nameBusiness}
                            autoComplete="off"
                            placeholder="..."
                            onChange={(e) => setNameBusiness(e.target.value)}
                        />
                    </label>
                    {nameBusiness && <button type="submit">Avançar</button>}
                </form>

                <footer>&copy; Rafael Rizzo ~ Dev <Link href="https://phonevox.com.br" target='_blank'>Phonevox</Link></footer>
            </main>
        </>
    );
}
