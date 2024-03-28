import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/configure"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

export default function Home() {
    const authStatus = useSelector((state) => state.auth.status)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

            if (!authStatus) {
                return (
                <div>
                <Container>
                    <div>
                        <div className="p-5 w-full text-center">
                            <h1 className=" text-6xl text-theme-400 font-bold hover:text-indigo-950">
                                Kindly login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
                </div>
                )
            } else if (posts.length===0) {
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
    <div className='w-full py-8 overflow-auto bg-theme-400'>
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
}
