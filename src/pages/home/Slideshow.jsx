import React, { useState, useEffect } from 'react';
import "./style.css"

const imgUrls = [
    "https://images.unsplash.com/photo-1603903918933-b4db92870a0e?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527519135413-1e146b552e10?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?q=80&w=4074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518352724948-729151797553?q=80&w=3748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1500885168199-dc1fde1d8177?q=80&w=4176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgUrls.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                className="h_bg-image order-1 order-lg-2 h-100 "
                style={{ backgroundImage: `url(${imgUrls[currentIndex]})` }}
            ></div>
        </>
    );
};

export default Slideshow;
