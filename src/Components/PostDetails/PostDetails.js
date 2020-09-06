import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
     width: '900px',
      textAlign : 'center',
      border: '1px solid black',
      marginTop : '8px',
      margin: 'auto',
      background: 'brown',
      color : 'white',      
    },
    body:{
      width: '900px',
      textAlign : 'center',
      border: '1px solid black',
      marginTop : '8px',
      margin: 'auto',
      background : 'tomato'

    },
    email: {
        marginTop: '20px',
    }
  });

const PostDetails = () => {
     const {postId}=useParams();
     const [posts, setPosts]=useState({});
     const classes = useStyles();
     useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
     },[])
     const {title,body}=posts;
    return (
        <>
            <Card className={classes.root}>
                    <CardContent>
                        <Typography>
                            <h1><b>Post:- </b>{title} </h1>
                        </Typography>
                        <Typography>
                            <h3><b>Body:- </b> {body}</h3>
                        </Typography>              
                    </CardContent>            
                </Card>
           <div>
           <Comments postid ={postId} key = {postId.id}></Comments>
           </div>
        </>
        
    );
};

export default PostDetails;