const  animalPointsJSON  = require("../data/animalPoints.json")

const { nanoid } = require("nanoid");

const inform = console.log;

// Animals Controller
function edit(animals, animalId, updatedAnimal) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals[index].id = animalId;
    animals[index].name = updatedAnimal;
    animals[index].points = animalPointsJSON[updatedAnimal];
    inform("Animal successfully updated");
    return animals;
  } else {
    inform("Animal not found. No action taken");
    return animals;
  }
}

function destroy(animals, animalId) {
  const index = animals.findIndex((animal) => animal.id === animalId);
  if (index > -1) {
    animals.splice(index, 1);
    inform("Animal successfully removed from collection");
    return animals;
  } else {
    inform("Animal not found. No action taken");
    return animals;
  }
}

function create(animals, animalName) {
  const animal = {
    name: animalName,
    id: nanoid(4),
    points: animalPointsJSON[animalName],
  };
  animals.push(animal);
  return animals;
}

// animalsController.js

function index(animals) {
    return animals.map((animal) => animal.id + " " + animal.name).join("\n");
  }

// animalController.js
function show(animals, animalId) {
    const animal = animals.find((animal) => animal.id === animalId);
    return animal.id + " " + animal.name + " " + animal.points + " points";
  }
  module.exports = { create,index,show,destroy,edit }