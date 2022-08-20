import React from 'react';
import Navbar from './Navbar';
import HeaderChoones from './HeaderChoones';
import Musicboard from './Musicboard';

const ResultsPage = ()=>{
    return(
        <div>
            <HeaderChoones/>
            <div className='main'> 
               <Navbar/>
               <div>
                  <Musicboard/>
               </div>
               
            </div>
        </div>

    );
}
export default ResultsPage;