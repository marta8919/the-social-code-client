import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

function CardAbout(props) {
    const {image, title} = props
    return (
        <Card className="card-about">
                <CardActionArea>
                    <img className="card-image"
                    src={image}
                    alt={title}
                    />
                    <CardContent>
                    <p gutterBottom variant="h5" component="h2">
                        {title}
                    </p>
                    </CardContent>
                </CardActionArea>
            </Card>
        
    )
}

export default CardAbout
