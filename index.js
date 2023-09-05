const table1 = document.querySelector(".table1");

const GENERATE_GRIDS = (amount, className, table) => {
    for(let i = 0; i < amount; i++){
        let element = document.createElement('div');
        element.className = className;
        table.appendChild(element);
    }
}

GENERATE_GRIDS(90, 'element element_one', table1);