import React from 'react';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'


function AboutUs() {
  return (
    <div>
      <Header />
        <dir className="about_us">
            <ul>
                <li>About Us</li>
            </ul>
        </dir>
      <Main />
    </div>
  )
}

export default AboutUs
