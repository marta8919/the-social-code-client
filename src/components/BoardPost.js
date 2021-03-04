import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, Typography, CardActions, FormControlLabel, Checkbox } from '@material-ui/core';
import {FavoriteBorder, Favorite} from '@material-ui/icons';
import SmsIcon from '@material-ui/icons/Sms';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';


function BoardPost (props) {
    const {user, description} = props
    const [checked, setCheck] = React.useState(false);
    
      const toggleCheckBox = (event) => {
        setCheck(event.target.checked);
      };
    
    return (
        <Card className="card-board">
            <CardContent>
                <Typography variant="h5" component="h2"className="text-dark">{user.username}@Username</Typography>
                <Typography variant="body2" component="p" className="text-dark">{description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox
                icon={<FavoriteBorder/>}
                checkedIcon={<Favorite/>}
                onChange={toggleCheckBox}
                inputProps={{ "aria-label": "Like"}}
                />

                <Checkbox
                icon={<SmsOutlinedIcon/>}
                checkedIcon={<SmsIcon/>}
                onChange={toggleCheckBox}
                inputProps={{ "aria-label": "Like"}}
                />
            </CardActions>
        </Card>
        
    )
}

export default BoardPost
