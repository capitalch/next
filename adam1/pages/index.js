import React from 'react'
import Link from 'next/link'

const Home = () => (
  <div>
    Home page
    <p>
      <Link href="/about">
        <a>about</a>
      </Link>
    </p>
    <p>
      <Link href='/posts'>
        <a>posts</a>
      </Link>
    </p>
  </div>
)

export default Home
