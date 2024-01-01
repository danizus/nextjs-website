"use client"
import styles from "./navlinks.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navlinks = ({item}) => {
    const pathName = usePathname();
  return (
    <Link className={`${styles.container} ${pathName === item.path && styles.active }`} href={item.path}>{item.title} </Link>
  )
}

export default Navlinks