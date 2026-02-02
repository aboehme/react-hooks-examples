import { useState, useEffect } from "react";

export default function DelayedGreeting() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("Hello!");
    }, 2000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>{message}</div>;
}
