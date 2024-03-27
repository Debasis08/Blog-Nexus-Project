import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/configure"
import {Container, PostCard} from '../components'

export default function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

    if (posts.length===0) {
      return (
          <div className='flex justify-center'>
            <div className='text-2xl text-theme-400 hover:text-opacity-90'>
            Not a single post in NEXUS BLOG 😱 <br/><br/><br/>
            Hey Start your journey by adding Posts !!
            </div>
          </div>
      )
  } else {
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}
}