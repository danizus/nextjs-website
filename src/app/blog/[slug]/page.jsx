import Image from "next/image"
import styles from "./single.post.module.css"

const singleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer1}>
        <Image src="/about.png" className={styles.img} fill />

      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.smallDiv} >
          <div className={styles.imagecontainer2}
          >
            <Image className={styles.img} src="/noavatar.png" fill />
          </div>
          <div className={styles.text}>
            <h2>author</h2>
            Lorem
          </div>
          <div className={styles.date}>
            <h2>date</h2>
            <p>2-10-20</p>
          </div>

        </div>
        <div>
          <p>description</p>
        </div>

      </div>


    </div>
  )
}

export default singleBlog