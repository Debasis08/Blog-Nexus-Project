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

    const midIndex = Math.ceil(posts.length / 2);
    const cardsColumn1 = posts.slice(0, midIndex);
    const cardsColumn2 = posts.slice(midIndex);

    if (posts.length===0) {
      return (
          <div className='flex flex-col text-center '>
            <div className='text-2xl font-bold top-0 text-theme-400 hover:text-opacity-90'>
            A Few Moments....
            </div>
            <div className='text-sm font-normal text-theme-300 '>
            (Blogs will show up if there are any)<br/>
            (Reload the page in case available Blogs doesn't show up)
            </div>
          </div>
      )
  } else {
  return (
    <div className='w-full p-8 py-8 overflow-auto bg-theme-400'>
        <Container>
                <div className='grid w-1/2 pr-2 gap-3 md:gap-5 grid-cols-1'>
                    {cardsColumn1.map((post) => (
                        <div key={post.$id} className='rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                <div className='grid w-1/2 h-full pl-2 gap-3 md:gap-5 grid-cols-1'>
                    {cardsColumn2.map((post) => (
                        <div key={post.$id} className='rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
        </Container>
    </div>
  )
}
}