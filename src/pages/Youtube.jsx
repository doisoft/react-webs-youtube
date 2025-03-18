import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/videos/VideoCard'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }, [])

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <Main title='유튜브 클론' description='유튜브 클론 페이지입니다.'>
            <section id='youtubePage' className={youtubePageClass}>
                <div className='video__inner'>
                    <VideoCard videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube
