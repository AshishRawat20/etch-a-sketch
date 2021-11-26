
const container = document.querySelector(".container");

function createDivs(numOfGrids){
    for(let i=0; i<numOfGrids; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<numOfGrids; j++){
            const div = document.createElement("div");
            div.classList.add("box");
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

let size = -1;

function clearGrid(){
    if(size == -1){
        return;
    }
    container.innerHTML = '';
    createDivs(size);
    const boxes = document.querySelectorAll(`.box`);

    boxes.forEach(box=>{
        box.addEventListener(`mouseover`, function(e){
            e.target.style.backgroundColor = "black";
        })
    })
}

function game(){
    container.innerHTML = '';
    size = prompt("Enter size of grid");
    container.style.backgroundColor = `white`;
    createDivs(size);
    const boxes = document.querySelectorAll(`.box`);

    boxes.forEach(box=>{
        box.addEventListener(`mouseover`, function(e){
            e.target.style.backgroundColor = "black";
        })
    })


}



