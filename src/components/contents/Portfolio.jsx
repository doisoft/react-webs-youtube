import React from 'react'
import { portfolioText } from '../../data/portfolio'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className='video__inner'>
                {portfolioText.map((pp, key) => (
                    <div className='video' key={key}>
                      <div className="video__thumb play__icon">
                        <Link to={`/video/${pp.videoId}`}>
                          <img src={pp.img} alt={pp.title}/>
                        </Link>
                      </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
