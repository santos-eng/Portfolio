import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'; 
import AnimatedLetters from '../AnimatedLetters';
import {useState} from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 't', 'o', 's']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}> </span>
                <span className={`${letterClass} _16`}>J</span>
                <span className={`${letterClass} _17`}>o</span>
                <span className={`${letterClass} _18`}>s</span>
                <span className={`${letterClass} _19`}>i</span>
                <span className={`${letterClass} _20`}>a</span>
                <span className={`${letterClass} _21`}>h</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass = {letterClass} strArray={nameArray} idx ={22} />
                <br/>
                <AnimatedLetters letterClass = {letterClass} strArray={jobArray} idx ={27} />
                </h1>
                <h2>Computer Science and Mechanical Engineering Student</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
        </div>
    )
}

export default Home