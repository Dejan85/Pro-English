const fs = require('fs');

exports.getCourse = async (req, res) => {
  await fs.readFile(
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

exports.gre = async (req, res) => {
  await fs.readFile(
    __dirname + '/json/exams/gre.json',
    'utf8',
    (err, jsonString) => {
      if (err) {
        return console.log('File read failed:', err);
      }
      return res.json(JSON.parse(jsonString));
    }
  );
};
