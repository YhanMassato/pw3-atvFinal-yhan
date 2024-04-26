import { useState, useEffect } from "react"
import { useLocation }         from "react-router-dom"
import Message                 from "../components/message/Message"
import CardTurma               from "../components/cardTurma/CardTurma"

import styles                  from "./pagesModules/turmas.module.css"

export default function Turmas(){

    const [turmas, setTurmas] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/turma',
        {
            method:'GET',
            headers:{'Content-Type' : 'application/json'}
        })
        .then(
            (resp)=>resp.json()
            )
        .then(
            (data) => {
                setTurmas(data)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )}, [])

    const location = useLocation();
    let message  = ''

    if (location.state){
        message = location.state
    }

    return(
        <div className={styles.container}>
            <h1>Turmas cadastradas:</h1>
            {
                message && <Message 
                    msg={message}
                    type="sucess"
                    />
            }
            {
                turmas.map((turma) => (
                    <div key={turma.id}>
                        <CardTurma
                            id       = {turma.id}
                            id_turma = {turma.numero_turma}
                            nome     = {turma.nome_turma}
                            sigla    = {turma.sigla.sigla}
                        />
                    </div>
                ))
            }
        </div>
    )
}