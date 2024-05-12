import React from 'react';
import FlatironCert from '../assets/FlatironCert.jpg';
import ManagementDegree from '../assets/ManagementDegree.jpg';

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Education</h1>
      <div className="flex flex-col items-center mt-8">
        <img
          src={FlatironCert}
          alt="Flatiron Certificate"
          className="w-auto h-102 object-cover rounded-lg shadow-lg hover:scale-110 ease-in duration-200"
        />
        <p className="text-center text-gray-700 mt-4">
          Certificate of Completion <br /> 
          Flatiron School, Denver, 2023
        </p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <img
          src={ManagementDegree}
          alt="Management Certificate"
          className="w-auto h-102 object-cover rounded-lg shadow-lg hover:scale-110 ease-in duration-200"
        />
        <p className="text-center text-gray-700 mt-4">
          Bachelor of Science in Management <br /> 
          California State University of Northridge, 2016
        </p>
      </div>
    </div>
  );
};

export default Education;