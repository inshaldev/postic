import { useData } from '../Context/Contexts';
export const Posts = () => {
  const { displayNewPost, posts } = useData();
  const addPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="posts">
      {displayNewPost ? (
        <form className="post-new" onSubmit={addPost}>
          {/* <button className="post-close red">&#10005;</button> */}
          <textarea
            className="post-input"
            placeholder="Write your post here..."
            contentEditable="true"
          />
          <button className="post-submit primary">Post</button>
        </form>
      ) : (
        ''
      )}
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
