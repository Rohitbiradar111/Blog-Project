import React from "react";
import { Container, PostForm } from "../components/index.js";

function AddPost() {
    return (
        <div className="py-10">
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default AddPost;