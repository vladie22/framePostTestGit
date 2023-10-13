let array = [25,38,35]
let max = 0

for(let i = 0; i < array.length; i++){
    if(array[i]>max){
        max = array[i]
    }
}
alert(max)