import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import '../nav/navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '2%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
  },
  button: {
    margin: theme.spacing(1, 1, 1, 1),
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ButtonAppBar({ onSearch }) {
  const classes = useStyles();
  const [searchInput, setInput] = useState('')

  function handleClick() {
    onSearch(searchInput);
  }

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className="navBarName" variant="h6">
            Music App
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setInput(e.target.value)}
            />
          </div>
          <Button 
          variant="contained"
           color="primary"
            size="small"
             className={classes.button}
             onClick={handleClick}>
              <SearchIcon fontSize="small"/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
