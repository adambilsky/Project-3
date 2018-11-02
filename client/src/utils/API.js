import axios from "axios";

export default {
  // *** API --STUDENT-- CRUD FUNCTIONS HERE ***

  // List (get) all students
  getStudents: function () {
    return axios.get("/api/students/");
  },
  // Search (get) for student by id
  getStudent: function (id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function (id) {
    return axios.delete("/api/students/" + id);
  },
  // Add (post) new student to database
  saveStudent: function (studentData) {
    return axios.post("/api/students/", studentData);
  },
  // Update (put) student record
  updateStudent: function (studentData) {
    return axios.put("/api/students/", studentData);
  },

  // *** API --SCHOOL-- CRUD FUNCTIONS HERE ***

  // List (get) all schools
  getSchools: function () {
    return axios.get("/api/schools/");
  },

  // Search (get) school by id
  getSchool: function (id) {
    return axios.get("/api/schools/" + id);
  },

  // Add (post) new school to database
  saveSchool: function (schoolData) {
    return axios.post("/api/schools/", schoolData);
  },

  // Update (put) school record
  updateSchool: function (schoolData) {
    return axios.put("/api/schools/", schoolData);
  },

  // Remove a school from the database
  deleteSchool: function (id) {
    return axios.delete("/api/schools/" + id);
  },

  // *** API --PROJECT-- CRUD FUNCTIONS HERE ***

  // List (get) all projects
  getProjects: function () {
    return axios.get("/api/projects/");
  },
  // List (get) all projects within a single school
  getSchoolProjects: function (school) {
    return axios.get("/api/projects/" + school);
  },

  // List (get) all projects containing a student ID
  getStudentProjects: function (studentId) {
    return axios.get("/api/projects/student/" + studentId)
  },

  // Search (get) project by the project id
  // getProject: function (id) {
  //   return axios.get("api/projects/" + id);
  // },

  // Add (post) new project to database
  saveProject: function (projectData) {
    return axios.post("/api/projects/", projectData);
  },

  // Update (put) project record
  updateProject: function (projectData) {
    return axios.put("/api/projects/", projectData);
  },

  // Remove a project from the database
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },

};
