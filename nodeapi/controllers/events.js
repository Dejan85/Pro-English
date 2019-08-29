const Events = require("../models/events");

//
// ─── CREATE EVENT ──────────────────────────────────────────────────────────────
//

exports.createEvent = async (req, res) => {
  const newEvents = new Events({
    title: req.body.title,
    time: req.body.time,
    description: req.body.description,
    date: req.body.date
  });

  await newEvents
    .save()
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ALL EVENTS ─────────────────────────────────────────────────────────────
//

exports.getAllEvents = async (req, res) => {
  await Events.find({})
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log(err);
    });
};
