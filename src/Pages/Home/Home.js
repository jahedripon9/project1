import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='my-10'>
            <Link to='/login'><button className='bg-yellow-200 py-6 px-6'>Login</button></Link> 
            <Link to='/Register'><button className='bg-yellow-200 py-6 px-6'>Register</button></Link>
            <img src="https://images.pexels.com/photos/4473400/pexels-photo-4473400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
    );
};

export default Home;