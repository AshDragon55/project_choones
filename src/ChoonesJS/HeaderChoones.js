import React from 'react';
import logo from './ChoonesIMG/play.png';
import avatar from './ChoonesIMG/avatar3.png';

const HeaderChoones=()=>{
    return(
        <div className='head1'>
            <img className='logo-img' src={logo} alt='other'/>
            <h1 className='text-gradient'>Choones</h1>
            <img className='avatar-img' src={avatar} alt='other'/>
        </div>

    );
}
export default HeaderChoones;