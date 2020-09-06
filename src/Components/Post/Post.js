import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
   width: '600px',
    textAlign : 'center',
    border: '1px solid black',
    marginTop : '8px',
    margin: 'auto',
    background: 'ligthGreay',
  },
  btn: {
    textDecoration:'none',
    margin: 'auto',
    marginTop: '8px',
  },
});

const Post = (props) => {
    const {id,title} = props.post;
    const classes = useStyles();

  return (      
    <Card  color="primary" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} >
           <h1>{id}</h1>         
        </Typography>
        <Typography className={classes.title}>
           <h3><b></b>{title}</h3>         
        </Typography>        
      </CardContent >
      <CardActions >
      <Link  className={classes.btn}  to={`/post/${id}`}>
          <Button variant="contained" color="primary">See More Information</Button>
      </Link> 
      </CardActions>
    </Card>
  );
}
export default Post;