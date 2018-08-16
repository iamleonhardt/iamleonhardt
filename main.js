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
        <button class="cardButton" ng-click="detailsModal()">Details</button>
        <button class="cardButton" ng-click="liveProject(app)">Demo</button>
    </div>
</div>
`;
});

applicationTemplate += `
<footer>Handcrafted by Bill Leonhardt</footer>
`;

document.getElementById("content").innerHTML = applicationTemplate;
