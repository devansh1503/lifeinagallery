import React from 'react';
import { images } from './image';
import Album from './Album';

function Content() {
  return (
    <div className='content-main'>
      {images.map((item, key) => (
        <div className='content-child' key={key}>
          <Album item={item} />
          <div>
            <h3 className='album-title gradient-text'>{item.album_title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
