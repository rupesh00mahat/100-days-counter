setInterval(function () {
  const daysLeft = document.querySelector(`.no-of-days`);

  const feb9_2024 = new Date('2024-02-09');
  const may19_2024 = new Date('2024-05-19');
  
  // Calculate the difference in milliseconds
  const differenceInMs = may19_2024 - feb9_2024;
  
  // Convert milliseconds to days
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
  
  daysLeft.innerHTML = differenceInDays;
}, 1000);
