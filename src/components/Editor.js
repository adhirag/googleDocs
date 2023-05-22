import { useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import React from 'react'
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import classes from './Editor.module.css'
const component=styled.div`background:#F5F5F5`
const  toolbarOptions = [
           // toggled buttons
           ['undo' , 'redo' ],
    ['blockquote', 'code-block'],
    ['bold', 'italic', 'underline', 'strike'], 
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
const Editor = () => {
    useEffect(()=>{
     const quillServer=new Quill('#container1',{
    
       modules: {toolbar: toolbarOptions} ,theme:'snow'}
     )
    },[])
   

  return (
    // <div></div>
    <div >
    <Box > 
 
         <Box sx={{backgroundColor:'#FFFFFF',boxShadow:'0 0 0px 0 rgba(0,0,0,0.5)',margin:"10px 300px 0px 300px",height:'100vh'}}id='container1'></Box>
    </Box>
    </div>
  )
}

export default Editor