import React, { useState } from 'react';

const RecordAudio = () => {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);

  const handleStartRecording = () => {
    setRecording(true);
    setAudioChunks([]);
    const mediaRecorder = new MediaRecorder(window.stream);
    mediaRecorder.start();
    mediaRecorder.addEventListener('dataavailable', event => {
      setAudioChunks(audioChunks => [...audioChunks, event.data]);
    });
    mediaRecorder.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      audioUrl(audioUrl);
    });
  };

  const handleStopRecording = () => {
    setRecording(false);
    mediaRecorder.stop();
  };

  return (
    <div>
      <button onClick={handleStartRecording}>Start Recording</button>
      {recording && <button onClick={handleStopRecording}>Stop Recording</button>}
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
  );
};

export default RecordAudio;