const animateTimer = () => {
  const timeboard = document.getElementsByClassName('timeboard')[0];
  const clocktime = document.getElementsByClassName('clocktime')[0];

  let time = 0;
  let clockTime = 0;

  let timer = setInterval(() => {
    if (time >= 100)
      clearInterval(timer);

    timeboard.style.width = `${time}%`;
    clocktime.innerHTML = clockTime !== 40 ? `${clockTime}'` : `45'`;

    time += 5;
    clockTime += 2;
  }, 500);
};

animateTimer();
