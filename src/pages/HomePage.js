import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import QuestionSection from '../components/QuestionSection';
import Comparation from '../components/Comparation';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-lg mx-auto mt-10 p-4">
        <h2 className="text-3xl font-bold text-center">Host Your Home on Airbnb</h2>
        <Form />        
      </div>
      <Comparation/>
      <QuestionSection/>
      <Footer />
    </div>
  );
};

export default HomePage;
