import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {useState, useEffect} from 'react'
import { faAngular } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import cppLogo from '../../assets/images/cpp.svg'
import cLogo from '../../assets/images/c.svg'
import matlabLogo from '../../assets/images/matlab.svg'
import gitLogo from '../../assets/images/git.svg'
import ACPCLogo from '../../assets/images/acpc-logo-short.svg'
import qtLogo from '../../assets/images/qt.svg'
import Loader from 'react-loaders'

// Still needing to work on the right half of the about me page.

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx = {15}
                    />
                </h1>
                <p>
                    Undergraduate Computer Science and Mechanical Engineering student at
                    Adelaide University. 
                </p>
                <p>
                    Involved on campus in the Adelaide Competitive
                    Programming Club.
                </p>
                <p>
                    Active outside of university in numerous work experiences and projects.
                </p>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About