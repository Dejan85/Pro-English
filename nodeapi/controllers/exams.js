const Exams = require("../models/exams");
const fs = require("fs");
const formidable = require("formidable");
const _ = require("lodash");


//create exams
exports.createExams = async (req, res) => {
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

        let exams = new Exams(fields);

        exams.postedBy = req.profile.firstname;

        if (files.file) {
            exams.photo.data = fs.readFileSync(files.file.path);
            exams.photo.contentType = files.file.type;
        }

        exams.save((err, result) => {
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