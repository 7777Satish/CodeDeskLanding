import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer(){
    return <footer className={styles.footer}>
    <div className={styles.left}>
        <div className={styles.top}>
            <h1><img src='/favicon.ico.svg' /> CodeDesk</h1>
        </div>
        <div className={styles.bottom}>
            <div className={styles.social}>
                <FaGithub /><FaFacebook /><FaInstagram /><FaTwitter />
            </div>
            <div className={styles.copy}>
                copyright 2025 &copy; Satish Singh
            </div>
        </div>
    </div>

    <div className={styles.right}>

        <div className={styles.column}>
            <div className={styles.row}><h3>Resources</h3></div>
            <div className={styles.row}><span>Support</span></div>
            <div className={styles.row}><span>System Status</span></div>
            <div className={styles.row}><span>Become a Partner</span></div>
            <div className={styles.row}><span>Integrations</span></div>
            <div className={styles.row}><span>Brand Assets / Logos</span></div>
            <div className={styles.row}><span>Security and Compliance</span></div>
            <div className={styles.row}><span>DPA</span></div>
            <div className={styles.row}><span>SOC2</span></div>
            <div className={styles.row}><span>HIPAA</span></div>
        </div>

        <div className={styles.column}>
            <div className={styles.row}><h3>Developers</h3></div>
            <div className={styles.row}><span>Documentation</span></div>
            <div className={styles.row}><span>Changelog</span></div>
            <div className={styles.row}><span>Contributing</span></div>
            <div className={styles.row}><span>Open Source</span></div>
            <div className={styles.row}><span>SupaSquad</span></div>
            <div className={styles.row}><span>DevTo</span></div>
            <div className={styles.row}><span>RSS</span></div>
        </div>

        <div className={styles.column}>
            <div className={styles.row}><h3>Company</h3></div>
            <div className={styles.row}><span>Blog</span></div>
            <div className={styles.row}><span>Customer Stories</span></div>
            <div className={styles.row}><span>Careers</span></div>
            <div className={styles.row}><span>Company</span></div>
            <div className={styles.row}><span>Events & Webinars</span></div>
            <div className={styles.row}><span>General Availability</span></div>
            <div className={styles.row}><span>Terms of Service</span></div>
            <div className={styles.row}><span>Privacy Policy</span></div>
        </div>

        <div className={styles.column}>
            <div className={styles.row}><h3>Legal</h3></div>
            <div className={styles.row}><span>Privacy Settings</span></div>
            <div className={styles.row}><span>Acceptable Use Policy</span></div>
            <div className={styles.row}><span>Support Policy</span></div>
            <div className={styles.row}><span>Service Level Agreement</span></div>
            <div className={styles.row}><span>Humans.txt</span></div>
            <div className={styles.row}><span>Lawyers.txt</span></div>
            <div className={styles.row}><span>Security.txt</span></div>
        </div>

    </div>
</footer>
}