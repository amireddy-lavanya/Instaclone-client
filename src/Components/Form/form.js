import {React,useState} from 'react';
import {useNavigate } from "react-router-dom";
import './form.css';
import axios from "axios";
import Navbar from '../Navbar';


const Form =()=>{
    const postdate= new Date();
    const navigate = useNavigate();
    const u_date=`${postdate.getDate()}/${postdate.getMonth()+1}/${postdate.getFullYear()}`
    const[post,setPost]=useState({name:"",location:"",likes:"0",description:"",PostImage:"",date:""});
    const [image,setImage]=useState('');
    const handlesubmit= async (e)=>{
        e.preventDefault();
        setPost({...post,date:u_date})
        const data= new FormData();
        data.append("file",image);
        data.append("upload_preset","instaclone");
        data.append("cloud_name","dvdqyxje9");
        await fetch("https://api.cloudinary.com/v1_1/dvdqyxje9/image/upload",{
            method:"POST",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            const newpost={
                name:post.name,
                location:post.location,
                likes:post.likes,
                description:post.description,
                PostImage:data.url,
                date:u_date
            }
             axios.post('https://instaclone-server-wj8w.onrender.com/posts',newpost)
            
            })
        .catch(err=>console.log(err))
            navigate("/post")
      }
    return(
        <>
         <Navbar/>
        <form>
            <div className='form-inner'>
                <div className='input1'><input type="file" id="file" name="file" onChange={(event)=>{setImage(event.target.files[0])}}/></div>
                <div className='input2'> 
                <input type="text"  id='author' placeholder='Author' onChange={(event)=>{setPost({...post,name:event.target.value})}}/>
                <input type="text"  id="location" placeholder='Location' onChange={(event)=>{setPost({...post,location:event.target.value})}}/>
                </div>
                
                <div className='input3'><input type="text" id="description" placeholder='Description' onChange={(event)=>{setPost({...post,description:event.target.value})}}/></div>
                <button className='btn' onClick={handlesubmit}>Post</button>
                </div>
           
        </form>
        </>
    )
}

export default Form

