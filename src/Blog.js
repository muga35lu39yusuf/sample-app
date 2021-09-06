import { useState } from "react";
import BlogList from "./BlogList";
const Blogs = () => {
    const [blogs,setBlogs] = useState([
        {title:'How to Venture into Clothes business', body:'Conduct market research. Market research will tell you if theres an opportunity to turn your idea into a successful business',author:'cliff ivan',id:1},
        {title:'How to Venture into Crocks business', body:'Conduct market research. Market research will tell you if theres an opportunity to turn your idea into a successful business',author:'Milphat',id:2},
        {title:'How to Venture into Juice business', body:'Conduct market research. Market research will tell you if theres an opportunity to turn your idea into a successful business',author:'myusuf',id:3},
        {title:'How to Venture into Shoes business', body:'Conduct market research. Market research will tell you if theres an opportunity to turn your idea into a successful business',author:'Madrin',id:4},
        {title:'How to Venture into  Ariobes business', body:'Conduct market research. Market research will tell you if theres an opportunity to turn your idea into a successful business',author:'katenta',id:5},
        {title:'How to Venture into Perfumes/scents business', body:'Conduct market research. Market research will tell you if theres an opportunity to turn your idea into a successful business',author:'',id:6},
        {title:'How to Venture into the Bonnents business', body:'Go to jemba plaza buy stuff and start working on the bonnets',author:'Mariam K',id:7},

    ])
    return ( 
        <div className="home">
             <p>{'Blogs Here'}</p><br />
            <BlogList blogers ={blogs}/>
        </div>

     );
}
 
export default Blogs;