import React from "react";

function Room(data) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.room.number}</h5>
        <p className="card-text">{data.room.name}</p>
      </div>
    </div>
  );
}

export default Room;
/*<a onclick="this.submit" className="btn btn-primary"> 
        Book
      </a>*/
