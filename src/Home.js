import react, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Nav from './Components/Nav';
import { FaGithub, FaDownload, FaChevronRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Home() {

    const [activeTestimonialCard, setActiveTestimonialCard] = useState(0);

    useEffect(() => {
        const testimonial_cards = [...document.getElementsByClassName('testimonial_card')]
        const handleScroll = (event) => {
            var final = 0;
            testimonial_cards.forEach((card, i) => {
                if (card.offsetTop < window.scrollY + window.innerHeight - 200) {
                    if (i > final) final = i;
                }
            })
            setActiveTestimonialCard(final);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
        };
    }, []);

    return <>

        {/* NavBar Start */}
        <Nav />
        {/* NavBar End */}


        {/* Header Start */}
        <header>
            <div className={styles.text}>
                <h1>The Code Editor That <span>Works</span> for You</h1>
                <p>Write, edit, and manage code effortlessly with a powerful, lightweight, and intuitive experience. Built for speed and efficiency, it ensures a smooth and distraction-free workflow, helping you focus on what truly matters—writing great code.</p>

                <div className={styles.buttons}>
                    <a className={styles.a} rel='noreferrer' target='_blank' href='https://github.com/7777Satish'><FaGithub /> Open Source</a>
                    <button><FaDownload /><a href='https://editor-codedesk.vercel.app'>Download</a></button>
                </div>
            </div>
            <div className={styles.video}>
                <video muted={true} loop={true} autoPlay src='/assets/codeeditor_running_video.mp4'></video>
                <div className={styles.overlay}></div>
            </div>
        </header>
        {/* Header End */}

        {/* Features Start */}
        <section className={styles.features}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <h3>Lightning-Fast Performance</h3>
                        <p>Zero lag, smooth coding experience.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.text}>
                        <h3>Intelligent Autocomplete</h3>
                        <p>Speed up development with real-time code suggestions.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.text}>
                        <h3>Customizable UI</h3>
                        <p>Tailor themes, layouts, and key bindings to match your workflow.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.text}>
                        <h3>Multi-File Editing</h3>
                        <p>Seamlessly switch between multiple files with ease.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.text}>
                        <h3>Syntax Highlighting</h3>
                        <p>Built-in support for multiple programming languages.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.text}>
                        <h3>Error Detection & Warnings</h3>
                        <p>Catch mistakes before they break your code.</p>
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                <h3>Powerful features that make <span>coding</span> seamless and effortless.</h3>
            </div>
        </section>
        {/* Features Start */}

        {/* Testimonials Start */}

        <section className={styles.testimonials}>
            <div className={styles.heading}>
                <h1>What Developers Are Saying</h1>
                <p>Dive into success stories <FaChevronRight /></p>
            </div>
            <div className={styles.cards}>

                <div className={`${styles.card} ${activeTestimonialCard === 0 ? styles.active : ""} testimonial_card`}>
                    <div className={styles.text}>
                        <p>This editor is incredibly smooth and distraction-free. The speed and efficiency have completely changed how I code!</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.image}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREfvGfBOUF-u4e-RQBAT3nFchtdWiq1O8Tz_N24bIXHPVs9OGefJ-1jb2_-220OJza1g&usqp=CAU' alt='client' />
                        </div>
                        <div className={styles.name}>Steve Jobs <span>- Apple Founder</span></div>
                    </div>
                </div>


                <div className={`${styles.card} ${activeTestimonialCard === 1 ? styles.active : ""} testimonial_card`}>
                    <div className={styles.text}>
                        <p>This code editor has completely transformed the way I write and manage code!</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.image}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PUYsJ8gGEMPpAwutt4FolbNOdIiEDJsWYQ&s' alt='client' />
                        </div>
                        <div className={styles.name}>Sundar Pichai <span>- CEO of Google</span></div>
                    </div>
                </div>


                <div className={`${styles.card} ${activeTestimonialCard === 2 ? styles.active : ""} testimonial_card`}>
                    <div className={styles.text}>
                        <p>The smoothest coding experience I've ever had! No lag, no distractions—just pure focus.</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.image}>
                            <img src='https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg?w=385' alt='client' />
                        </div>
                        <div className={styles.name}>Mark Zuckerberg <span>- Founder of Facebook</span></div>
                    </div>
                </div>


                <div className={`${styles.card} ${activeTestimonialCard === 3 ? styles.active : ""} testimonial_card`}>
                    <div className={styles.text}>
                        <p>Fast, clean, and powerful. Everything I need in one place!</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.image}>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg' alt='client' />
                        </div>
                        <div className={styles.name}>Elon Musk <span>- CEO of Tesla</span></div>
                    </div>
                </div>

            </div>
        </section>

        {/* Testimonials End */}

        {/* Stats Start */}

        <section className={styles.stats}>
            <div className={styles.text}>
                <h1><span>Our</span> Impact</h1>
                <p>Innovation. Collaboration. Impact.</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <p>Empowering developers with an intuitive editor.</p>
                        <h3>7777Satish/CodeEditor</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <p>Collaborated with over 50 passionate developers.</p>
                        <h3>50+ Developers</h3>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.active}`}>
                    <div className={styles.text}>
                        <p>Thousands of downloads, growing every day.</p>
                        <h3>1000+ Downloads</h3>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <p>Crafted with over 20,000 lines of code.</p>
                        <h3>20000+ Lines Of Code</h3>
                    </div>
                </div>
            </div>
            <div className={styles.bottomText}>
                <p>Join our <span>community</span> of 10,000+ developers on Discord!</p>
            </div>
        </section>

        {/* Stats End */}

        {/* Banner Start */}

        <section className={styles.banner}>
            <div className={styles.heading}>
                <h1>Better Editor.<br />For Better Workflow</h1>
            </div>
            <div className={styles.image}>
                <video muted={true} loop={true} autoPlay src='https://neon.tech/videos/pages/home/replicas.mp4'></video>
                <div className={styles.text}>
                    <h3>Shaping the Future of Coding, One Line at a Time</h3>
                    <p>Every line of code we write today shapes the future of development, empowering developers to create, innovate, and push the boundaries of what's possible</p>
                </div>
                <div className={styles.cover}></div>
            </div>
        </section>

        {/* Banner End */}

        {/* Ending Start */}

        <section className={styles.ending}>
            <div className={styles.text}>
                <h1>Features of tomorrow.<br />Available today.</h1>
                <div className={styles.buttons}>
                    <a className={styles.a} target='_blank' href='https://github.com/7777Satish'><FaGithub /> Open Source</a>
                    <button><FaDownload /><a href='https://editor-codedesk.vercel.app'>Download</a></button>
                </div>
            </div>
        </section>

        {/* Ending End */}

        {/* Footer Start */}

        <footer className={styles.footer}>
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

        {/* Footer End */}

    </>
}

export default Home;