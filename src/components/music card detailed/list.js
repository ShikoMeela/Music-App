import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TrackList({ list }) {
    const classes = useStyles();
  return (
    <div>
      {
          list !== undefined ?
          <List className={classes.root}>
          {list.map((value, index) => {
            return (
              <ListItem key={value.id} role={undefined} dense button>
                <ListItemIcon>
                  {index + 1}
                </ListItemIcon>
                <ListItemText primary={value.title} />
              </ListItem>
            );
          })}
        </List>
        : null
      }
    </div>
  );
}
