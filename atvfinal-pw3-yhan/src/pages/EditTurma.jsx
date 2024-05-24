import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styles from "./style-pages/editTurma.module.css"
import Input from "../components/form/input"
import Select from "../components/form/Select"

export default function BookEdit(params){
    
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
        .then((data) => {setBook(data); console.log(data)})
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

    function handlerChangerBook(event){
        setTurma({...turma, [event.target.name] : event.target.value})
        console.log(turma)
    }

    function handlerChangerCategory(event){
        setTurma({...turma, category:{
            id: event.target.name,
            category: event.target.options[event.target.selectedIndex].text
        }})
        console.log(turma)
    }

    function editarTurma(turma){
        fetch(`http://localhost:5000/books/${book.id}`,
        {
            method:'PATCH',
            headers:{'Content-Type' : 'appliation/json'}
        ,
        body: JSON.stringify(book)
    })
        .then(
            (resp)=>resp.json()
        )
        .then(
            (data) => {
                console.log(data)
                navigate('/book',{state:"Livro editado com sucesso "})
            })

        .catch(
            (error) => {
                console.log(error)
            }
        )
    }

    function handlerSubmit(e){
        e.preventDefault();
        editarLivro(book)
        
    }

    return(
        <div className={styles.book_container}>
            <h1>Edição de livro</h1>

            <form onSubmit={handlerSubmit}>
                <Input 
                    type="text"
                    id="nome_livro"
                    name="nome_livro"
                    placeholder="Titulo do Livro:"
                    text=""
                    value={book.nome_livro}
                    handlerOnChange={handlerChangerBook}
                />

                <Input 
                    type="text"
                    name="nome_autor"
                    id="nome_autor"
                    placeholder="digite o titulo do autor"
                    text=""
                    value={book.nome_autor}                    
                    handlerOnChange={handlerChangerBook}
                />

                <Input 
                    type="text"
                    name="descricao_livro"
                    id="descricao_livro"
                    placeholder="digite a descricao do livro"
                    text="digite a descricao do livro"
                    value={book.descricao_livro}
                    handlerOnChange={handlerChangerBook}
                /> 

                <Select
                    handlerOnChange={handlerChangerCategory}
                    name="categoria_id"
                    text="selecione a categoria do livro"
                    options={categories}
                    // value={book.category.category}
                />

                <input type='submit' value="Editar Livro" />

            </form>
        </div>
    )
}