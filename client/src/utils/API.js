import axios from "axios";

export default {
    // *** API --STUDENT-- CRUD FUNCTIONS HERE ***

    // List (get) all students
    getStudents: function() {
      return axios.get("/api/student");
    },
    // Search (get) for student by id
    getStudent: function(id) {
      return axios.get("/api/student/" + id);
    },
    // Deletes the student with the given id
    deleteStudent: function(id) {
      return axios.delete("/api/student/" + id);
    },
    // Add (post) new student to database
    saveStudent: function(studentData) {
      return axios.post("/api/student", studentData);
    },
    // Update (put) student record
    updateStudent: function(studentData) {
      return axios.put("api/student", studentData);
    },

    // *** API --SCHOOL-- CRUD FUNCTIONS HERE ***

    // List (get) all schools
    getSchools: function() {
        return axios.get("api/school");
    },

    // Search (get) school by id
    getSchool: function(id) {
        return axios.get("api/school" + id);
    },


    // Add (post) new school to database


    // Update (put) school record

};
