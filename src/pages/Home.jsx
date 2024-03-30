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

    const midIndex = Math.ceil(posts.length / 2);
    const cardsColumn1 = posts.slice(0, midIndex);
    const cardsColumn2 = posts.slice(midIndex);

            if (!authStatus) {
                return (
                <div className='h-full'>
                <Container>
                    <div className='w-full'>
                        <div className="py-24 w-full h-64 text-center">
                            <h1 className="text-xl text-theme-400 font-bold hover:text-indigo-950">
                                Kindly login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
                </div>
                )
            } else if (posts.length===0) {
                return (
                    <div className='flex flex-col text-center '>
                        <div className='text-2xl font-bold top-0 text-theme-400 hover:text-opacity-90'>
                        A Few Moments....
                        </div>
                        <div className='text-sm font-normal text-theme-300 '>
                        (Blogs will show up if there are any)
                        </div>
                    </div>
                )
            } else {

    return (
    <div className='w-full py-8 overflow-auto bg-theme-400'>
        <Container>
                <div className='px-4 grid items-start xl:grid-cols-4 md:grid-cols-3 gap-3 grid-cols-1'>
                    {cardsColumn1.map((post) => (
                        <div key={post.$id} className='rounded-xl bg-theme-400'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                <div className='grid items-start xl:grid-cols-4 md:grid-cols-3 gap-3 grid-cols-1'>
                    {cardsColumn2.map((post) => (
                        <div key={post.$id} className='rounded-xl bg-theme-300'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
        </Container>
    </div>
    )
}
}
