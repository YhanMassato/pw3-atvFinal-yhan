import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Input from "../components/form/input"
import Select from "../components/form/Select"

import styles from "./pagesModules/editTurma.module.css"

export default function EditTurma(params){
    
    const [turma, setTurma] = useState({})
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        fetch(`http://localhost:5000/turma/${id}`,{
            method : 'GET',
            headers: {
                'content-type':'application/json'
        },
        })
        .then((resp) => resp.json())
        .then((data) => {setTurma(data); console.log(data)})
        .catch((err) => {console.log(err)})
},[]);

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
                setCategories(data)
                console.log(data)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )}, [])

    const {id} = useParams()
    console.log(id)

    function handlerChangerTurma(event){
        setTurma({...turma, [event.target.name] : event.target.value})
    }

    function handlerChangerSigla(event){
        setTurma({...turma, sigla:{
            id:event.target.name,
            sigla:event.target.options[event.target.selectedIndex].text
        }})
    }


    function editarTurma(turma){
        fetch(`http://localhost:5000/turma/${turma.id}`,
        {
            method:'PATCH',
            headers:{'Content-Type' : 'appliation/json'}
        ,
        body: JSON.stringify(turma)
    })
        .then(
            (resp)=>resp.json()
        )
        .then(
            (data) => {
                console.log(data)
                navigate('/turmas',{state:"Livro editado com sucesso "})
            })

        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    function handlerSubmit(e){
        e.preventDefault();
        editarTurma(turma)
        
    }

    return(
        <div className={styles.edit_container}>
            <h1>Edição de livro</h1>

            <form onSubmit={handlerSubmit}>
                <Input 
                    type="text"
                    name="nome_turma"
                    id="nome_turma"
                    placeholder="Digite o nome da turma"
                    text="Digite o nome da turma"
                    value={turma.nome_turma}
                    handlerOnChange={handlerChangerTurma}
                />

                <Input 
                    type="text"
                    name="numero_turma"
                    id="numero_turma"
                    placeholder="Digite o numero da turma"
                    text="Digite o numero da turma"
                    value={turma.numero_turma}                    
                    handlerOnChange={handlerChangerTurma}
                />

                <Select
                    handlerOnChange={handlerChangerSigla}
                    name="sigla_id"
                    text="Selecione a sua turma"
                    options={categories}
                    // value={book.category.category}
                />

                <input type='submit' value="Editar Livro" />

            </form>
        </div>
    )
}