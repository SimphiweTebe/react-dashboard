import './hero.scss';

import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    <h4 className='title-welcome'><span>Welcome,</span> User</h4>
    <div className='hero'>
      <div className="hero__content">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="hero__cta">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit at eius voluptatibus. Distinctio, quae.</p>
        <Link to="/" className='button purple'>Watch Now</Link>
      </div>
    </div>
    </>
  )
}

export default Hero