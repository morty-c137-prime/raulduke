import React from 'react';
import ReactPlayer from 'react-player'
import style from '../styles/Index.module.css'

const Index = () => {

  return (
    <section className={style.root}>
      <div className='header'>
        <h6>🝰🜂🝲</h6>
        <p className='main'><a href='https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ'>rick álvarez</a></p>
        <h6 className='sub'><span className='flip'>Filmmaker</span>, <span className='flip'>Programmer</span>, <span className='flip'>Net Artist</span>,  <span className='flip'>Lover</span></h6>
      </div>
      <div className={style.column}>
        <div className='label'>
            <h3>○ Archive ○</h3>
        </div>  
        <ReactPlayer  url='https://youtu.be/SXnGUEzP0p8' />
        <ReactPlayer url='https://youtu.be/IWqAFtIGrUI' />
        <ReactPlayer url='https://youtu.be/CO70NVlY0Gw' />
        <ReactPlayer url='https://youtu.be/z_O_n9QNYKo' />
        <ReactPlayer url='https://youtu.be/OiXkIOF98A0' />
      </div>
    </section>
  );
};

export default Index;
