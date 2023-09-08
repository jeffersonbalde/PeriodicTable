const  periodicTable = [
    {
        mass: 1.008,
        "element-name": "Hydrogen",
        category: "Nonmetal",
        symbol: "H"
    },
    {
        mass: 4.003,
        "element-name": "Helium",
        category: "Noble gas",
        symbol: "He"
    }
]

const table1 = document.querySelector(".table1");

const GENERATE_GRIDS = (amount, className, table) => {
    for(let i = 0; i < amount; i++){
        let element = document.createElement('div');
        element.className = className;
        table.appendChild(element);
    }
}

GENERATE_GRIDS(90, 'element element_one', table1);

const element_1 = document.querySelectorAll('.element_one');

const display = (min, max, table, offset=0) => {
    for(let i = min; i < max; i++){
        let index = i + offset; 
        let atomic_number = index + 1;
        let base = periodicTable[index];
        table[i].innerHTML = `
            <span class="atomic_number">${atomic_number}</span>
            <span class="mass">${base.mass}</span
            <span class="symbol">${base.symbol}</span>
            <span class="name">${base['element-name']}</span>
        `
    }
}

display(0,56,element_1)