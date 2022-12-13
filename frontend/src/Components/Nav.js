import React from 'react';

const nav = (props) => {

    return ( 
        <nav>
            <h1 className='mar-tb-0'><a className='title-link' href="/">MERN</a></h1>
            <p className='mar-b-0'>(MongoDB Express React Node)</p>
            {/* <a href="/create" className='nav-link'>Create</a> */}
        </nav>
    );
    
}
 
export default nav;