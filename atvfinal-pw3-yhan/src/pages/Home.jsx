import { useState, useEffect } from 'react'
import Select from "../components/form/Select"
import Input from "../components/form/input"
import  "./pagesModules/home.module.css"


export default function Home(){


    const [sigla, setSigla] = useState([]);


    useEffect(() => {

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
                setSigla(data)
                console.log(data)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )}, [])
    
    return(
        <section className='home-container' >
            <h1>Página de cadastro de Turma</h1>

            <Input 
                    type="text"
                    id="nome_turma"
                    placeholder="digite o nome da turma"
                    text="digite o nome da turma"
                />

            <Select
                name="sigla_id"
                text="Selecione a sua turma"
                options={sigla}
                />

        </section>
    )
}