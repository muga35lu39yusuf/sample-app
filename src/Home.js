import { useState } from "react";

const Home = () => {
    //let fname ='myusuf';
    const [fname,setName]= useState('myusuf');
    const [age,setAge] = useState(23);
    const [salary,setSalary]=useState('$'+5000);
    
    const ClickMe =(name)=>{
        console.log(`Hello ${name}`);

    }
    const ClickMeAgain = ()=>{
        setName('ntulume');
        setAge(54);
        setSalary('$'+10000);
        //fname= 'ntulume';
        //console.log(fname)
    }
    
    return ( 
        <div className="home">
            <p>These are our Ariobes you can choose from</p><br />
            <p>{`${fname} is ${age} and he earns ${salary}`}</p><br />
            <button onClick={ClickMeAgain}> Click Me</button><br /><br />
            <button onClick ={()=>ClickMe("yusuf")}>Click Here</button>
        </div>
     );
}
 
export default Home;