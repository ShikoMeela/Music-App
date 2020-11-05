import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '../music card detailed/list';
import '../music card detailed/artistDetails.css';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '80%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    height: 200,
  },
  mediaMobile: {
    height: 306,
  },
  cover: {
    width: 300,
    height: 'inherit',
    marginLeft: 200,
  },
}));

export default function MediaControlCard({ artist, tracks }) {
  const classes = useStyles();
  return (
    <div>
      <div className="desktopView">
      {
        artist !== null && artist !== {} ? 
        <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {artist.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {artist.nb_fan} Fans
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={artist.picture_medium}
          title={artist.name}
        />
        <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Top Tracks
            </Typography>
            <List list={tracks}/>
          </CardContent>
      </Card>
      : null
      }
      </div>
      <div className="mobileView">
      {
        artist !== null && artist !== {} ? 
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.mediaMobile}
              image={artist.picture_medium}
              title={artist.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {artist.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {artist.nb_fan} Fans
              </Typography> <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Top Tracks 
              </Typography> <hr />
              <List list={tracks}/>
            </CardContent>
          </CardActionArea>
        </Card>
      : null
      }
      </div>
    </div>
  );
}
