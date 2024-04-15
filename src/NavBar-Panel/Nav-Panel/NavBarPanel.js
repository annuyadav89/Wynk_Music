import React from 'react'
import All from '../All'
import TrendingNow from '../TrendingNow'
import OldSongs from '../OldSongs'
import NewSongs from '../NewSongs'
import TopArtist from '../TopArtist'
import MoodsAndGenre from '../MoodsAndGenre'
import Podcast from '../Podcast'
import TopPlayList from '../TopPlayList'
import TopAlbums from '../TopAlbums'
import './navpanel.css'

export default function NavBarPanel() {
  return (
    <div className='nav-panel'>
      <div className='nav-panel-items'>
        <All />
        <TrendingNow />
        <OldSongs />
        <NewSongs />
        <MoodsAndGenre />
        <TopAlbums />
        <TopArtist />
        <TopPlayList />
        <Podcast />
        
       </div>
    </div>
  )
}
