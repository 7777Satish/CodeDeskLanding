import styles from './Nav.module.css';
import {FaDownload, FaGithub} from 'react-icons/fa';
export default function Nav(){
    return <nav className={styles.nav}>
        <div className={styles.left}>
            <h1><img src='/favicon.ico.svg'/> CodeDesk</h1>
            <ul>
                <li><a href='https://codedesk.vercel.app'>Product</a></li>
                <li>Pricing</li>
                <li>Docs</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className={styles.right}>
            <a target='_blank' href='https://github.com/7777Satish'><FaGithub/> Open Source</a>
            <button><FaDownload/> Download</button>
        </div>
    </nav>
}