import styles from './Blog.module.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPost({post}){
    return <div className={styles.card}>
    <div className={styles.image}>
        <img src={post.image} />
    </div>
    <div className={styles.desc}>
        <div className={styles.tags}>
            <span className={styles.tag}>{post.tags[0]}</span>
            <span className={styles.date}>{post.date}</span>
        </div>
        <div className={styles.text}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
        </div>
        <div className={styles.author}>

            <div className={styles.Aimage}>
                <img src={post.author_image} alt={post.author} />
            </div>
            <span>{post.author}</span>
        </div>
    </div>
</div>
}

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(()=>{
        async function getPostsData() {
            try{
                const data = await axios.get("http://localhost:5000/blog/getLatest");
                setBlogPosts(data.data);
            } catch(err){console.log(err)}
        }
        getPostsData();
    },[]);

    return <>
        <Nav />
        <header className={styles.header}>
            <div className={styles.cards}>
            {
                blogPosts.map(post=><BlogPost key={new Date().getTime()+Math.floor(Math.random()*10000)} post={post}/>)
            }

{ blogPosts.length?<></>:<>
    <div className={styles.card}>
    <div className={styles.image}>
        <img src='assets/post1.png' alt='CodeDesk: The Future of Web-Based Code Editing' />
    </div>
    <div className={styles.desc}>
        <div className={styles.tags}>
            <span className={styles.tag}>Product Updates</span>
            <span className={styles.date}>February 6, 2025</span>
        </div>
        <div className={styles.text}>
            <h1>CodeDesk: The Future of Web-Based Code Editing</h1>
            <p>CodeDesk is revolutionizing online coding with its sleek interface, AI-powered suggestions, and seamless cloud storage.</p>
        </div>
        <div className={styles.author}>
            <div className={styles.Aimage}>
                <img src='https://picsum.photos/50/50?random=1' alt='Satish Singh' />
            </div>
            <span>Satish Singh</span>
        </div>
    </div>
</div>

<div className={styles.card}>
    <div className={styles.image}>
        <img src='assets/post2.png' alt='React 19: What’s New?' />
    </div>
    <div className={styles.desc}>
        <div className={styles.tags}>
            <span className={styles.tag}>Frontend Development</span>
            <span className={styles.date}>November 5, 2024</span>
        </div>
        <div className={styles.text}>
            <h1>React 19: What’s New?</h1>
            <p>React 19 brings several improvements, including better server components, useOptimistic, and async event handling.</p>
        </div>
        <div className={styles.author}>
            <div className={styles.Aimage}>
                <img src='https://picsum.photos/50/50?random=10' alt='Mark Zuckerberg' />
            </div>
            <span>Mark Zuckerberg</span>
        </div>
    </div>
</div>

<div className={styles.card}>
    <div className={styles.image}>
        <img src='assets/post3.png' alt='Node.js 22 Released' />
    </div>
    <div className={styles.desc}>
        <div className={styles.tags}>
            <span className={styles.tag}>Backend Development</span>
            <span className={styles.date}>December 1, 2024</span>
        </div>
        <div className={styles.text}>
            <h1>Node.js 22 Released</h1>
            <p>The latest Node.js release includes TurboFan optimizations, improved ESM support, and new built-in testing capabilities.</p>
        </div>
        <div className={styles.author}>
            <div className={styles.Aimage}>
                <img src='https://picsum.photos/50/50?random=2' alt='Ryan Dahl' />
            </div>
            <span>Ryan Dahl</span>
        </div>
    </div>
</div>

<div className={styles.card}>
    <div className={styles.image}>
        <img src='assets/post4.png' alt='Tailwind CSS v4: Faster and More Customizable' />
    </div>
    <div className={styles.desc}>
        <div className={styles.tags}>
            <span className={styles.tag}>Frontend Development</span>
            <span className={styles.date}>October 15, 2024</span>
        </div>
        <div className={styles.text}>
            <h1>Tailwind CSS v4: Faster and More Customizable</h1>
            <p>Tailwind CSS v4 brings performance improvements and enhanced customization features for modern UI development.</p>
        </div>
        <div className={styles.author}>
            <div className={styles.Aimage}>
                <img src='https://picsum.photos/50/50?random=3' alt='Adam Wathan' />
            </div>
            <span>Adam Wathan</span>
        </div>
    </div>
</div>

                </>
}
            </div>
        </header>
        <Footer />
    </>
}