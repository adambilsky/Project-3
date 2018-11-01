const db = require("../models");

// Defining methods for the ProjectController
module.exports = {
  findAll: function(req, res) {
    db.Project
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findProjects: function(req, res) {
    if(req.id.type=="student") {
      return this.findByUser(req, res);
    }
    else if(req.query.type==="school") {
      this.findBySchool(req, res)
    }
  },
  findById: function(req, res) {
    db.Project
      // .findById()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySchool: function(req, res) {
    db.Project
      .findBySchool(req.params.school) /* <-- how do we define this key on the projects Object? */
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByUser: function(req, res) {
    db.Project
      .find({ createdBy: { $in: [req.params.id] }}) 
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

