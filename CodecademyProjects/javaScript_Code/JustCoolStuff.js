const justCoolStuff = (arr1,arr2) => {
    return arr1.filter(item => arr2.includes(item));
   };
   
   
   
   
   
   
   
   
   const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
   
   const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
   
   console.log(justCoolStuff(myStuff, coolStuff))
   