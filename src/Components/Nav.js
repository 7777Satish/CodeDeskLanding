import styles from './Nav.module.css';
import {FaDownload, FaGithub} from 'react-icons/fa';
export default function Nav(){
    return <nav className={styles.nav}>
        <div className={styles.left}>
            <h1><img src='/favicon.ico.svg'/> CodeDesk</h1>
            <ul>
                <li><a href='https://editor-codedesk.vercel.app'>Product</a></li>
                <li>Pricing</li>
                <li>Docs</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className={styles.right}>
            <a className={styles.a} target='_blank' rel='noreferrer' href='https://github.com/7777Satish'><FaGithub/> Open Source</a>
            <button><FaDownload/> <a href='https://editor-codedesk.vercel.app'>Download</a></button>
        </div>
    </nav>
}