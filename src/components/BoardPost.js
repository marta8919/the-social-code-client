import React from 'react'

import { StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, Checkbox } from '@material-ui/core';
import {FavoriteBorder, Favorite} from '@material-ui/icons';
import SmsIcon from '@material-ui/icons/Sms';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';


function BoardPost (props) {
    const {user, description} = props
      
    return (
        <StylesProvider>
            <Card className="card-board">
                <CardContent className="post-container">
                    <img src={user.picture} alt="Profile" className="profile-pic"/>
                    <div className="post-text">
                        <Typography variant="h5" component="h2"className="text-dark">@{user.username}</Typography>
                        <Typography variant="body2" component="p" className="text-dark">{description}</Typography>
                        <CardActions disableSpacing>
                            <Checkbox
                            icon={<FavoriteBorder/>}
                            checkedIcon={<Favorite/>}
                            inputProps={{ "aria-label": "Like"}}
                            />

                            <Checkbox
                            icon={<SmsOutlinedIcon/>}
                            checkedIcon={<SmsIcon/>}
                            inputProps={{ "aria-label": "Like"}}
                            />
                        </CardActions>
                    </div>
                </CardContent>
                
            </Card>
        </StylesProvider>
    )
}

export default BoardPost
