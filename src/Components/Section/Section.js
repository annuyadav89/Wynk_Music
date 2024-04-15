import React from 'react'
import MusicTile from '../MusicTile/MusicTile'


export default function Section(props) {
  return (<>
         <div>{props.title}</div>
       <MusicTile title = "top Charts" />
       <MusicTile title = "Weekly Top 20: English" />
       <MusicTile title = "Wynk Top 100" />
       <MusicTile title = "Romance Top 20" />
       <MusicTile title = "Weekly Top 20" />
  </>
 
  )
}
