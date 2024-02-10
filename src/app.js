/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log();
};

let pronoun = ["the", "our", "her", "his", "their", "your"];
let adj = ["great", "big", "ourstanding", "amazing", "bad", "ugly"];
let noun = ["jogger", "racoon", "station", "dress", "hardware", "lightning"];
let domain = [".com", ".net", ".es", ".cl", ".us", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let h = 0; h < adj.length; h++) {
    for (let g = 0; g < noun.length; g++) {
      for (let l = 0; l < domain.length; l++) {
        console.log(pronoun[i] + adj[h] + noun[g] + domain[l]);
      }
    }
  }
}
