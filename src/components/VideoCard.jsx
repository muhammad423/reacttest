import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


const VideoCard = ({video: {id:{videoId}, snippet} }) => {
    console.log(videoId, snippet)
  return (
    <Card sx={{width: {md: '270px', xs: '100%'}}}>
      <Link to={videoId}>
       <CardMedia image={snippet?.thumbnails?.high?.url}
       alt={snippet?.title}
       sx={{width:358, height:180}}/>
       <CardContent sx={{backgroundColor: '#1e1e1e' , height: '106px'}}>
         <Link to={videoId}>
          <Typography variant='subtitle2' fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0, 60)}
          </Typography>
         </Link>
       </CardContent>
       
      </Link>
    </Card>
  )
}

export default VideoCard
