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
                <div className='h-full  flexheight w-full'>
                <Container>
                        <div className=" my-auto text-center bg-indigo-950 h-full  ">
                            <h1 className="text-xl md:text-4xl text-theme-400 font-bold hover:text-indigo-950">
                                Kindly Login to Read Posts
                            </h1>
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
    <div className='w-full p-8 py-5  overflow-auto bg-theme-400'>
        <Container>
                <div className='grid w-1/2 md:pr-2 pr-2 gap-5 md:gap-5 grid-cols-1'>
                    {cardsColumn1.map((post) => (
                        <div key={post.$id} className=' bg-theme-200 rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                <div className='grid w-1/2 h-full pl-2 0 gap-5 md:gap-5 grid-cols-1'>
                    {cardsColumn2.map((post) => (
                        <div key={post.$id} className='rounded-xl '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
        </Container>
    </div>
    )
}
}
