import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {
    return (
        <>
        <div className="container-contact-page">
            <div className="text-zone">
                <p>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/josiah-santos'>
                        Click here to contact on linked in:
                        <FontAwesomeIcon icon={faLinkedin} color = "#ffd700"/>
                    </a>
                </p>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact