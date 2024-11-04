// VideoPlayer.js
import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase.js'; // Import storage from your Firebase config

const VideoPlayer = ({ videoPath }) => {
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    // Create a reference to the file in Firebase Storage
    const videoRef = ref(storage, videoPath);

    // Get the download URL
    getDownloadURL(videoRef)
      .then((url) => {
        setVideoURL(url); // Save the URL to state
      })
      .catch((error) => {
        console.error('Error fetching video URL:', error);
      });
  }, [videoPath]);

  return (
    <div>
      {videoURL ? (
        <video width="600" controls>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
