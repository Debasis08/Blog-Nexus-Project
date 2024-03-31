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
            
                <div className=" bg-theme-300 w-2/3 mx-auto shadow-2xl shadow-theme-300 rounded-2xl ">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl w-full h-auto scale-90"
                    />
                    
                </div>

                <div className="w-4/5 text-black mt-10 mx-auto font-thin border-white relativev bg-gradient-to-br from-theme-400 to-white shadow-2xl shadow-theme-300 drop-shadow-2xl rounded-lg group">
                {isAuthor && (
                    <div className="absolute z-20">
                        <div className="group-hover:inline-block h-0 hidden">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="bg-opacity-0 hover:bg-opacity-40 hover:bg-theme-400">
                                    ✏️
                                </Button>
                            </Link>
                        </div>
                        <div className="group-hover:inline-block h-0 bg-theme-400 hidden ">
                                <Button className="bg-opacity-0 hover:bg-opacity-40 hover:bg-theme-400" onClick={deletePost}>
                                    🗑️
                                </Button>
                        </div>
                    </div>
                    )}
                <div className="z-10 w-full mb-6  pt-5 relative text-center group">
                    <h1 className="xl:text-3xl text-2xl font-medium">{post.title}</h1>
                </div>
                
                <div className="xl:text-xl browser-css reltive p-5 text-center font-normal h-auto font-sans group-hover:opacity-70">
                    {parse(post.content)}
                </div>
                </div>
            {/* </Container> */}
        </div>
    ) : null;
}