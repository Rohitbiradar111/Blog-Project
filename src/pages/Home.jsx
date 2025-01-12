import React, { useState, useEffect } from "react";
import service from "../appwrite/config.js";
import { Container, PostCard } from "../components/index.js";
import { useSelector } from "react-redux";

function Home() {

    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        service.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center">
                <Container >
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {
                                authStatus ? (
                                    <div className="my-40">
                                        <h1 className="text-4xl">
                                            NO POSTS YET!
                                        </h1>
                                        <br />
                                        <h1 className="text-3xl">
                                            Add a Post By Clicking on Add Post
                                        </h1>
                                    </div>
                                ) : (
                                    <div className="flex flex-row mb-20">
                                        <div className="mt-10 ml-12">
                                            <img
                                                src="/pexels-photo-842711.jpeg"
                                                alt="Brown and Green Mountain View Photo"
                                                className="rounded-lg w-[30rem] h-[20rem]"
                                            />
                                        </div>
                                        <h1 className="ml-10 mt-32 text-3xl font-serif">
                                            <h1>
                                                Hey There!👋
                                            </h1>
                                            <h1 className="mt-2 mb-2">
                                                Welcome to My Blog Website.
                                            </h1>
                                            <h1>
                                                Get Started by Clicking on Login or Signup
                                            </h1>
                                        </h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Container >
            </div >
        )
    }
    else {
        return (
            <div className="w-full py-8 mb-64">
                <Container>
                    <div className='flex flex-wrap'>
                        {
                            posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;