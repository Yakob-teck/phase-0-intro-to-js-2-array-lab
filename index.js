
const cats = ["Milo", "Otis","Gorfield"]; 
function destructivelyAppendCat(name){
   
   return  cats.push(name);
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
    const copyCats = [...cats, "Tom"];
    
return cats;
}
function prependCat(name){
    const copyCats= ["Tom", ...cats]; 
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
