import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import FeedInputOption from './FeedInputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FeedPost from './FeedPost';
import firebase from 'firebase/compat/app';

import {db} from '../Firebase'

function FeedSection() {

    const [post,setPost] = useState([])
    const [input,setInput] =useState('')

    useEffect(()=>{
        db.collection("posts").onSnapshot((snapShot) =>{
            setPost(
                snapShot.docs.map((doc) =>({
                    id:doc.id,
                    data: doc.data()
                }))
            )
        })
    },[])

    const sendPost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            name:"Ajinkya Shinde",
            desc:"This is test post",
            // time:firebase.firestore.FieldValue.serverTimestamp(),
            time: "test",
            msg:input,
            photoUrl:''
        })
    }

    return (
        <div className='basis-[50%] mx-auto overflow-x-auto'>
            <div className='bg-white w-full p-4 rounded-md border border-gray-50'>
                <form className='border-2 relative flex rounded-full p-3 space-x-3'>
                    <CreateIcon className='text-gray-500' />
                    <input value={input} onChange={e =>setInput(e.target.value)} className='outline-none border-none ' placeholder='Start a post' />
                    <button onClick={sendPost} type='submit'></button>
                </form>

                <div className='flex justify-evenly pt-4'>
                    <FeedInputOption Icon={InsertPhotoIcon} name="Photo" colorName="#0ea5e9" />
                    <FeedInputOption Icon={OndemandVideoIcon} name="Video" colorName="#8b5cf6" />
                    <FeedInputOption Icon={PostAddIcon} name="Document" colorName="#d97706" />
                    <FeedInputOption Icon={ArticleIcon} name="Article" colorName="#ca8a04" />
                </div>
            </div>
            {post.map(({id,data:{name,desc,time,msg,photoUrl}}) =>(
                <FeedPost desc={desc} name={name} time={time} msg={msg} photoUrl={photoUrl}/>
            ))}
            {/* <FeedPost name={"Ajinkya Shinde"} desc={"Android Developer"} time={"15 Mar 2023 12:00 PM"} />
            <FeedPost name={"Ajinkya Shinde"} desc={"Android Developer"} time={"15 Mar 2023 12:00 PM"} /> */}
        </div>
    )
}

export default FeedSection