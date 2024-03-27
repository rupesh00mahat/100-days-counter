setInterval(function () {
  const daysLeft = document.querySelector(`.no-of-days`);

  const startDate = new Date();
  const endDate = new Date('2024-07-05');
  
  // Calculate the difference in milliseconds
  const differenceInMs = endDate - startDate;
  
  // Convert milliseconds to days
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
  
  daysLeft.innerHTML = differenceInDays;
}, 1000);
