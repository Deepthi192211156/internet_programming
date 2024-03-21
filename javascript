// Example of dynamically generating HTML
const petList = document.getElementById('pet-list');

data.forEach(pet => {
  const petElement = document.createElement('div');
  petElement.classList.add('pet');

  const nameElement = document.createElement('h2');
  nameElement.textContent = pet.name;

  const breedElement = document.createElement('p');
  breedElement.textContent = `Breed: ${pet.breed}`;

  // Append elements to the pet container
  petElement.appendChild(nameElement);
  petElement.appendChild(breedElement);

  // Append the pet container to the pet list
  petList.appendChild(petElement);
});
