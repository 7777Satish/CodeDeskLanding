import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import {FaDownload, FaGithub} from 'react-icons/fa';
export default function Nav(){
    return <nav className={styles.nav}>
        <div className={styles.left}>
            <h1><Link to="/"><img src='/favicon.ico.svg'/> CodeDesk</Link></h1>
            <ul>
                <li><a href='https://editor-codedesk.vercel.app'>Product</a></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/docs">Docs</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
        <div className={styles.right}>
            <a className={styles.a} target='_blank' rel='noreferrer' href='https://github.com/7777Satish'><FaGithub/> Open Source</a>
            <button><FaDownload/><a href='https://editor-codedesk.vercel.app'>Download</a></button>
        </div>
    </nav>
}