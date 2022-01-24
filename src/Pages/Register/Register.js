import React, { useState } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useNavigate();
    const{user, userRegister, authError} = useAuth();

    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        userRegister(loginData.email, loginData.password, history);
        e.preventDefault();
        
    }
    
    return (
        <div>
            <div className="container mx-auto px-4">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
                <div className="lg:max-w-lg lg:ml-36 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5 uppercase">Register</h2>
                    <form  onSubmit={handleLoginSubmit}>
                    <div className="relative mb-4">
                        <label htmlFor="name"  className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="name"  onBlur={handleOnBlur}  name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email"  onBlur={handleOnBlur}  name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    <div className="relative mb-4">
                        
                        <label htmlFor="password"  className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" onBlur={handleOnBlur}  name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        <label htmlFor="password"    className="leading-7 text-sm text-gray-600">Re-type Password</label>
                        <input type="password"   onBlur={handleOnBlur} name="password2"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    {user?.email && <p className="success">Register successfully!</p>}
                        {authError && <p className="error">{authError}</p>}
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Submit</button>
                        
                    </form>
                    <Link to='/login'><button className="text-lg text-gray-500 mt-3">Log In Now</button></Link>
                    
                    
                    </div>
                </div>
            </section>
            </div>
  
        </div>
    );
};

export default Register;