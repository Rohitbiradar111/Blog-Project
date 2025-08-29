import { useState, useEffect } from "react";
import service from "../appwrite/config.js";
import { Container, Button } from "../components/index.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor =
    post && userData ? post.userId === userData?.$id || "anonymous" : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 mb-40">
      <Container>
        <div className="w-full flex justify-center mb-8 relative pt-16">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full md:w-[40%] border border-black"
            draggable="false"
            loading="lazy"
          />
          {isAuthor && (
            <div className="absolute right-0 top-0 md:right-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="w-28 text-[0.75rem] md:w-36 md:text-lg mr-3 text-white font-bold active:bg-green-800 hover:bg-green-600 border-4 border-black"
                >
                  EDIT POST
                </Button>
              </Link>
              <Button
                onClick={deletePost}
                bgColor="bg-red-500"
                className="w-32 text-[0.75rem] md:w-40 md:text-lg text-white font-bold active:bg-red-800 hover:bg-red-600 border-4 border-black"
              >
                DELETE POST
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-8">
          <h1 className="text-xl md:text-3xl font-bold text-center underline underline-offset-8">
            {post.title}
          </h1>
        </div>
        <div className="text-wrap leading-8 md:text-lg md:px-20 md:py-5">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
