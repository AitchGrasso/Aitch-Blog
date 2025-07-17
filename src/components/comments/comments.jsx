import style from './comments.module.css';
import Link from "next/link";
import Image from 'next/image';

const Comments = () => {

    const status = "authenticated"; 

  return (
    <div className={style.container}>
        <h1 className={style.title}>Comments</h1>

        {status === "authenticated" ? (
            <div className={style.write}>
            <textarea className={style.input} placeholder="Write a comment..."></textarea>
            <button className={style.button}>Submit</button>
            </div>
        ) : (<Link href="/login" className={style.login}>Login to write a comment</Link>)}

        <div className={style.comments}>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src="/p1.jpeg" alt="" className={style.image} width={50} height={50} />
                    <div className={style.userInfo}>
                        <span className={style.username}>John Doe</span>
                        <span className={style.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt aperiam deleniti repellat, corrupti quidem aut labore consequatur, necessitatibus commodi enim pariatur delectus laudantium totam expedita. Architecto obcaecati debitis voluptatem.</p>
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src="/p1.jpeg" alt="" className={style.image} width={50} height={50} />
                    <div className={style.userInfo}>
                        <span className={style.username}>John Doe</span>
                        <span className={style.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt aperiam deleniti repellat, corrupti quidem aut labore consequatur, necessitatibus commodi enim pariatur delectus laudantium totam expedita. Architecto obcaecati debitis voluptatem.</p>
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src="/p1.jpeg" alt="" className={style.image} width={50} height={50} />
                    <div className={style.userInfo}>
                        <span className={style.username}>John Doe</span>
                        <span className={style.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt aperiam deleniti repellat, corrupti quidem aut labore consequatur, necessitatibus commodi enim pariatur delectus laudantium totam expedita. Architecto obcaecati debitis voluptatem.</p>
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src="/p1.jpeg" alt="" className={style.image} width={50} height={50} />
                    <div className={style.userInfo}>
                        <span className={style.username}>John Doe</span>
                        <span className={style.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt aperiam deleniti repellat, corrupti quidem aut labore consequatur, necessitatibus commodi enim pariatur delectus laudantium totam expedita. Architecto obcaecati debitis voluptatem.</p>
            </div>
        </div>
    </div>
  );
}

export default Comments;