function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let numExercises = 2;
// Defining the list of possible exercises
let exercises = ["Press-ups", "Squats", "Sit-ups", "Crunches", "Tricep Dips", "Leg raises", "Plank", "Bicycle"]
// This will fill with the chosen exercises to ensure no duplicates
let chosenExercises = [];
// Randomly chooses 2 exercises
for (i = 0; i < numExercises; i++){
    let randIndex = getRandomInt(7); //Change the 7 to the length of the exercise list - 1 if needed
    if (chosenExercises.includes(exercises[randIndex])){
        i --
    } else {
    chosenExercises.push(exercises[randIndex])
    }
};
// Finds all the <p> items that have the class 'exercise'
let exerciseItems = document.querySelectorAll('.exercise');
// Defines the innerHTML for each with an exercise from the chosen list
exerciseItems.forEach((p, index) => {
    p.innerHTML = chosenExercises[index] 
});

console.log("Exercises done");


let numStretches = 4;
// Defining the list of possible stretches
let stretches = ["Touch toes (seated-hurdle position)", "Touch toes (standing)", "Touch toes (seated, both legs)", "Touch toes (seated, wide leg)", "Happy monk stretch","Glutes (sqaure)", "Glutes (leg back)", "Hip flexor (kneel)", "Quad (Kneel)", "Quad (standing)", "Groin (standing, wide)", "Calf (standing)", "Calf (pike)", "Back (back, toe to arm)", "Back (front, toe to arm)", "Back (front, push torso up)", "Hand to back, push down on elbow", "Neck (all directions)"];
// This will fill with the chosen stretches to ensure no duplicates
let chosenStretches = [];
// Randomly chooses 4 stretches
for (j = 0; j < numStretches; j++){
    let randIndex = getRandomInt(18); //Change the 18 to the length of the stretches list - 1 if needed
    if (chosenStretches.includes(stretches[randIndex])){
        j --
    } else {
    chosenStretches.push(stretches[randIndex])
    console.log(chosenStretches);
    }
};
// Finds all the <p> items that have the class 'stretch'
let stretchItems = document.querySelectorAll('.stretch');
// Defines the innerHTML for each with a stretch from the chosen list
stretchItems.forEach((p, index) => {
    p.innerHTML = chosenStretches[index]
});


// Now we need to set some random durations for each thing

let exerciseDurations = document.querySelectorAll('.exercise-duration');
exerciseDurations.forEach((p, index) => {
    p.innerHTML = getRandomInt(30)
});

let stretchDurations = document.querySelectorAll('.stretch-duration');
stretchDurations.forEach((p, index) => {
    p.innerHTML = getRandomInt(30)
});