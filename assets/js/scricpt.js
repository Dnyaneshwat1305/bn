
  const searchInput = document.getElementById("searchInput");

  const extraTexts = [
    "Bike",
    "Car",
    "Properties",
    "Electronics & Appliances"
  ];

  let index = 0;

  setInterval(() => {
    searchInput.placeholder = "Search " + extraTexts[index];
    index = (index + 1) % extraTexts.length;
  }, 2000); // 2 seconds


  document.querySelector('.login-btn').addEventListener('click', function() {
    document.querySelector('.login-dropdown').classList.toggle('active');
});
