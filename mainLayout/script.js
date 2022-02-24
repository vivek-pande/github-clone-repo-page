const user = {
  name: "vivek pandey",
  bio: "This is a bio",
  location: "uttarakhand",
  twitterLink: "https://twitter.com/",
  imageUrl: "https://avatars.githubusercontent.com/u/97983914?v=4",
  repositories: [
    {
      heading: "heroes",
      subHeading: "heroes description goes here",
      skills: ["javascript", "angular", "react", "html"],
    },
    {
      heading: "heroes",
      subHeading: "heroes description goes here",
      skills: [
        "javascript",
        "angular",
        "react",
        "html",
        "css",
        "python",
        "jhkc",
      ],
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
  ],
};

let mainContainer = document.createElement("div");
mainContainer.className = "container1";

let userImage = document.createElement("img");
userImage.className = "image";
userImage.src = user.imageUrl;
userImage.alt = "person image";

let userBioBox = document.createElement("div");
userBioBox.className = "bio";

let userWholelist = document.createElement("ul");

let userlist = document.createElement("li");

let userName = document.createElement("h1");
userName.innerHTML = user.name;
let userBio = document.createElement("p");
userBio.innerHTML = user.bio;

let spanTag1 = document.createElement("span");
let spanTag2 = spanTag1.cloneNode(true)

let locationImage = document.createElement("img");
locationImage.className = "location-img";
locationImage.src = "../img/location img.png";
locationImage.alt = "location image";

let userLocation = document.createElement("p");
userLocation.innerHTML = user.location;

let spanTag3 = document.createElement("span");
let spanTag4 = spanTag3.cloneNode(true)




document.querySelector('.main').appendChild(mainContainer);
mainContainer.appendChild(userImage);
mainContainer.appendChild(userBioBox);
userBioBox.appendChild(userWholelist);
userWholelist.appendChild(userlist);

userlist.appendChild(userName);
userWholelist.appendChild(userlist);
userlist.appendChild(userBio);
userWholelist.appendChild(userlist);
userlist.appendChild(spanTag1);
userlist.appendChild(spanTag2);
userlist.appendChild(spanTag3);
userlist.appendChild(spanTag2);


spanTag1.appendChild(locationImage);
spanTag2.appendChild(userLocation);

let gitLink = document.createElement("a");
gitLink.className = "link git";
userBioBox.appendChild(gitLink);

let gitImage = document.createElement("img");
gitImage.className = "github-img";
gitImage.src = "../img/github image.png";
gitImage.alt = "github";

actualData = user.repositories;

let section = document.createElement("section");
section.className = "section";







actualData.forEach((element) => {
  let div = document.createElement("div");
  div.className = "container";
  section.appendChild(div);

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
});

document.querySelector(".main").appendChild(section);

