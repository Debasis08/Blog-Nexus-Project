import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configure";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="bg-theme-400 flex flex-col min-h-screen py-10">
            {/* <Container> */}
            
                <div className=" bg-theme-200 w-2/3 mx-auto shadow-2xl rounded-2xl ">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl w-full h-auto scale-90"
                    />
                    
                </div>

                <div className="w-4/5 text-black mt-10 mx-auto font-thin border-white relativev bg-gradient-to-br from-theme-300 to-white p-5 shadow-2xl rounded-lg group">
                {isAuthor && (
                        <div className="bg-theme-200 flex justify-center z-50 absolute top-0 left-0 m-0 w-28 h-11 opacity-0 group-hover:opacity-70 rounded-lg">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className=" bg-theme-100 bg-opacity-0 hover:bg-theme-400 rounded-xl">
                                    ✏️
                                </Button>
                            </Link>
                                <Button className="bg-theme-100 bg-opacity-0 hover:bg-theme-400 rounded-xl" onClick={deletePost}>
                                    🗑️
                                </Button>
                        </div>
                    )}
                <div className="w-full mb-6 flex justify-center">
                    <h1 className="text-2xl font-medium">{post.title}</h1>
                </div>
                
                <div className="browser-css font-light h-auto font-sans">
                    {parse(post.content)}
                </div>
                </div>
            {/* </Container> */}
        </div>
    ) : null;
}