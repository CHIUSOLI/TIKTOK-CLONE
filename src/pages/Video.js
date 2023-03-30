import React, { useRef, useState }  from 'react'
import "./Video.css"

function Video() {

    const videoRef = useRef(null)
    const[play, setPlay] = useState(false)

       function handdleStart(){

        if(play){
            videoRef.current.play() 
            setPlay(false)

        } else {
            videoRef.current.play() 
            setPlay(true)
        }

    }

  return (
    <div className='video'>
        
        <video      
          className='video_player'
          ref={videoRef}
          onClick={handdleStart}
          loop
          src="https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/oMAQkeD7VJvcnxTURbzBMmEKQJD2BMyUek6YI0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3438&bt=1719&cs=0&ds=3&ft=_RwJrBiTq8Zmo5.7Cc_vjjDP8AhLrus&mime_type=video_mp4&qs=0&rc=ZjRnOmQ4ZGZkOmc8OTM3OEBpM3hqeDg6ZnhmajMzNzczM0BjXi5fMTYxNmExYzJeX2FjYSNuMGFfcjRvXmZgLS1kMTZzcw%3D%3D&btag=80000&expire=1680156135&l=20230330000035FD5DD0456D3A7981A928&ply_type=2&policy=2&signature=c9a6d36c4a94efad0ba7a23315304f81&tk=tt_chain_token"
          
        >
        </video>
    </div>
  )
}

export default Video