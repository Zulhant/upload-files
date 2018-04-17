const express = require('express');
const app = express();
const upload = require('express-fileupload');

app.use(upload());

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/index.html");
   console.log(req.files)
});

app.post('/', (req, res) => {
   if (req.files) {
      let file = req.files.upload;
      let filename = file.name;
      let type = file.mimetype;
      if (type === 'image/jpeg') {
         file.mv("./upload/" + filename, (err) => {
            if (err) {
               res.send('error upload');
            } else {
               res.send('done')
            }
         })
      } else {
         res.send('type file harus jpeg')
      }
   }
})

app.listen(400, () => {
   console.log('server is running')
});