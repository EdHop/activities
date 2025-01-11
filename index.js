// Autoload the navbar and footer from seperate html files

fetch('./public/navbar.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(doc => {
    document.querySelector('.nav-container').innerHTML = doc;
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});

fetch('./public/footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
})
.then(doc => {
    document.querySelector('.footer').innerHTML = doc;
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});






// Random integer for the exercise/stretch selection
function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max-min)) + min;
}

let numExercises = 2;
// Defining the list of possible exercises
let exercises = ["Press-ups", "Squats", "Sit-ups", "Crunches", "Tricep Dips", "Leg raises", "Plank", "Bicycle"]
// This will fill with the chosen exercises to ensure no duplicates
let chosenExercises = [];
// Randomly chooses 2 exercises
while (chosenExercises.length < numExercises){
    let randIndex = getRandomInt(exercises.length, 0);
    if (!chosenExercises.includes(exercises[randIndex])) {
        chosenExercises.push(exercises[randIndex]);
    }
}

// Finds all the <p> items that have the class 'exercise'
let exerciseItems = document.querySelectorAll('.exercise');
// Defines the innerHTML for each with an exercise from the chosen list
exerciseItems.forEach((p, index) => {
    p.innerHTML = chosenExercises[index] 
});

let numStretches = 4;
// Defining the list of possible stretches
let stretches = ["Touch toes (seated-hurdle position)", "Touch toes (standing)", "Touch toes (seated, both legs)", "Touch toes (seated, wide leg)", "Happy monk stretch","Glutes (sqaure)", "Glutes (leg back)", "Hip flexor (kneel)", "Quad (Kneel)", "Quad (standing)", "Groin (standing, wide)", "Calf (standing)", "Calf (pike)", "Back (back, toe to arm)", "Back (front, toe to arm)", "Back (front, push torso up)", "Hand to back, push down on elbow", "Neck (all directions)"];
// This will fill with the chosen stretches to ensure no duplicates
let chosenStretches = [];
// Randomly chooses 4 stretches
while (chosenStretches.length < numStretches) {
    let randIndex = getRandomInt(stretches.length, 0);
    if (!chosenStretches.includes(stretches[randIndex])) {
        chosenStretches.push(stretches[randIndex]);
    }
}
// Finds all the <p> items that have the class 'stretch'
let stretchItems = document.querySelectorAll('.stretch');
// Defines the innerHTML for each with a stretch from the chosen list
stretchItems.forEach((p, index) => {
    p.innerHTML = chosenStretches[index]
});

// Now we need to set some random durations for each thing

let exerciseDurations = document.querySelectorAll('.exercise-duration');
let a = 0;
exerciseDurations.forEach((p, index) => {
    if (chosenExercises[a] === "Plank"){
        p.innerHTML = getRandomInt(60,30);
    } else if (chosenExercises[a] === "Bicycle" ){
        p.innerHTML = getRandomInt(60,30);
    }
    else {
        p.innerHTML = getRandomInt(25,10);
    };
    a ++;
});

let stretchDurations = document.querySelectorAll('.stretch-duration');
stretchDurations.forEach((p, index) => {
    p.innerHTML = getRandomInt(20,10)
});