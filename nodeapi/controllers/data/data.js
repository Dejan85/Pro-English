const fs = require('fs');

exports.getCourse = (req, res) => {
  fs.readFile(
    __dirname + '/json/course/course.json',
    'utf8',
    (err, jsonString) => {
      if (err) {
        return console.log('File read failed:', err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};
