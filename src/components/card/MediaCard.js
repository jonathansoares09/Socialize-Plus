import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./MediaCard.css"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img} 
          style = {{height: "250px"}}
          component = "img" 
          title="Contemplative Reptile"
        >  
     
      </CardMedia>

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <scan className = "fonte"> {props.titulo} </scan> 
        </Typography>
      </CardContent> 
        
      </CardActionArea>
    </Card>
  );
}
