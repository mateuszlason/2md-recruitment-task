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
    setDate(new Date().toLocaleDateString("pl-PL"));
  };

  useEffect(() => {
    getTime();
    const handle = setInterval(getTime, 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <>
      <span>
        <time>{time}</time>
      </span>
      <span>
        <time>{date}</time>
      </span>
    </>
  );
};

export default Time;
