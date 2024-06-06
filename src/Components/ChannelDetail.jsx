import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { FetchFromApi } from '../utils/FetchFromApi'

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState()
  const [videos,setVideos]=useState(null)
  const {id} =useParams();

  useEffect(()=>{
    FetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data)=> setChannelDetail(data?.items[0]));

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=> setVideos(data?.items));
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,119,1) 37%, rgba(0,212,255,1) 100%)',
          height: '300px',
          zIndex:10,
        }}/>

        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        <Box display='flex' p='2'>
          <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
        </Box>
    
      </Box>
    </Box>
  )
}

export default ChannelDetail
