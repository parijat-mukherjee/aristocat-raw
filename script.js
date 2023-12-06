document.addEventListener("DOMContentLoaded", function () {
  const cloudLayer = document.querySelector(".cloud");
  const silhouetteLayer = document.querySelector(".silhouette");
  const buildingOneLayer = document.querySelector(".building-one");
  const buildingTwoLayer = document.querySelector(".building-two");
  const buildingThreeLayer = document.querySelector(".building-three");
  const buildingMain = document.querySelector(".building-main");
  const totalHeight = document.body.scrollHeight;
  const stopScrollAt = totalHeight / 1.8;

  window.addEventListener("scroll", function () {
    const scrollPosition = Math.min(window.scrollY, stopScrollAt);

    if (scrollPosition < stopScrollAt) {
      // Cloud layer dips below silhouette layer
      const cloudSpeed = 0.2;
      const cloudYPos = scrollPosition * cloudSpeed;
      cloudLayer.style.transition = "transform 0.3s ease";
      cloudLayer.style.transform = `translateY(${cloudYPos}px)`;

      // Silhouette layer remains fixed
      silhouetteLayer.style.transition = "none";

      // Building layers scroll up with slight speed differences
      const buildingSpeeds = [0.1, 0.2, 0.3, 0.4];
      buildingSpeeds.forEach((speed, index) => {
        const yPos = -scrollPosition * speed;

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
});
