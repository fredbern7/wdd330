li.innerHTML = `
<div class="one-hike">
  <button class='btn'>Go back</button>
  <div class="one-hike-container">
  <img class="img" src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
      <h2 class="hike-h2">${hike.name}</h2>
      <div class="one-info">
          <h3 class="hike-h3">Distance</h3>
          <p>${hike.distance}</p>
          <h3 class="hike-h3">Difficulty</h3>
          <p>${hike.difficulty}</p>
          <h3 class="hike-h3">Description</h3>
          <p>${hike.description}</p>
          <h3 class="hike-h3">How to get there</h3>
          <p>${hike.directions}</p>
      </div>
  </div>
</div>
`;