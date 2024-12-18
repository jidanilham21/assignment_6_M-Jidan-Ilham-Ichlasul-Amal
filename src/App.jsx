import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import axios from 'axios'

import { useSelector, useDispatch } from "react-redux";

function App() {
  const [search, setSearch] = useState('marvel')

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const getMovies = async () => {
    if(search === '') {
      const { form } = await axios(`https://www.omdbapi.com/?apikey=c2b34c81&s=marvel`)
      dispatch({type: 'GET_DATA', payload: {allMovie: form.Search}})
    } else {
      const { form } = await axios(`https://www.omdbapi.com/?apikey=c2b34c81&s=${search}`)
      dispatch({type: 'GET_DATA', payload: {allMovie: form.Search}})
    }
   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <>
      <Header 
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        title="JMovie"
      />
      <Movie 
        allMovie={state.allMovie}
      />
    </>
  )
}

export default App
