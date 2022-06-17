document.getElementById('dragSqr').addEventListener('dragstart',dragstart_handler)
//document.getElementById('mealname').addEventListener('blur',blur_handler)
//document.getElementById('target').addEventListener('dragover',dragover_handler)
//document.getElementById('target').addEventListener('drop',drop_handler)
//document.getElementById('target').addEventListener('dragexit',dragexit_handler)

document.querySelectorAll('.dropzone').forEach(x=>{x.addEventListener('dragover',dragover_handler)})
document.querySelectorAll('.dropzone').forEach(x=>{x.addEventListener('drop',drop_handler)})
document.querySelectorAll('.dropzone').forEach(x=>{x.addEventListener('dragexit',dragexit_handler)})

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", document.getElementById('mealname').value);
    //console.log(ev.target.id)
}

function dragover_handler(ev) {
    ev.preventDefault();
    const dragOverTarget = ev.target.id;
    ev.dataTransfer.dropEffect = "copy";
    document.getElementById(ev.target.id).classList.add('dragover')
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text/plain");
    document.getElementById(ev.target.id).innerText = data;
    document.getElementById(ev.target.id).classList.remove('dragover')
    //console.log(data)
    //ev.target.appendChild(document.getElementById(data));
}

function dragexit_handler(ev){
    ev.preventDefault();
    document.getElementById(ev.target.id).classList.remove('dragover')
}