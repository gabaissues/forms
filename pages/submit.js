import styles from '../styles/Submit.module.scss';

import { useRouter } from 'next/router'

export default function ScreenSubmit() {
    const router = useRouter()

    return(
        <div className={styles.container}>

            <div className={styles.background}></div>
            <div className={styles.content}>

                <h1>E-mail enviado com sucesso! Em breve iremos retornar.</h1>

            </div>
        </div>
    )

}