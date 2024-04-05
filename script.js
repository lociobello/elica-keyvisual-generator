document.querySelectorAll(".group").forEach(function (group) {
  group.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons within the same group
      group.querySelectorAll("button").forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      button.classList.add("active");
    });
  });
});

document.querySelectorAll(".group").forEach(function (group) {
  group.querySelectorAll(".gradient").forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove 'active-gradient' class from all gradient buttons within the same group-row-gradient
      group.querySelectorAll(".gradient").forEach(function (btn) {
        btn.classList.remove("active-gradient");
      });

      // Add 'active-gradient' class to the clicked gradient button
      button.classList.add("active-gradient");
    });
  });
});
