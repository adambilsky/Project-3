import React from "react";

const Landing = ({students}) => {

    const studentList = students.map(student => {
      return(
          <div className = "row">
              <div className = "col-sm-3"><img src={student.img}></img></div>
              <div className = "col-sm-6"><h2>{student.name}</h2><p>{student.tagline}</p></div>
          </div>
  )
})

return(
    <div className = "container">
        {studentList}
    </div>
)
};

export default Landing;
