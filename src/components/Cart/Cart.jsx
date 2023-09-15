/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({selectedCourses, remaining, totalCredit}) => {
    return (
        <div className='c-container'>
            <h1 className='title'>Credit Hour Remaining {remaining} hr</h1>
            <hr />
            <h1 className='title-2'>Course Name</h1>
            {selectedCourses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
            <hr />
            <h3 className='title-3'>Total Credit Hour : {totalCredit} </h3>
            <hr />
            <h2 className='title-4'>Total Price : </h2>
        </div>
    );
};

export default Cart;