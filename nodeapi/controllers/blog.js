const Blog = require("../models/blog");
const fs = require("fs");
const formidable = require("formidable");

//create blog
exports.createBlog = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Image could not be uploaded"
      });
    }

    let blog = new Blog(fields);

    blog.postedBy = req.profile.firstname;

    if (files.file) {
      blog.photo.data = fs.readFileSync(files.file.path);
      blog.photo.contentType = files.file.type;
    }

    blog.save((err, result) => {
      if (err) {
        console.log(err);

        res.status(400).json({
          err
        });
      }
      res.json(result);
    });
  });
};

// get blog
exports.getBlog = (req, res) => {
  Blog.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

// get photo
exports.postPhoto = (req, res, next) => {
  Blog.findById(req.params.postId).then(response => {
    res.set("Content-Type", response.photo.contentType);
    return res.send(response.photo.data);
  });
};
