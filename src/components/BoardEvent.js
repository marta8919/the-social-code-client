import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from '@material-ui/core';

function BoardEvent(props) {
  const { event } = props;
  
  return (
    <div className="container">
    <Card className="my-card">
      <CardContent>
        <Typography variant="h5" component="h2" className="text-dark">
          {event.title}
        </Typography>
        <Typography variant="body2" component="p" className="text-dark">
          {event.description}
        </Typography>
        <Typography variant="body2" component="p" className="text-dark">
          Date: {event.dateString}, at {event.hours}:{event.minutes}
        </Typography>
        <a href="{event.link}">
          Link to register
        </a>
        {event.tags ? (
          <div className="article-code">
            <Typography variant="body2" component="p" className="text-dark">
              Tags: #{event.tags}
            </Typography>
          </div>
        ) : (
          ""
        )}
      </CardContent>
    </Card>
    </div>
  );
}

export default BoardEvent;
