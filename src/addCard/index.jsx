import AddCircleIcon from '@mui/icons-material/AddCircle';

import styles from './AddCard.module.css'

export default function AddCardBtn() {

    return (
        <>
            <button className={styles.add_card}><AddCircleIcon /> Novo script</button>
        </>
    )
}