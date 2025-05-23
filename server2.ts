setInterval(() => {
  // fetch('http://127.0.0.1:3000/')
  fetch('http://host.docker.internal:3009/')
    .then((res) => res.text())
    .then((res) => console.log(res));
}, 2000);
