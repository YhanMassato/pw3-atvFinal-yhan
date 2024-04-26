import styles from './CardTurma.modules.css'

export default function CardTurma({id, id_turma, nome, sigla}){
    return(
        <div className={styles.card} id={id}>
            <h2 className={styles.cardName}>{nome}</h2>

            <p>Sigla:{sigla}</p>

            <p>Essa é a turma nº - {id_turma}</p>
        </div>
    )
}