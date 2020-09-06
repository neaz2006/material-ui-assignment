import React, { useEffect, useState } from 'react';
// import img from '../img/userPic.png'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     width: '900px',
      textAlign : 'center',
      border: '1px solid black',
      marginTop : '8px',
      margin: 'auto',
      background: 'orange',
      color : 'white',      
    },
    body:{
      width: '900px',
      textAlign : 'center',
      border: '1px solid black',
      marginTop : '8px',
      margin: 'auto',

    },
    email: {
        marginTop: '20px',
    },
    img :{
        width:'80px',
        height: '80px', 
        borderRadius: '50px', 
        marginTop: '15px'
    }
  });

const Commentdetails = (props) => {
    const { id, name, email, body } = props.comment;
    const [photo, setPhoto]= useState([]);
    const classes = useStyles();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
            .then(data => setPhoto(data))
    })
const {url} = photo;
    return (
        <Container className={classes.body}>            
            <img src={url} alt="" className={classes.img}/>
            <h4> <b>Comment Name</b> : {name} </h4>
            <p><b> Email</b> : {email}</p>
            <p><b> Body</b> : {body}</p>
        </Container>
    );
};

export default Commentdetails;