/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "bonus", "focus", "genius"];
let extensions = [".com", ".net", ".us", ".es"];

for (i = 0; i < pronoun.length; i++) {
  for (j = 0; j < adj.length; j++) {
    for (l = 0; l < noun.length; l++) {
      for (m = 0; m < extensions.length; m++) {
        if (noun[l].includes("us") && extensions[m] == ".us") {
          console.log(
            pronoun[i] + adj[j] + noun[l].slice(0, -2) + extensions[m]
          );
        } else {
          console.log(pronoun[i] + adj[j] + noun[l] + extensions[m]);
        }
      }
    }
  }
}
