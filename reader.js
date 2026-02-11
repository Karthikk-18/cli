const fs = require('fs');

function readFileSync(filePath){
   fs.readFile(filePath,'utf-8',(error,data) => {
       if(error){
           console.log('Error reading in file : ',error.message);
           return ;
       }
       console.log('--- File Content ---');
        console.log(data);
        console.log('--- End of File ---');
   });
}

async function readFileAsync(filePath) {
   try {
      const data = await fs.promises.readFile(filePath,'utf-8');
      console.log('--- File Content ---');
      console.log(data);
      console.log('--- End of File ---');
   } catch (error) {
      console.error('Error reading file : ',error.message);
   }

}

readFileAsync('test.txt');