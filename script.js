fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });