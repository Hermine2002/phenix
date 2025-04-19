import { Link } from 'react-router-dom'
import './FirstPartWhatWeDoSection.css'

const FirstPartWhatWeDoSection = () => {
  return (
    <section className="fone-what">
      <div className="fone-what">     
      <h2 className="main_text">
        Our What We Do
        <br />
        <Link className="home">HOME </Link>
        <span className="ss"> | </span>
        <Link className="pers"> Our What We Do</Link>
      </h2>
      <div className="fakeShadow"></div>
      </div>
    </section>
  )
}

export default FirstPartWhatWeDoSection