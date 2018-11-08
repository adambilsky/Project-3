const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the ProjectController
module.exports = {
  findAll: function(req, res) {
    db.Project
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // The goal here is to add query strings to the API 
  // and use if/switch to evaluate the request
  findProjects: function(req, res) {
    switch(req.id.type) {
      case "student": 
        return this.findByUser(req, res);
        break;
      case "school":
        return this.findBySchool(req, res);
        break;
    }
  },
  // Find a project by the project ID
  findById: function(req, res) {
    db.Project
      .findById(req.params.id)
      .populate('Student')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find all projects associated with a particular school
  findBySchool: function(req, res) {
    db.Project
      .find({ school: req.params.id }) 
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find all projects *** created (submitted) by *** a particular user
  findCreator: function(req, res) {
    db.Project
      .find({ createdBy: req.params.id }) 
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //  Find all projects *** INVOLVING *** a particular user
  /*  There may be a shorter mongodb-specific way to run this query,
      but for now the 'equals' method on the ObjectId works */

  findProjectUsers: function(req, res) {
    db.Project
      .find({})
      .sort({ dateAdded: -1 })
      .then((projects) => {
        const filtered = projects.filter(project => {
          let onProject = false
          project.users.forEach(user => {
            if(user.userId.equals(req.params.id)) {
              onProject = true
            } 
          })
          return onProject
        })
        res.json(filtered);
        console.log(filtered);
      })
      .catch(err => {
        res.status(422).json(err)
      });
  },
  
  // Add a new project
  create: function(req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Update a project
  update: function(req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Delete a project
  remove: function(req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

