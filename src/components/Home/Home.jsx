/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const[allCourses,setCourses]= useState([]);
useEffect(() => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setCourses(data));
},[])



    return (
        <div>
            <h1>Course Registration</h1>
            <div className='home-container'>
            <div className='card-container'>
               {allCourses.map((course) => (
                 <div key={course.id} className='card'>
                    <div className='card-img'>
                        <img src={course.image} alt="" />
                        <h2>{course.title}</h2>
                        <p><small>{course.description}</small></p>
                        <div>
                            <img src={course.icon1} alt="" />
                            <p>Price : {course.Price}</p>
                            <img src={course.icon2} alt="" />
                            <p>Credit  : {course.credit}hr </p>
                        </div>

                    </div>

                 </div>
               ))}
            </div>
            <div className='cart'>

            </div>
            </div>
        </div>
    );
};

export default Home;