let lower_case=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper_case=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
character="h"
for(let i=0;i<lower_case.length;i++){
  if(lower_case[i]==character){
    lower_case[i]=upper_case[i];
    break;
  }
}
console.log(lower_case);