import { useState, useEffect } from 'react'
import Select from "../components/form/Select"
import Input from "../components/form/input"
import styles from "./pagesModules/home.module.css"


export default function Home(){


    const [sigla, setSigla] = useState([]);
    const [turma, setTurma] = useState({});

    useEffect(() => {

        fetch('http://localhost:5000/sigla',
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
    
        function handlerChangerTurma(event){
            setTurma({...turma, [event.target.name] : event.target.value})
        }

        function handlerChangerSigla(event){
            setTurma({...turma, sigla:{
                id:event.target.name,
                sigla:event.target.options[event.target.selectedIndex].text
            }})
        }

        function createTurma(turma){
        fetch('http://localhost:5000/turma',
        {
            method:'POST',
            headers:{'Content-Type' : 'appliation/json'}
        ,
        body: JSON.stringify(turma)})

        .then(
            (resp)=>resp.json()
        )
        .then(
            (data) => {
                console.log(data)
            })
        .catch(
            (error) => {
                console.log(error)
            })}
        
        function submit(event){
            event.preventDefault()
            createTurma(turma)
        }


    return(
        <div className={styles.home_container}> 
            <h1>Página de cadastro de Turma</h1>

            <form className={styles.form} onSubmit={submit}>
                <Input 
                    type="text"
                    name="nome_turma"
                    id="nome_turma"
                    placeholder="Digite o nome da turma"
                    text="Digite o nome da turma"
                    handlerOnChange={handlerChangerTurma}
                />
    
                <Input 
                    type="text"
                    name="numero_turma"
                    id="numero_turma"
                    placeholder="Digite o numero da turma"
                    text="Digite o numero da turma"
                    handlerOnChange={handlerChangerTurma}
                />

                <Select
                    name="sigla_id"
                    text="Selecione a sua turma"
                    options={sigla}
                    handlerOnChange={handlerChangerSigla}
                />

                <input
                    type='submit'
                    value="Cadastrar Aluno"
                />
            </form>
        </div>
    )
}
