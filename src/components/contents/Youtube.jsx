import React from 'react'
import { youtubeText } from '../../data/youtube'
import { Link } from 'react-router-dom'

const Youtube = () => {
  return (
    <section id='youtube'>
      <div className="video__inner">
        {youtubeText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play_icon">
              <Link to={`/video/${video.channelId}`}>
                <img src={video.img} alt={video.title}/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Youtube