let array = [25,38,35,4,24,32];
let max = 0;

let myCar = new Object();
myCar.type = "sport";
myCar.make = "ford";
myCar.model = "mustang";
myCar.year = 1969;

let fernanda = {
    eyes: 'blue',
    skin: 'white',
    height: 1.6

}


for(let i = 0; i < array.length; i++){
    if(array[i]>max){
        max = array[i]
    }
}

function showArray(array){
    array.forEach(element => {
        console.log(element)
    });
}

const showObject = (object) =>{
    for (const value in object) {
        if (Object.hasOwnProperty.call(object, value)) {
            const element = object[value];
            console.log(Object.hasOwn('eyes'));
            console.log(element)
        }
    }
}
showObject(fernanda)
// showArray(array)

