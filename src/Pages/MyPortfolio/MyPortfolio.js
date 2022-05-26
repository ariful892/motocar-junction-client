import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import profile from '../../assests/profile.jpg';


const MyPortfolio = () => {
    return (
        <div className='my-12'>
            <h2 className='text-primary text-3xl mb-12'>My Portfolio</h2>
            <div>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={profile} alt='Arif' />
                    </div>
                </div>
                <h4 className='font-bold text-xl'>Ariful Islam</h4>
                <p>West Gomdandi, Boalkhali, Chittagong</p>
                <p>Email: arifuli00892@gmail.com</p>
                <p>Phone: 01033282300</p>
            </div>
            <div className='text-left mx-5 lg:mx-40 mt-8'>
                <div>
                    <h4 className='font-bold'>Educational Background:</h4>
                    <ul className='mt-2'>

                        <li><FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> BSC in Computer Science and Engineering from Premier University with CGPA 3.35/4.00</li>

                        <li> <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> HSC from Hazera-Taju Degree College with GPA 3.60/5.00</li>

                        <li> <FontAwesomeIcon icon={faArrowAltCircleRight}> </FontAwesomeIcon> SSC from West Gomdandi Union High School with GPA 4.94/5.00</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h4 className='font-bold'>Technologies:</h4>
                    <ul className='mt-2'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>Javascript</li>
                        <li>React JS</li>
                        <li>Node JS</li>
                        <li>Express JS</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h4 className='font-bold'>My Best Three Projects:</h4>
                    <ul className='mt-2'>
                        <li className='text-xl font-bold'>1. MotoZone   <a className='btn btn-active btn-link btn-sm' href='https://assignment11-motozone.web.app'>Visit Site</a></li>
                        <li className='text-xl font-bold'>2. Programming Fundamental   <a className='btn btn-active btn-link btn-sm' href='https://programming-fundamental-b1ee0.web.app/'>Visit Site</a></li>
                        <li className='text-xl font-bold'>3. Computer Hut  <a className='btn btn-active btn-link btn-sm' href='https://computer-hut-ariful892.netlify.app/'>Visit Site</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;