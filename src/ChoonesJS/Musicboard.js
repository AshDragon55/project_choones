import React from 'react';
import popsmoke from './ChoonesIMG/popsmoke.jpg';
import rihanna from './ChoonesIMG/rihanna.jpg';
import jcole from './ChoonesIMG/jcole.jpg';


const Musicboard=() =>{
    return(
        <div>
        <h1>Mood: Hype</h1>
        <img src = {popsmoke} alt='other' className='img1'/>
        <img src={rihanna} alt='other ' className='img1'/>
        <img src={jcole} alt='other ' className='img1'/>
        </div>
    )
}
export default Musicboard;