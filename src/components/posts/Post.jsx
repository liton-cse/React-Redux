import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postSlice";

function Post() {
  const { isLoading, isError, posts, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  // set raqndom color for any object
  const bgColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "tbg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const randomBg = Math.floor(Math.random() * bgColors.length);
    setBgColor(bgColors[randomBg]);
  }, []);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <h1>Loading post ...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Post found...</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul className="m-2 p-4">
        {posts.map((post) => (
          <li key={post.id} className={` ${bgColor} p-2`}>
            {post.id}. {post.title}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex justify-center item-center m-4 p-4 mt-4">
      {content}
    </div>
  );
}

export default Post;
