import React from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app_videos'>
          <Video
              url='https://player.vimeo.com/external/431438996.sd.mp4?s=8bd2ddfd7e686e705eb0778633934ae06d8e53a6&profile_id=164&oauth2_token_id=57447761'
              channel="Bunny"
              description='Macbook Air to new windows editing beast'
              song="I am a windows pc"
              likes={239}
              shares={345}
              messages={890}
          />
          <Video
              url='https://www.bing.com/videos/search?q=small+video&&view=detail&mid=4906ECB236746016D1934906ECB236746016D193&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dsmall%2Bvideo%26FORM%3DHDRSC3'
              channel='Bunny'
              description="cat walking "
              song='pretty cat'
              likes={250}
              shares={233}
              messages={58}

          />
      </div>  
    </div>
  );
}

export default App;
