import React, { useEffect, useState } from "react";

const ProgressBar = ({ duration, onComplete, isPaused }) => {
  const [progress, setProgress] = useState(0);
 

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [isPaused, onComplete, duration]);

  useEffect(() => {
    if (!isPaused) setProgress(0);
  }, [onComplete,isPaused]);

  return (
    <div style={{ width: "100%", height: "6px", background: "#ccc", borderRadius: "10px" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "#ff7b00",
          borderRadius: "10px",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};

export default ProgressBar;
