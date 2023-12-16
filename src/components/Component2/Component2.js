import React, { useState, useEffect } from 'react';

function Component2() {
  const [serverStatus, setServerStatus] = useState('Stopped');
  const [cpuUsage, setCpuUsage] = useState(0);
  const [ramUsage, setRamUsage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (serverStatus === 'Running') {
        setCpuUsage(Math.floor(Math.random() * 101));
        setRamUsage(Math.floor(Math.random() * 101));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [serverStatus]);

  const handleStart = () => {
    setServerStatus('Running');
  };

  const handleStop = () => {
    setServerStatus('Stopped');
    setCpuUsage(0);
    setRamUsage(0);
  };

  const handleRestart = () => {
    if (serverStatus === 'Running') {
      setServerStatus('Restarting...');
      setTimeout(() => setServerStatus('Running'), 2000);
    }
  };

  return (
    <div>
      <h1>Server Management</h1>
      <p>Server Status: {serverStatus}</p>
      <p>CPU Usage: {cpuUsage}%</p>
      <p>RAM Usage: {ramUsage}%</p>
      <button onClick={handleStart}>Start Server</button>
      <button onClick={handleStop}>Stop Server</button>
      <button onClick={handleRestart}>Restart Server</button>
    </div>
  );
}

export default Component2;