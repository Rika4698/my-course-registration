/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const[allCourses,setCourses]= useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const fixedCredit = 20;

useEffect(() => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setCourses(data));
},[])
const handleSelectCourse = (course) => {
  const isExit =  selectedCourses.find((item) => item.id == course.id);
  let count = course.credit;
  let price = course.Price;
  if(isExit){
    return alert("Already selected this course. ");
  }else{
    selectedCourses.forEach((item) => {
        count += item.credit;
        price += item.Price;
    });
    const totalRemaining = fixedCredit - count;
    if(count > 20 && totalRemaining < 0){
        alert("Total credit is 20 and no remaining credit ");
    }
    else{
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setTotalPrice(price);
        setSelectedCourses([...selectedCourses,course]); 
    }
   
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
                 selectedCourses={selectedCourses}
                 remaining={remaining}
                 totalCredit={totalCredit}
                 totalPrice={totalPrice}>
                    
                 </Cart>

            </div>
            </div>
        </div>
    );
};

export default Home;