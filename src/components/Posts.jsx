export default function Posts({ posts, onDeletePost, onEditClick }) {
  return (
    <div>
      <h2>All Posts</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{display: "flex",padding: "4px", fontSize: "20px", gap: "10px"}}>
            <div>
              <span style={{}}>{post.id}. </span>
              <span>{post.title}</span>
            </div>
            <div style={{display: "flex", gap: "5px"}}>
              <span onClick={() => onDeletePost(post.id)} style={{cursor: "pointer"}}>❌</span>
              <span onClick={() => onEditClick(post)} style={{cursor: "pointer"}}>✏️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
