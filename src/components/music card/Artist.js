import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    width: 387,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({ artist, getArtist }) {
  const classes = useStyles();
  
  function handleCLick(id) {
    getArtist(id);
  }
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
           {
            artist.map(item => {
              return (<Grid key={item.id} item>
                  <Card onClick={() => handleCLick(item.id)} className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.picture_medium}
                        title={item.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.nb_fan} Fans
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {item.nb_album} Albums
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>)
            })
          }
        </Grid>
      </Grid>
    </Grid>
  );
}






























