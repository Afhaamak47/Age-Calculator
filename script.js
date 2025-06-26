const input = document.getElementById("dob");
const display = document.getElementById("age");
function calculateAge() {
  const dob = new Date(input.value);
  const currentDate = new Date();
  let ageyear = currentDate.getFullYear() - dob.getFullYear();
  let ageMonth = currentDate.getMonth() - dob.getMonth();
  let ageDay = currentDate.getDate() - dob.getDate();
  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (ageMonth < 0) {
    ageyear--;
    ageMonth += 12;
  }
  display.textContent = `Your age is ${ageyear} years, ${ageMonth} months, and ${ageDay} days.`;
}
