// this component will house the main content of the application.
// Parent component to Courses, Hotels, Cars, and Dates

import React from 'react';

import Courses from './Columns/Courses';
import Hotels from './Columns/Hotels';
import Cars from './Columns/Cars';
import Dates from './Columns/Dates';




const Body: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 md:gap-8 p-4 md:p-8 md:overflow-none
                        mb-8 md:mb-0">
            <Courses />
            <Hotels />
            <Cars />
            <Dates />

            
        </div>
    );
};

export default Body;