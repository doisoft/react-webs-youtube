import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { websiteText } from '../data/website'
import VideoCard from '../components/videos/VideoCard'

const Website = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100)
  }, []);

  const websitePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title="웹표준" description="웹표준 페이지 입니다.">
      <section id='websitePage' className={websitePageClass}>
        <h2>😄 웹사이트의 기초는 이 강의로~</h2>
        <div className='video__inner'>
          <VideoCard videos={websiteText} />
        </div>
      </section>
    </Main>
  )
}

export default Website