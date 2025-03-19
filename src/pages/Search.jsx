import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/videos/VideoSearch'

const Search = () => {
    const { searchId } = useParams()
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        )
            .then((res) => res.json())
            .then((result) => {
                // console.log(result)
                setVideos(result.items)
            })
            .catch((err) => console.log(err))
    }, [searchId])

    return (
        <Main title='유튜브 검색' description='유튜브 검색 결과 페이지입니다.'>
            <section id='searchPage'>
                <div className='video__inner search'>
                  <VideoSearch videos={videos}/>
                </div>
            </section>
        </Main>
    )
}

export default Search
