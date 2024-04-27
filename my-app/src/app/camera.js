// Camera.tsx
"use client"
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 540,
    facingMode: 'environment'
};

const Camera = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
 

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
        // Navigate to the next page when the "Capture" button is clicked
      
    };

    const onUserMedia = (e) => {
        console.log(e);
    };

    return (
        <>
            <Webcam
                ref={webcamRef}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
                mirrored={true}
            />
        
              
              <button onClick={capturePhoto}>Capture</button>
           
           
         
            <button onClick={() => setUrl(null)}>Refresh</button>

            {url && (
                <div>
                    <img src={url} alt="Screenshot" />
                </div>
            )}
        </>
    );
};

export default Camera;
