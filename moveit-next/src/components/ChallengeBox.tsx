import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    return(
        <div className="styles.challengeBoxContainer">
            <div className={styles.challengeNotActive}>
                <strong>Inicia um ciclo para receber desafios a serem completados</strong>
            </div>
        </div>
    )
}