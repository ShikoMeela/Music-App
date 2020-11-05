import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div style={{ marginLeft: '50%'}} className={classes.root}>
      <CircularProgress />
    </div>
  );
}