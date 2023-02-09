let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');



myExtrasInput.addEventListener('change', addExtra);


function addExtra() {
    let selectedValue = myExtrasInput.value
    myExtras.push(selectedValue)
    updateExtras()
}




function updateExtras() {
        let myExtrasLast = myExtras.slice(-1)
        myExtrasListElement.innerHTML += `<p>${myExtrasLast}</p>`
}





// function updateExtras () {
//     let myExtrasNew = myExtras.map( (x) => {
//         return x 
//     })
// };


// const myExtrasInput2 = document.getElementById('extraUdstyr2');

// myExtrasInput2.addEventListener('change', addExtra2);



// function addExtra2 () {
//     let delSelect = myExtrasInput2.value
//     let deletedSel = myExtras.filter(delFunc(delSelect))



// };

// function delFunc (delSel) {

// };