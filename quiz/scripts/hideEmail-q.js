/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = [
  "mary@northeastern.edu",
  "ari@khoury.northeastern.edu",
  "jk_neu.edu",
  "jk@neu.edu",
  "jsned@",
  "ai_me@mugar.northeastern.edu",
];
window.onload = function hideEmail() {
  const list = document.getElementById("emails");
  list.innerHTML = "";

  for (const email of emails) {
    symbolLocation = email.indexOf("@");
    const updated = email
      .split("")
      .map((char, i) => {
        return i < symbolLocation ? "*" : char;
      })
      .join("");
    list.innerHTML += "<li>" + updated + "</li>";
    console.log(updated);
  }
};
