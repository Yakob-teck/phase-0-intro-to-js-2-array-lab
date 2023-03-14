
const cats=["Milo", "Otis", "Garfield"];
/*function name(){
     cats.length = 0;
     return cats.push(); 
}*/

function destructivelyAppendCat(name){
   
    return cats.push(name);
    
}

function destructivelyPrependCat(name){
  
  return cats.unshift(name);
  
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
    function destructivelyRemoveFirstCat(name){

        return cats.shift(name);
}

function appendCat(name){
    const copyCats = [...cats, "Broom"];
return copyCats;
}

function prependCat(name){

    const copyCats= ["Arnold", ...cats]; 
    return copyCats;
    
}
function removeLastCat(){
   
    const copyCats =cats.slice(0,cats.length-1);
    return copyCats;
}
function removeFirstCat(){
    const copyCats = cats.slice(1);
    return copyCats;
}
