import '../Styles/components.css';
import { useData } from '../Context/Contexts';
export const Posts = () => {
  const { posts, deletePost } = useData();
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="post-inline">
              <div className="post-user-info">
                <h1>{post.authorName}</h1>
                <h3>{post.authorUsername}</h3>
              </div>
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
                className="post-delete"
              >
                X
              </button>
              {/* <button>Edit Post</button> */}
            </div>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};
