const sideNav = document.getElementsByClassName("sidebar");
    const toggleBtn = document.getElementById("arrow");
    
    let isNavOpen = false;
    
    toggleBtn.addEventListener("click", () => {
      if (isNavOpen) {
        sideNav.style.transform = "translateX(-100%)";
      } else {
        sideNav.style.transform = "translateX(0)";
      }
      isNavOpen = !isNavOpen;
    });