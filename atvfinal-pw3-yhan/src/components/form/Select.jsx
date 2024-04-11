import styles from './select.module.css'

export default function Select({ text, name, options, handlerOnChange, value}){
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={name} >
            <option>SELECIONE UMA TURMA</option>
            {
                options.map((option)=>(
                    <option value={option.cod_turma} key={option.cod_turma}>
                        {option.sigla}
                    </option>
                ))
            }

            </select>
        </div>

    )
}