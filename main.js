let applicationsArr = [
  {
    title: "Truck Route",
    image: "images/bill.png",
    text:
      "Helps trucks find the best departure time by tracking traffic data every 5 mins and telling you exactly when traffic tends to start getting bad.",
    link: "http://iamleonhardt.com/truckRoute"
  },
  {
    title: "Effect Maker",
    image: "images/image.jpg",
    text:
      "Developers can find effects they want, customize them, and then get the code to create them.",
    link: "http://iamleonhardt.com/effectMaker"
  },
  {
    title: "Student Grade Table",
    image: "images/image.jpg",
    text:
      "Classic CMS system to track students progress. Add, Delete, Edit, Filter and Sort students.",
    link: "http://iamleonhardt.com/sgt"
  },
  {
    title: "Date Finder",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/C9_hackathon"
  },
  {
    title: "Calculator",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/calculator"
  },
  {
    title: "Memory Match",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/memory_match"
  },
  {
    title: "Tic Tac Toe",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/ticTacToe"
  },
  {
    title: "Argentum Age",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/hero"
  },
  {
    title: "Hero",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/hero/"
  },
  {
    title: "Spaceships",
    image: "images/image.jpg",
    text: "text",
    link: "http://iamleonhardt.com/spaceships"
  },
  {
    title: "Drums",
    image: "images/image.jpg",
    text: "Drumkit - use keyboard to play drums",
    link: "http://iamleonhardt.com/drums"
  },
  {
    title: "Hacker Solitaire",
    image: "images/image.jpg",
    text: "Use L33t Haxor skills to defeat evil corp in a solitaire like game",
    link: "http://iamleonhardt.com/HackerSolitaire"
  }
];

// Main Template
let applicationTemplate = `
<div class="nameComponent">
    <h1 class="name">i<span class="secondaryColor">am</span>leonhardt</h1>
    <h4>| ux designer | web developer | lover | fighter |</h4>
</div>
<div class="aboutComponent">My name is Bill and I've worked in Software Development for the last 2 years.</div>

`;

// Application Template
applicationsArr.forEach(app => {
  applicationTemplate += `
<div class="card">
    <div class="cardImage" style="background: linear-gradient(rgba(40,40,40,0.1), rgba(40,40,40,.6)), url(${
      app.image
    });">
        <h2 class="cardTitle">${app.title}</h2>
    </div>
    <p class="cardText">${app.text}</p>
    <div class="cardActionBar">
        <button class="cardButton" click="detailsModal()">Details</button>
        <button class="cardButton" click="liveProject(app)">Demo</button>
    </div>
</div>
`;
});

applicationTemplate += `
<footer>Handcrafted by Bill Leonhardt</footer>
`;

document.getElementById("content").innerHTML = applicationTemplate;
