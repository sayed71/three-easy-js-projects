let data = [
  {
    name: "Michael",
    age: "38",
  },
  {
    name: "Dwight",
    age: "32",
  },
  {
    name: "Jim",
    age: "27",
  },
  {
    name: "Pam",
    age: "26",
  },
  {
    name: "Angela",
    age: "30",
  },
  {
    name: "Phyllis",
    age: "40",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");
