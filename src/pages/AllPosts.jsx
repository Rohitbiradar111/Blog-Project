import { useState, useEffect } from "react";
import service from "../appwrite/config.js";
import { Container, PostCard } from "../components/index.js";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <div className="my-40">
                <h1 className="text-4xl">NO POSTS YET!</h1>
                <br />
                <h1 className="text-3xl">Add a Post By Clicking on Add Post</h1>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-8 mb-64">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default AllPosts;
