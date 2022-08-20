import React from 'react';
import popsmoke from './ChoonesIMG/popsmoke.jpg';
import rihanna from './ChoonesIMG/rihanna.jpg';
import jcole from './ChoonesIMG/jcole.jpg';
import {useState, useEffect} from 'react';
const CLIENT_ID="2389f6b1020f48a9bddf4050a103e4d7";
const CLIENT_SECRET="44c15351760b4cdd890d7bc63c966dd8";


const Musicboard=() =>{
  

  const[searchInput, setSearchInput]=useState('');
  const[accessToken,setAccessToken]=useState('')
  const[albums,setAlbums]=useState([])

  useEffect(()=>{
    var authParameters={
      method: 'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret='+ CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result=>result.json())
    .then(data=>setAccessToken(data.access_token))
  },[]);

  async function searchNow() {
    console.log('Search for '+ searchInput);

    var searchParameters={
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ accessToken

      }
    }

    var artistID=await fetch('https://api/spotify.com/v1/search?q=' + searchInput +'&type=artist',searchParameters)
    .then(response =>response.json())
    .then(data=>{return data.artists.items[0].id})
  
  
  console.log('Artist ID is ' +artistID)
  var returnedAlbums =await fetch('https://api.spotify.com/v1/artists/'+artistID+'/albums'+'?include_groups=album&market=US&limit=50')
     .then(response =>response.json())
     .then(data =>{
      console.log(data);
      setAlbums(data.items);
     })

}



    
    return(
        <div>
        <div className='box'>
            <input className='searchbar' type='search' placeholder='   What is your Mood today?'
            onKeyPress={e=>{
                if (e.key=='Enter'){
                    searchInput();
                }
            }}
            onChange={e =>setSearchInput(e.target.value)}/>
            <input type='button' onClick={searchNow} value='Enter' className='search'/>
        </div>
        <h1>Mood: Hype</h1>
        <img src = {popsmoke} alt='other' className='img1'/>
        <img src={rihanna} alt='other ' className='img1'/>
        <img src={jcole} alt='other ' className='img1'/>
        </div>
    )
}
export default Musicboard;