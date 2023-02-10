function checkchar(a)
  {  let char="abcdefghijklmnopqrstuvwxyz"
    y=true
    for(let i=0;i<char.length;i++)
      { 
        if(char[i]==a)
        {
         y=false
        }
      }
       if(y){
             console.log("uppercase")
        }
        else{
           console.log("lowercase")
        }
  }
checkchar("S");