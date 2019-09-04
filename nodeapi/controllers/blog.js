const Blog = require("../models/blog");
const fs = require("fs");
const formidable = require("formidable");
const _ = require("lodash");

//create blog
exports.createBlog = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  await form.parse(req, (err, fields, files) => {
    console.log(fields);

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
exports.getBlog = async (req, res) => {
  await Blog.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

//edit blog
exports.editBlog = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "Photo could not be uploaded"
      });
    }

    Blog.findById(req.params.id, (err, blog) => {
      if (err) {
        console.log(err);
      }

      let data = _.extend(blog, fields);
      data.update(Date.now());

      console.log(data);

      if (files.file) {
        data.photo.data = fs.readFileSync(files.file.path);
        blog.photo.contentType = files.file.type;
      }

      blog.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err
          });
        }
        res.json(blog);
      });
    });
  });
};

// delete blog
exports.deleteBlog = async (req, res) => {
  await Blog.findOneAndDelete(req.params.blogId, (err, response) => {
    console.log(response);
    if (err) {
      res.status(400).json(err);
    }
    res.json({
      message: "Post deleted succesfully!"
    });
  });
};

// get photo
exports.postPhoto = async (req, res, next) => {
  await Blog.findById(req.params.id).then(response => {
    res.set("Content-Type", response.photo.contentType);
    return res.send(response.photo.data);
  });
};
