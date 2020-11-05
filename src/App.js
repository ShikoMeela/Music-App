import React, { useReducer } from 'react';
import Nav from '../src/components/nav/navbar';
import ArtistCard from '../src/components/music card/Artist';
import ArtistDetails from '../src/components/music card detailed/ArtistDetailed';
import Album from '../src/components/album card/album';
import Loader from '../src/components/assets/Loader';
import Container from '@material-ui/core/Container';
import './App.css';

const ACTIONS = {
  SEARCH: 'search',
  LOADING: 'loading',
  GET_ARTIST: 'get-artist',
  GET_ALBUMS: 'get-albums',
  GET_PLAYLIST: 'get-playlist',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, status: action.payload }
    case ACTIONS.SEARCH:
      return { ...state, status: false, data: action.payload, identifier: 'search' }
    case ACTIONS.GET_ARTIST:
      return { ...state, status: false, artist: action.payload, identifier: 'details' }
    case ACTIONS.GET_ALBUMS:
      return { ...state, status: false, albums: action.payload, identifier: 'details' }
    case ACTIONS.GET_PLAYLIST:
      return { ...state, status: false, tracks: action.payload, identifier: 'details' }
    default:
      return { ...state }
  }
}

function App() {
  const initialState = {
    status: false,
    error: null,
    data: [],
    artist: {},
    albums: [],
    tracks: [],
    identifier: '',
}

  const [state, dispatch] = useReducer(reducer, initialState)
function getSearchResults(input) {
      const fetchData = async () => {
      dispatch({ type: ACTIONS.LOADING, payload: true })
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${input}&index=0&limit=15&output=json`)
        const data = await response.json()
        if (data !== undefined) {
          dispatch({ type: ACTIONS.LOADING, payload: false })
          dispatch({ type: ACTIONS.SEARCH, payload: data.data })
        }      
      }

    fetchData();
}

function getArtist(id) {
  const fetchData = async () => {
    dispatch({ type: ACTIONS.LOADING, payload: true })
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
      const data = await response.json()
      if (data !== undefined) {
        dispatch({ type: ACTIONS.LOADING, payload: false })
        dispatch({ type: ACTIONS.GET_ARTIST, payload: data })
      }
      
    }

  fetchData();
}

function getAlbums(id) {
  const fetchData = async () => {
    dispatch({ type: ACTIONS.LOADING, payload: true })
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
      const data = await response.json()
      if (data !== undefined) {
        dispatch({ type: ACTIONS.LOADING, payload: false })
        dispatch({ type: ACTIONS.GET_ALBUMS, payload: data.data })
      }      
    }

  fetchData();
}

function getTracks(id) {
  const fetchData = async () => {
    dispatch({ type: ACTIONS.LOADING, payload: true })
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
      const data = await response.json()
      if (data !== undefined) {
        dispatch({ type: ACTIONS.LOADING, payload: false })
        dispatch({ type: ACTIONS.GET_PLAYLIST, payload: data.data })
      }      
    }

  fetchData();
}

  function handleSearch(input) {
    getSearchResults(input)
  }

  function handleArtist(id) {
    getArtist(id);
    getTracks(id);
    getAlbums(id);
  }

  return (
    <div className="App">
      <Nav onSearch={handleSearch} />
      { state.status ?
       <Container maxWidth="lg">
        <Loader style={{ textAlign: "center"}}/>
        </Container>
        : 
        <Container maxWidth="lg">
          {state.identifier === "search" ? 
        <ArtistCard getArtist={handleArtist} artist={state.data !== undefined ? state.data : []} />
        : state.identifier === "details" ?
        <div>
            <ArtistDetails
             artist={state.artist !== undefined ? state.artist : []}
             tracks={state.tracks !== undefined ? state.tracks : []}
             /> <br />
            <h3 style={{ color: 'white' }}>Albums</h3><hr />
            <Album albums={state.albums !== undefined ? state.albums : []} />
        </div>
        : 
        <div style={{textAlign: "center", color: "white"}}>
          <h2>Welcome to Music App</h2>
          <h5>Search for artist music above ....</h5>
        </div> }
      </Container>
    }
    </div>
  );
}

export default App;
