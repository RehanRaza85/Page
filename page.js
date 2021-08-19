let myChart = document.getElementById("my-chart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontColor = "darkBlue";
Chart.defaults.global.defaultFontSize = 12;

let massChart = new Chart(myChart, {
  type: "doughnut", // bar horizontalbar pie line doughnut raddar colorarea
  data: {
    labels: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Kolkata"],
    datasets: [
      {
        label: "population(2011)",
        data: [12442373, 11007835, 8436675, 6809970, 4486679],
        backgroundColor: ["green", "coral", "cyan", "brown", "red"],
        borderWidth: 1,
        borderColor: "lightGrey",
        hoverBorderWidth: 3,
        hoverBorderColor: "white",
      },
    ],
  },
  options: {
    cutoutPercentage: 50,
    rotation: Math.PI * 0.5,
    animation: {
      animateScale: true,
    },
    title: {
      display: true,
      text: "Largest cities in India",
      fontSize: 25,
    },
    legend: {
      display: true,
      position: "left",
      labels: {
        fontColor: "red",
      },
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltips: {
        enabled: true,
      },
    },
  },
});

const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId);

  if (toggle && nav && bodypd && headerpd) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");

      toggle.classList.toggle("bx-x");

      bodypd.classList.toggle("body-pd");

      headerpd.classList.toggle("body-pd");
    });
  }
};

showNavbar("header-toggle", "nav-bar", "body-pd", "header");

const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));
