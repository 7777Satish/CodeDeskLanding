import styles from './NoPage.module.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { FaChevronRight } from 'react-icons/fa';

export default function Blog(){
    return <>
        <Nav/>
        <header className={styles.header}>
            <div className={styles.text}>
                <h1>Ooops!<br/>Page not found...</h1>
                <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                <button><a href='/'>Go Back <FaChevronRight /></a></button>
            </div>
        </header>
        <Footer/>
    </>
}