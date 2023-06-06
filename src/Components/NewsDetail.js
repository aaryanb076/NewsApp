import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


export class NewsDetail extends Component {
    render() {
        let { title, desc, img, url } = this.props;
        return (
            <>
                <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#074644"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="News Icon"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "20px"}}>
                        <span className="text-white"><b>{title}...</b></span> 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <span className="text-white">{desc}...</span>
                        </Typography>
                        <CardActions>
                            <Button variant="contained" size="medium" className="mt-2" href={url} target= "_blank">Learn More</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default NewsDetail
