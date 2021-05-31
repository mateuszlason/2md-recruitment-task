import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const getTime = () => {
    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    };

    setTime(new Date().toLocaleTimeString(undefined, timeOptions));
    setDate(new Date().toLocaleDateString("en-CA"));
  };

  useEffect(() => {
    getTime();
    const handle = setInterval(getTime, 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <>
      <span className="font-bold">
        <time>{date}</time>
      </span>
      <span className="font-bold lg:mb-0 mb-2">
        <time>{time}</time>
      </span>
    </>
  );
};

export default Time;
