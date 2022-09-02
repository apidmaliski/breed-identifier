function displayBreed(breed) {
  console.warn("display", breed);

  var breedHTML = "";
  breed.forEach(function (breed) {
    console.info(breed);
  });
}

function loadBreed() {
  fetch("data/breed.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (breed) {
      displayBreed(breed);
    });
}

loadBreed();
