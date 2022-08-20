import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =()=>{
    return(

        <div className='navbar'>
            <ul>
                <li><Link to='/moods'>Moods</Link></li>
                <li><Link to='/musicboard'>Search</Link></li>
                <li><Link to='/'>Saved Playlist</Link></li>
                <li><Link to='/' >Now Playing</Link></li>
                <li><Link to='/'>Settings</Link></li>
                <li><Link to='/'>Logout</Link></li>

            </ul>
            
            
        </div>
    )
}
export default Navbar;