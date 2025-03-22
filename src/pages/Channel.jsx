import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'
import { CiBadgeDollar, CiMedal, CiRead } from 'react-icons/ci'
import VideoSearch from '../components/videos/VideoSearch'

const Channel = () => {
    const { channelId } = useParams()
    const [channelDetail, setChannelDetail] = useState()
    const [channelVideo, setChannelVideo] = useState([])
    const [loading, setLoading] = useState(true)
    const [nextPageToekn, setNextPageToken] = useState(null)

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(
                    `channels?part=snippet,statistics&id=${channelId}`
                )
                setChannelDetail(data.items[0])

                const videosData = await fetchFromAPI(
                    `search?channelId=${channelId}&part=snippet%2Cid&order=date`
                )
                setChannelVideo(videosData?.items)
                setNextPageToken(videosData?.nextPageToekn)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchResults()
    }, [channelId])

    const loadMoreVideo = async () => {
        if (nextPageToekn) {
            const videosData = await fetchFromAPI(
                `search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToekn}`
            )
            setChannelVideo((prevVideos) => [
                ...prevVideos,
                ...videosData.items,
            ])
            setNextPageToken(videosData?.nextPageToekn)
        }
    }

    const channelPageClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <Main title='유튜브 채널' description='유튜브 채널페이지 입니다.'>
            {channelDetail && (
                <section id='channel' className={channelPageClass}>
                    <div className='channel__header'>
                        <div className='circle'>
                            <img
                                src={channelDetail.snippet.thumbnails.high.url}
                                alt={channelDetail.snippet.title}
                            />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>
                            {channelDetail.snippet.description}
                        </p>
                        <div className='info'>
                            <span>
                                <CiBadgeDollar />
                                {channelDetail.statistics.subscriberCount}
                            </span>
                            <span>
                                <CiMedal />
                                {channelDetail.statistics.videoCount}
                            </span>
                            <span>
                                <CiRead />
                                {channelDetail.statistics.viewCount}
                            </span>
                        </div>
                        <div className='channel__video video__inner search'>
                            <VideoSearch videos={channelVideo} />
                        </div>
                        <div className='channel__more'>
                            {nextPageToekn && (
                                <button onClick={loadMoreVideo}>더 보기</button>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </Main>
    )
}

export default Channel
