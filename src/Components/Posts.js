import '../Styles/components.css';
import { useData } from '../Context/Contexts';
export const Posts = () => {
  const { posts } = useData();
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <div className="post">
            <h1>{post.name}</h1>
            <h3>{post.username}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};
