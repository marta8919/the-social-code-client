import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

function BoardArticle (props) {
    const {title, description} = props
    return (
        <Card className="card-board">
            <CardContent>
                <Typography variant="h5" component="h2"className="text-dark">{title} hello</Typography>
                <Typography variant="body2" component="p" className="text-dark">{description}</Typography>
            </CardContent>
        </Card>
        
    )
}

export default BoardArticle
