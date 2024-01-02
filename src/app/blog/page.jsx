import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css"


const blogPage = () => {
  return (
    <>
    <div className={styles.container}>
<div className={styles.Posts}>


    <PostCard/>

</div>
<div className={styles.Posts}>


    <PostCard/>

</div>
<div className={styles.Posts}>


    <PostCard/>

</div>
<div className={styles.Posts}>


    <PostCard/>

</div>

    </div>
    
    
    </>
  )
}

export default blogPage