import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [filmsId, setFilmsId] = useState('');
  const [search, setSearch] = useState({});
  const [amine, setAmine] = useState();

  const fetchApi = async() => {
    try {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films`)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    fetchApi();
  },[])

  const searchApi = async() => {
    try {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${filmsId}`)
    
      setSearch(response.data)
    } catch (error) {
      console.log('error')
    }
  }    
  
  useEffect(() => {
    searchApi();
  }, [filmsId])
  

  return (
    <div className='box'>
      <input type='text' value={filmsId} alt='amine' 
      onChange={(event) => setFilmsId(event.target.value)}/>
    
    

      { !filmsId ? <div >
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.image}
            onClick={() => setAmine(user)} />
        </li>
      ))} 
      <div className='box-detail'>
        {amine?.id}
        {amine?.title}
        {amine?.original_title}
        {amine?.original_title_romanised}
        {amine?.movie_banner}
        {amine?.description}
        {amine?.director}
        {amine?.producer}
        {amine?.release_date}
        {amine?.running_time}
        {amine?.rt_score}
        {amine?.people}
        {amine?.species}
        {amine?.locations}
        {amine?.vehicles}
        {amine?.url}
      </div>
      </div> :  <div>

        {<img src={search.image} alt='amine-img'/> }
      <div className='detail'>
        {search.id}
        {search.title}
        {search.original_title}
        {search.original_title_romanised}
        {search.movie_banner}
        {search.description}
        {search.director}
        {search.producer}
        {search.release_date}
        {search.running_time}
        {search.rt_score}
        {search.people}
        {search.species}
        {search.locations}
        {search.vehicles}
        {search.url}

      </div>
      </div>  
      }
    </div>
  );
}

export default App;
