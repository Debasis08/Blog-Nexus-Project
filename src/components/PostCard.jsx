import React from 'react';
import appwriteService from "../appwrite/configure";
import {Link} from 'react-router-dom';

function PostCard({$id, title,featuredImage}) {

  return (
    <Link to = {`/post/${$id}`}>
      <div className='w-full bg-theme-200 box-border rounded-xl shadow-2xl p-2'>
        <div className='w-full justify-center mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt= {title} className='rounded-xl' />
        </div>
        <h2 className='text-base text-theme-400 font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
