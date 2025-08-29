import { Link } from "react-router-dom";
import service from "../appwrite/config.js";

function PostCard({ $id, featuredImage, title }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-gray-800 text-white rounded-xl p-4 hover:scale-105 transition-transform duration-200">
        <div className="mb-4">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
            draggable="false"
            loading="lazy"
          />
        </div>
        <h2 className="text-xl text-center flex justify-center items-center flex-wrap">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
