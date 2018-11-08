import React from "react";

const divStyle={  
  height: '80%',
  width: '96%' 
}

const imgStyle={
  paddingTop:'40px',
  height: '20%',
  width: '44%'
};

const headerStyle={
  fontWeight:'bold'
}

const Landing = () => (  
  
    <div className="container">

      <div className="row" style={divStyle}>
        <div className="col s12 l12">
          <h1 className= "center" style={headerStyle} >Welcome to IMDBu!</h1>
        </div>
      </div>

      <div id="profile" style={divStyle} className="row">
        <div className="col s12 l4 push-l3">
          <img src="images/profile.jpg" alt="" style={imgStyle}></img>
        </div>
        <div className="col s12 l6 offset-l2">
          <h4 className="blue-text font-size:2.56rem pulse text-darken-3" style={headerStyle}>Create A Profile</h4>
          <p>Showcase your accomplishments and network with like-minded individuals. Have your own IMDBu profile.</p>
             <a href="./addUser" className="btn-floating red pulse">
               <i className="material-icons">create</i>
             </a>
        </div>        
      </div>

      <div className="row" style={divStyle}>      
        <div className="col sm12 l6">
          <h4 className="blue-text font-size:2.56rem text-darken-3" style={headerStyle}>Add your Projects</h4>
          <p>Display what you have worked on to a wide audience. Get more attention on your films.</p>
          <a href="./addProject" className="btn-floating red pulse">
            <i className="material-icons">add</i>

          </a>

        </div>
        <div className="col s12 l4 push-l2">
          <img src="images/smallreel.png" alt="" style={imgStyle}></img>
        </div>
      </div>

      <div id="" style={divStyle} className="row">
        <div className="col s12 l4 push-l2">
           <img src="images/group2.jpg" alt="" style={imgStyle}></img>
        </div>
        <div className="col s12 l6 offset-l2">
          <h4 className="blue-text font-size:2.56rem text-darken-3" style={headerStyle}>Collab with Students</h4>
          <p>Find more students you want to work with. Make better projects with better teammates</p>
          <a href="./schools" className="btn-floating red pulse">
          <i className="material-icons">people</i>
          </a>

        </div>        
      </div>

    </div>
);

export default Landing;
