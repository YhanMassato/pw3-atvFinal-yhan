import { Link, Outlet } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function NavBar(){

    return(
        <div>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to='/'>CADASTRAR LIVRO</Link>    
                    </li>

                    <li className={styles.item}>
                        <Link to='/turmas'>BOOKS </Link>
                    </li>

                </ul>
                
            <Outlet/>
            

        </div>
    )
}