const BlogList = (props) => {
    const blogs = props.blogers;

    console.log(blogs);
    console.log(props);
    return ( 
        <div className="blog-lists">
            {blogs.map((blog)=>(
                <div className="blogs-preview" key>
                    <h2>{blog.title}</h2><br />
                    <p>{blog.body}</p><br />
                    <h5>'Written by '{blog.author}</h5><br />
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;