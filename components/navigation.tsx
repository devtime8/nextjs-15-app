"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {



  const path = usePathname()
  // console.log(path)


  const [count, setCount] = useState(0)



  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">blog</Link>{path === '/blog' ? '😄' : ''}
        </li>
        <li>
          <Link href="/">Home</Link>{path === '/' ? '😄' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{path === '/about-us' ? '😄' : ''}
        </li>
        <li>
          <Link href="/movies/1">movies/1</Link>{path === '/movies/1' ? '😄' : ''}
        </li>
        <li>
          <button onClick={() => { setCount((c) => c + 1) }}>{count}</button>
        </li>
      </ul>
    </nav>
  )
}