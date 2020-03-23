const jimp = require("jimp");

const fileName = "./selim.png";
jimp.read(fileName, (err, image) =>{
  if(err){
      console.log(err);
  }
  
    image.blur(2).write(fileName);
});