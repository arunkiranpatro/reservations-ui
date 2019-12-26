import React from "react";
import Room from "./Room";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rooms: [] };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/rooms")
      .then(response => response.json())
      .then(data => this.setState({ rooms: data }));
  }
  render() {
    return (
      <div>
        {this.state.rooms.map((room, i) => {
          return <Room key={i} room={room} />;
        })}
      </div>
    );
  }
}

export default Rooms;
/*<a onclick="this.submit" className="btn btn-primary"> 
        Book
      </a>*/
