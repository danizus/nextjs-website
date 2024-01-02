"use client"

import Link from "next/link"
import styles from "./navbar.module.css"
import Navlinks from "./navlinks/Navlinks"
import { useState } from "react"


const array = [
    {
        title: "homePage",
        path:"/"
    },
    {
        title: "about",
        path:"/about"
    },
    {
        title: "blog",
        path:"/blog"
    },
    {
        title: "contact",
        path:"/contact"
    }
]
const Links = () => {
    const [open, setOpen] =  useState(false)

//temperory
    const session =  true;
    const admin =  true;
    
  return (
   <>
   <div className={styles.links}>
   { array.map((link)=>{
  return <Navlinks item = {link} key={link.title}/>
   })}
   {session?(
   <>
  {admin && <Navlinks item={{title: "admin",
            path:"/admin"}} />}
            <button className={styles.logout}>logout</button>
            </>
            ):(
                <Navlinks item = {{title: "login",
                path:"/login"}}  />
            )}

    </div>
   <button className={styles.menuButton} onClick={()=>{
    setOpen((prev)=>!prev)
   }}>menu</button>
  

   {open && 
 <div className={styles.mobileMenu}>
   {array.map((link)=>{
    return  <Navlinks item = {link} key={link.title}/> 
    
    
    })  } </div>
   
 
   
   }
    
    </>
   
  )
}

export default Links