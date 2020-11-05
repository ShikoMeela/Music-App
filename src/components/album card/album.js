import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.main,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function MediaCard({ albums }) {
  const classes = useStyles();
  return (
     <div className={classes.root}>
     <GridList cellHeight={300} className={classes.gridList}>
       {albums.map((album) => (
         <GridListTile key={album.id}>
           <img src={album.cover_big} alt={album.title} width="150"/>
           <GridListTileBar
             title={album.title}
             subtitle={<span>{album.release_date}</span>}
           />
         </GridListTile>
       ))}
     </GridList>
   </div>
  );
}