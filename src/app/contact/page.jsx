import Image from 'next/image'
import React from 'react';
import styles from "./contact.module.css"

const contactPage = () => {
  
  return (
    
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="/contact.png" alt=""  className={styles.img} fill/>
      </div>
      <div className={styles.formContainer}>
       
        <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type='submit'>send</button>
        </div>
        
 

     </div>
  )
}

export default contactPage