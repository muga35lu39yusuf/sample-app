const BlogList = ({blogers,name,deletePost}) => {
    // const blogs = props.blogers;
    // const name = props.name;

    // console.log(name);

    // console.log(blogs);
    // console.log(props);
    return ( 
        <div className="blog-lists">
            <h2>{name}</h2>
            {blogers.map((blog)=>(
                <div className="blogs-preview" key>
                    <h2>{blog.title}</h2><br />
                    <p>{blog.body}</p><br />
                    <h5>Written by {blog.author}</h5><br />
                    <button onClick={() => deletePost(blogers.id)}>Delete Post</button>
                </div>
                
            ))}
        </div>
     );
}
 
export default BlogList;