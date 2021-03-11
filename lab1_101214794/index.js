const fs = require("fs")

// DELETE FILES IF EXISTS
async function deleteFile(filePath) {
	try {
	  if (fs.existsSync(filePath)) { // checks if file exists
	  	fs.unlink(filePath,function(err){ // if exists, delete
        	if(err) return console.log(err);
        	console.log(`${filePath} deleted successfully`);
	  	});
	  }
	}
	catch(err) {
	  console.error(err)
	}
}

deleteFile('japan.txt');
deleteFile('canada.txt');


// READ AND CREATE FILES
const csv = require('csv-parser');
const filepath = "input_countries.csv"
var readStream = fs.createReadStream(filepath);
var dataCountry1 = 'country, year, population\n'
var dataCountry2 = 'country, year, population\n'
readStream.setEncoding('UTF8');

fs.createReadStream(filepath)
  .pipe(csv())
  .on('data', (row) => {
    // if country is Japan
    if (row['country'] === 'Japan') {
      readStream.on('data', ()=> {
        var country = JSON.stringify(row['country']);
        var year = JSON.stringify(row['year']);
        var population = JSON.stringify(row['population']);
        dataCountry1 += `${country} , ${year}, ${population} \n`;
        // Write file
        fs.writeFile("japan.txt", dataCountry1, (err) => {
          if(err) console.log(`Error: ${err})`)
        })
      })

    // else if country is Canada
    } else if (row['country'] === 'Canada') {
      readStream.on('data', ()=> {
        var country = JSON.stringify(row['country']);
        var year = JSON.stringify(row['year']);
        var population = JSON.stringify(row['population']);
        dataCountry2 += `${country} , ${year}, ${population} \n`;
        // Write file
        fs.writeFile("canada.txt", dataCountry2, (err) => {
          if(err) console.log(`Error: ${err})`)
        })
      })
    } 
  })
  .on('end', () => {
    console.log('japan.txt and canada.txt successfully processed');
  });


