import Image from "next/image"
import styles from "./postcard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
        <div className={styles.imgcontainer}>
        <Image src="/about.png" fill className={styles.img}/>
        </div>
        <span className={styles.date}>date</span>

    </div>
    <div className={styles.bottom}>
        <h1 className={styles.heading}>title</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam recusandae illo possimus, velit quasi odio. Provident modi odio voluptates officiis non et iste, minima laboriosam suscipit quia ullam temporibus excepturi?</p>
        <Link className={styles.readmore} rel="stylesheet" href="/blog/post"> Readmore</Link>

    </div>


    </div>
  )
}

export default PostCard