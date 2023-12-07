document.addEventListener("DOMContentLoaded", function () {
  const cloudLayer = document.querySelector(".cloud");
  const silhouetteLayer = document.querySelector(".silhouette");
  const buildingOneLayer = document.querySelector(".building-one");
  const buildingTwoLayer = document.querySelector(".building-two");
  const buildingThreeLayer = document.querySelector(".building-three");
  const buildingMain = document.querySelector(".building-main");

  let totalHeight = document.body.scrollHeight;
  let windowHeight = window.innerHeight;
  let stopScrollRatio = 1.8; //based on trial-and-error

  function updateVariables() {
    totalHeight = document.body.scrollHeight;
    windowHeight = window.innerHeight;
    stopScrollAt = totalHeight / stopScrollRatio;
  }

  updateVariables(); // Initial setup

  window.addEventListener("scroll", function () {
    const scrollPosition = Math.min(window.scrollY, stopScrollAt);
    const scrollPercentage = scrollPosition / windowHeight;

    if (scrollPosition < stopScrollAt) {
      const cloudSpeed = 0.2;
      const cloudYPos = scrollPosition * cloudSpeed;
      cloudLayer.style.transition = "transform 0.3s ease";
      cloudLayer.style.transform = `translateY(${cloudYPos}px)`;

      silhouetteLayer.style.transition = "none";

      const buildingSpeeds = [0.1, 0.15, 0.2, 0.25];
      buildingSpeeds.forEach((speed, index) => {
        const yPos = -scrollPercentage * windowHeight * speed;

        switch (index) {
          case 0:
            buildingOneLayer.style.transition = "transform 0.3s ease";
            buildingOneLayer.style.transform = `translateY(${yPos}px)`;
            break;
          case 1:
            buildingTwoLayer.style.transition = "transform 0.3s ease";
            buildingTwoLayer.style.transform = `translateY(${yPos}px)`;
            break;
          case 2:
            buildingThreeLayer.style.transition = "transform 0.3s ease";
            buildingThreeLayer.style.transform = `translateY(${yPos}px)`;
            break;
          case 3:
            buildingMain.style.transition = "transform 0.3s ease";
            buildingMain.style.transform = `translateY(${yPos}px)`;
            break;
          default:
            break;
        }
      });
    } else {
      window.scrollTo(0, stopScrollAt);
    }
  });

  window.addEventListener("resize", function () {
    updateVariables();
  });
});
