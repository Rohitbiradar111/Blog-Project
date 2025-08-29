import { useState, useEffect } from "react";
import service from "../appwrite/config.js";
import { Button, Container, PostCard } from "../components/index.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

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
              {authStatus ? (
                <div className="my-40">
                  <h1 className="text-4xl">NO POSTS YET!</h1>
                  <br />
                  <h1 className="text-3xl">
                    Add a Post By Clicking on Add Post
                  </h1>
                </div>
              ) : (
                <div className="flex justify-center text-center items-center my-36 md:mb-20 md:my-20">
                  <div className="md:m-14">
                    <div className="text-center text-xl md:text-2xl">
                      <h1 className="leading-10">
                        &quot;Don&apos;t focus on having a great blog. Focus on
                        producing a blog that&apos;s great for your
                        readers.&quot;
                      </h1>
                      <span>- Brian Clark</span>
                      <div>
                        <Link to={"/signup"}>
                          <Button className="text-black border border-black text-lg m-5 rounded-bl-sm rounded-tr-sm rounded-tl-2xl rounded-br-2xl bg-white px-14 hover:scale-110 duration-700 hover:bg-green-400 md:px-10 md:py-3 md:text-xl">
                            Signup for free
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <div key={post.$id} className="p-2 w-full md:w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
