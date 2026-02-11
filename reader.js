const fs = require('fs');

function readFileSync(filePath){
   try {
      const data = fs.readFileSync(filePath,'utf8');
      console.log('--- file content ---');
      console.log(data);
      console.log('-- End of file ---')
   } catch (error) {
      console.error('Error reading File :',error.message);
   }
}

readFileSync('test.txt');