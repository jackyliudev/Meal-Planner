// Retrieve elements from the DOM
const addIngBtn = document.getElementById('addingredientbtn');
const addToCal = document.getElementById('addtocalendar');
const ingList = document.getElementById('inglist');

// Add eventlistener to the buttons
addIngBtn.addEventListener('click',addNewfield);
addToCal.addEventListener('click',addToCalendar);

// Keep count of number of ingredients
let ingCt = 6;

// Keep track of the currently selected meal 
let selectedMeal = document.getElementById('bfSun');

// Add Dragstart to the drag buttons
document.getElementById('dragSqr').addEventListener('dragstart',dragstartHandler)

// Add event listeners to the cells of the table
document.querySelectorAll('.dropzone').forEach(x=>{
    x.addEventListener('dragover',dragoverHandler);
    x.addEventListener('drop',dropHandler);
    x.addEventListener('dragexit',dragexitHandler);
    x.addEventListener('click',selectMeal);
})

// Function to define the event for drag start
function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", document.getElementById('mealname').value);
    //console.log(ev.target.id)
}

// Function to define the event for drag over the cell
function dragoverHandler(ev) {
    ev.preventDefault();
    const dragOverTarget = document.getElementById(ev.target.id);
    ev.dataTransfer.dropEffect = "copy";
    // Remove the highlighted effect for the selected meal
    selectedMeal.classList.remove('selectedmeal')

    // Add the highlighted effect for drag over meal
    dragOverTarget.classList.add('dragover');
}

// Function to define the event after item is dropped in the drop zone
function dropHandler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    selectedMeal = document.getElementById(ev.target.id);
    selectedMeal.innerText = data;
    // Remove the dragover effect and add the selected meal effect
    selectedMeal.classList.remove('dragover');
    selectedMeal.classList.add('selectedmeal');
}

// Function to define the event after exiting the drag area
// Drop area is defined by the class dropzone in html
function dragexitHandler(ev){
    ev.preventDefault();
    document.getElementById(ev.target.id).classList.remove('dragover');
    selectedMeal.classList.add('selectedmeal');
}

// Function for adding new field for ingredients list
function addNewfield(ev){
    //Create new HTMl elements
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');
    const newInput = document.createElement('input');

    // Set the attribute for the input element
    newInput.setAttribute('type','text')
    newInput.setAttribute('id',`ing${ingCt}`)
    newInput.setAttribute('placeholder',`Ingredient ${ingCt}`)

    // Create the Text for the ingredient input field
    const txtContent = document.createTextNode(`Ingredient ${ingCt}: `);

    // Create html element and add to the ingredient list
    newSpan.append(txtContent)
    newDiv.append(newSpan)
    newDiv.append(newInput)
    ingList.appendChild(newDiv)

    // Increase the ingredient count
    ingCt++;
}

// Function for selecting meal in the calendar
function selectMeal(ev){
    selectedMeal.classList.remove('selectedmeal');
    selectedMeal = document.getElementById(ev.target.id);
    selectedMeal.classList.add('selectedmeal');
}

// Function for the button that adds the meal to the calendar
function addToCalendar(ev){
    const data = document.getElementById('mealname').value;
    selectedMeal.innerText = data;
}