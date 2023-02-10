function string(a)
  {  let y=""
   
    for(let i=0;i<a.length;i++)
      { 
        if(a[i]==" ")
        {
         y+="-"
        }
        else{
          y+=a[i]
        }
      }
   console.log(y)
       
  }
string("my name is parvesh");