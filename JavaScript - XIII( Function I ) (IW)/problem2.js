function prime(a)
  {  let count=0;
    for(let i=2;i<=a;i++)
      { count=0;
        for(let j=2;j<=i;j++)
        { 
            if(i%j==0)
          {
            count++
          }
        }
        if(count<2)
        {
          console.log(i)
        }
       
      }
  
     
   
  }
prime(13);