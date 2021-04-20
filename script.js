var tooltip = document.querySelector(".map-tooltip");
var colors = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];
var contents = {};
for (var i = 1; i <= 10; i++) {
  contents["tooltip" + i] =
    'tooltip <b style="color:' + colors[i] + '">' + i + "</b>";
}

// iterate throw all `path` tags
[].forEach.call(document.querySelectorAll("path.HI-map"), function (item) {
  // attach click event, you can read the URL from a attribute for example.
  item.addEventListener("click", function () {
    window.open("http://google.co.il");
  });

  // attach mouseenter event
  item.addEventListener("mouseenter", function () {
    tooltip.innerHTML = contents[item.getAttribute("data-tooltip")];
    tooltip.style.display = "block";
  });

  item.addEventListener("mousemove", function (e) {
    tooltip.style.top = e.clientY + "px";
    tooltip.style.left = e.clientX + "px";
  });

  // when mouse leave hide the tooltip
  item.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });
});
