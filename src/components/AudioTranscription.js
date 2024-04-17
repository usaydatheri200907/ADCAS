import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const AudioTranscription = () => {
    const [socket, setSocket] = useState(null);
    const [transcription, setTranscription] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    let mediaRecorder;
    let audioChunks = [];

    useEffect(() => {
        // Create WebSocket connection
        const socket = io('http://localhost:3001/realtime');
        setSocket(socket);

        // Listen for messages from the server
        socket.on('message', (message) => {
            setTranscription(prevTranscription => prevTranscription + ' ' + message);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.addEventListener('dataavailable', event => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                    if (socket) {
                        socket.emit('audio', event.data);
                    }
                }
            });

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            setIsRecording(false);

            // Combine and encode audio chunks
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            audioChunks = [];

            // Optionally, you can upload the audioBlob to your server for storage or further processing
        }
    };

    return (
        <div>
            <h1>Real-time Audio Transcription</h1>
            <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
            <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
            <p>{transcription}</p>
        </div>
    );
};

export default AudioTranscription;
