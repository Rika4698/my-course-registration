/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const[allCourses,setCourses]= useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

useEffect(() => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setCourses(data));
},[])
const handleSelectCourse = (course) => {
  const isExit =  selectedCourses.find((item) => item.id == course.id);
  console.log(isExit);
  if(isExit){
    return alert("alredy booked");
  }else{
    setSelectedCourses([...selectedCourses,course]);
  }
    
    };
    //  selectedCourses.find((item) => item.id == course.id)};



    return (
        <div>
            <h1 className='course'>Course Registration</h1>
            <div className='home-container'>
            <div className='card-container'>
               {allCourses.map((course) => (
                 <div key={course.id} className='card'>
                    <div className='card-img'>
                        <img className='photo' src={course.image} alt="" />
                        </div>
                        <h2>{course.title}</h2>
                        <p className='detail'><small>{course.description}</small></p>
                        <div className='info-container'>
                            
                            <img className='info-img' src={course.icon1} alt="" />
                            <p className='info-detail'>Price : {course.Price}</p>
                            
                            <br />
                            <img className='info-img' src={course.icon2} alt="" />
                            <p className='info-detail'>Credit  : {course.credit}hr </p>
                            
                        </div>
                        <button  onClick={() => handleSelectCourse(course)}
                className="card-btn"
              >
                Select
              </button>

                    

                 </div>
               ))}
            </div>
            <div >
                <Cart
                 selectedCourses={selectedCourses}></Cart>

            </div>
            </div>
        </div>
    );
};

export default Home;