import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowImg from '../ShowImg/ShowImg';



const Comments = (props) => {
    const{postId} = useParams();
    const[comments,setComments] = useState([]);
    
    useEffect( ()=>  {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
        
      },[])
    return (
        < >
            <div style ={{width : '900px',margin:'auto',textAlign:'center',background:'red'}}>
                <h1>ID NO: {postId}</h1>
                <h1>Total Comments: {comments.length}</h1>                
            </div>
            <div>
            {
                comments.map( comment => <ShowImg comment ={comment}  ></ShowImg>
                )
            }
            </div>
            
                
           </>
    );
};

export default Comments;