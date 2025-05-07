import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let currentPos = { x: 0, y: 0 };
    let targetPos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
    };

    const animate = () => {
      currentPos.x += (targetPos.x - currentPos.x) * 0.1;
      currentPos.y += (targetPos.y - currentPos.y) * 0.1;
      setPosition({ x: currentPos.x, y: currentPos.y });
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="follower"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="inner-square" />
    </div>
  );
};

export default MouseFollower;