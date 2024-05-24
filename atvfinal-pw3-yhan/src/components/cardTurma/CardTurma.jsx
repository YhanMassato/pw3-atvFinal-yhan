import styles from './CardTurma.modules.css'
import { Link } from "react-router-dom";

export default function CardTurma({id, id_turma, nome, sigla, handlerRemove}){
    const remove = (event) =>{
        event.preventDefault();
        handlerRemove(id)
    }

    return(
        <div id={id} className="card">
            <h2 className="cardName">{nome}</h2>

            <p><span>Sigla:</span>{sigla}</p>

            <p><span>Essa é a turma nº - </span>{id_turma}</p>

            <div class="actions">
                <Link to={`/editturma/${id}`}>
                    Editar
                </Link>

                <button onClick={remove}>Excluir</button>
            </div>

        </div>
    )
}