function calculate() {
  var year = document.getElementById("year").value;
  year = Number(year)
  var age = 2026 - year;
  document.getElementById("ageOutput").textContent = age;
}
