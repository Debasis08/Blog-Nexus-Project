import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/configure"
import { Container, PostCard } from '../components'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length===0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className=" text-6xl text-theme-400 font-bold hover:text-indigo-950">
                                Kindly login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
    <div className='w-full py-8 overflow-auto'>
        <Container>
                <div className='flex flex-wrap overflow-auto'>
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
