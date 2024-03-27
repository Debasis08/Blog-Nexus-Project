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

    // if (!authStatus || posts.length===0) {
    //     return (
            
    //         <div className="w-full py-8 mt-4 text-center">

    //         <div className='text-2xl text-theme-400 hover:text-opacity-90'>
    //             Not a single post in NEXUS BLOG 😱 <br/><br/><br/>
    //             Hey Start your journey by adding Posts !!
    //         </div>

            if (!authStatus) {
                return (
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className=" text-6xl text-theme-400 font-bold hover:text-indigo-950">
                                Kindly login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>)
            } else if (posts.length===0) {
                return (
                    <div className='flex justify-center'>
                        <div className='text-2xl text-theme-400 hover:text-opacity-90'>
                        Not a single post in NEXUS BLOG 😱 <br/><br/><br/>
                        Hey Start your journey by adding Posts !!
                        </div>
                    </div>
                )
            }

    return (
    <div className='w-full py-8 overflow-auto bg-indigo-950'>
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
