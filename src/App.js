import { Component } from "react";
import UserProfile from "./components/UserProfile";

import "./App.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer"
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer"
  }
];

class App extends Component {
  state = {
    searhInputVale: "",
    userDetailsList: initialUserDetailsList
  };
  searchInputChange = (event) => {
    this.setState({ searhInputVale: event.target.value });
  };
  deleteFunction = (uniqueNo) => {
    // console.log("Delete FUnction from APP.js" + uniqueNo);
    const { userDetailsList } = this.state;
    const filteredUsersList = userDetailsList.filter(
      (eachUser) => eachUser.uniqueNo !== uniqueNo
    );
    this.setState({ userDetailsList: filteredUsersList });
  };
  render() {
    const { searhInputVale, userDetailsList } = this.state;
    const searchResultList = userDetailsList.filter((xen) =>
      xen.name.includes(searhInputVale)
    );
    console.log(searchResultList);
    console.log(initialUserDetailsList);
    return (
      <div className="app-container">
        <h1 className="title">{searhInputVale}</h1>
        <input
          type="search"
          onChange={this.searchInputChange}
          value={searhInputVale}
        />
        <ul className="list-container">
          {searchResultList.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deletefunc={this.deleteFunction}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
