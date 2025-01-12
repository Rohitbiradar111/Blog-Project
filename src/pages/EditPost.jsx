import React, { useState, useEffect } from "react";
import service from "../appwrite/config.js";
import { useParams, useNavigate } from "react-router-dom";
import { Container, PostForm } from "../components/index.js";

function EditPost() {

    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            service.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                    }
                })
        }
        else {
            navigate("/");
        }
    }, [slug, navigate])

    return post ? (
        <div className="py-10">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost;