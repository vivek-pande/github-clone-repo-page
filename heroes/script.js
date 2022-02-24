const actualData = [
  {
    heading: "heroes",
    subHeading: "heroes description goes here",
    skills: ["javascript", "angular", "react", "html"],
  },
  {
    heading: "heroes",
    subHeading: "heroes description goes here",
    skills: ["javascript", "angular", "react", "html", "css", "python", "jhkc"],
  },
  {
    heading: "heroes",
    subHeading: "heroes description goes here",
    skills: ["javascript", "angular", "html"],
  },
  {
    heading: "heroes",
    subHeading: "heroes description goes here",
    skills: ["javascript", "angular", "react", "html"],
  },
];

let section = document.createElement("section");
section.className = "section";


actualData.forEach((element) => {
  let div = document.createElement("div");
  div.className = "container";
  section.appendChild(div)

  let heading = document.createElement("h1");
  heading.innerHTML = element.heading;
  let subHeading = document.createElement("p");
  subHeading.innerHTML = element.subHeading;
  let navBar = document.createElement("nav");
  navBar.className = "skill";

  function createSkillItem(a) {
    let span = document.createElement("span");
    span.innerHTML = a;
    navBar.appendChild(span);
  }

  element.skills.forEach((x) => {
    createSkillItem(x);
  });

  div.appendChild(heading);
  div.appendChild(subHeading);
  div.appendChild(navBar);
  console.log('navBar :>> ', navBar);

});


document.body.appendChild(section);


