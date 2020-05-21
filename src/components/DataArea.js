import React, { useState, useEffect, Component } from "react";
import DataTable from "./DataTable";
import NavBar from "../components/NavBar";
import API from "../utils/API";
import DataAreaContext from "../utils/DataAreaContext";

const DataArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "20%", order: "descend" },
      { name: "email", width: "20%", order: "descend" },
      { name: "dob", width: "10%", order: "descend" }
    ]
  });

  const handleSort = heading => {
    let currentOrder = developerState.headings
      .filter(elem => elem.name === heading)
      .map(elem => elem.order)
      .toString();

    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    const compareFnc = (a, b) => {
      if (currentOrder === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        }else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        }  else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    const updatedHeadings = developerState.headings.map(elem => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings
    });
  };

  const handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter( item => {
      let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      console.log(filter, values)
    if(values.indexOf(filter.toLowerCase()) !== -1){
      return item
    };
    });

    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };

  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

  return (
    <DataAreaContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <NavBar />
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <DataTable users = {developerState.users}  /> : <div></div>}
      </div>
    </DataAreaContext.Provider>
  );
};

export default DataArea;

// copy from rob

// export default class DataArea extends Component {
//   state = {
//     users: [{}],
//     order: "descend",
//     filteredUsers: [{}]
//   }
//   headings = [
//     { name: "Image", width: "10%" },
//     { name: "Name", width: "10%" },
//     { name: "Phone", width: "20%" },
//     { name: "Email", width: "20%" },
//     { name: "DOB", width: "10%" }
//   ]
//   handleSort = heading => {
//     if (this.state.order === "descend") {
//       this.setState({
//         order: "ascend"
//       })
//     } else {
//       this.setState({
//         order: "descend"
//       })
//     }
//     const compareFnc = (a, b) => {
//       if (this.state.order === "ascend") {
//         // account for missing values
//         if (a[heading] === undefined) {
//           return 1;
//         } else if (b[heading] === undefined) {
//           return -1;
//         }
//         // numerically
//         else if (heading === "name") {
//           return a[heading].first.localeCompare(b[heading].first);
//         } else {
//           return a[heading] - b[heading];
//         }
//       } else {
//         // account for missing values
//         if (a[heading] === undefined) {
//           return 1;
//         } else if (b[heading] === undefined) {
//           return -1;
//         }
//         // numerically
//         else if (heading === "name") {
//           return b[heading].first.localeCompare(a[heading].first);
//         } else {
//           return b[heading] - a[heading];
//         }
//       }
//     }
//     const sortedUsers = this.state.filteredUsers.sort(compareFnc);
//     this.setState({ filteredUsers: sortedUsers });
//   }
//   handleSearchChange = event => {
//     console.log(event.target.value);
//     const filter = event.target.value;
//     const filteredList = this.state.users.filter(item => {
//       // merge data together, then see if user input is anywhere inside
//       let values = Object.values(item)
//         .join("")
//         .toLowerCase();
//       return values.indexOf(filter.toLowerCase()) !== -1;
//     });
//     this.setState({ filteredUsers: filteredList });
//   }
//   componentDidMount() {
//     API.getUsers().then(results => {
//       this.setState({
//         users: results.data.results,
//         filteredUsers: results.data.results
//       });
//     });
//   }
//   render() {
//     return (
//       <>
//         <NavBar handleSearchChange={this.handleSearchChange} />
//         <div className="data-area">
//           <DataTable
//             headings={this.headings}
//             users={this.state.filteredUsers}
//             handleSort={this.handleSort}
//           />
//         </div>
//       </>
//     );
//   }
// }






// OLD MODEL

// export default class DataArea extends Component {
//   state = {
//     users: [{}],
//     order: "descend",
//     filteredUsers: [{}],
//   }
//   headings = [
//     { name: "Image", width: "10%", order: "descend" },
//     { name: "name", width: "10%", order: "descend" },
//     { name: "phone", width: "20%", order: "descend" },
//     { name: "email", width: "20%", order: "descend" },
//     { name: "dob", width: "10%", order: "descend" }
//   ]


//   handleSort = heading => {
//     // let currentOrder = developerState.headings
//     //   .filter(elem => elem.name === heading)
//     //   .map(elem => elem.order)
//     //   .toString();

//     if (this.state.order === "descend") {
//       this.setState = ({ order: "ascend " });
//     } else {
//       this.setState = ({ order: "descend " });
//     }

//     const compareFnc = (a, b) => {
//       if (this.state.order === "ascend") {
//         // account for missing values
//         if (a[heading] === undefined) {
//           return 1;
//         } else if (b[heading] === undefined) {
//           return -1;
//         }
//         // numerically
//         else if (heading === "name") {
//           return a[heading].first.localeCompare(b[heading].first);
//         } else if (heading === "dob") {
//           return a[heading].age - b[heading].age;
//         } else {
//           return a[heading].localeCompare(b[heading]);
//         }
//       } else {
//         // account for missing values
//         if (a[heading] === undefined) {
//           return 1;
//         } else if (b[heading] === undefined) {
//           return -1;
//         }
//         // numerically
//         else if (heading === "name") {
//           return b[heading].first.localeCompare(a[heading].first);
//         } else if (heading === "dob") {
//           return b[heading].age - a[heading].age;
//         } else {
//           return b[heading].localeCompare(a[heading]);
//         }
//       }
//     };
//     const sortedUsers = this.state.filteredUsers.sort(compareFnc);

//     this.setState({ filteredUsers: sortedUsers });
//   }
//     // const updatedHeadings = developerState.headings.map(elem => {
//     //   elem.order = elem.name === heading ? currentOrder : elem.order;
//     //   return elem;
//     // });

//     //   setDeveloperState({
//     //     ...developerState,
//     //     filteredUsers: sortedUsers,
//     //     headings: updatedHeadings
//     //   });
//     // };

//     handleSearchChange = event => {
//       const filter = event.target.value;
//       const filteredList = developerState.users.filter(item => {
//         let values = Object.values(item).join("").toLowerCase();
//         // item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
//         console.log(filter, values)
//         return values.indexOf(filter.toLowerCase() !== -1)

//       });
//       this.setState({ filteredUsers: filteredList });
//       // setDeveloperState({ ...developerState, filteredUsers: filteredList });
//     };

//     // useEffect(() => {
//     //   API.getUsers().then(results => {
//     //     console.log(results.data.results);
//     //     setDeveloperState({
//     //       ...developerState,
//     //       users: results.data.results,
//     //       filteredUsers: results.data.results
//     //     });
//     //   });
//     // }, []);
//     componentDidMount(
//       API.getUsers().then(results => {
//         this.setState({
//           users: results.data.results,
//           filteredUsers: results.data.results
//         })
//       })
//     );
  
//     render() {
//       return (
//         <>
//           <Nav handleSearchChange={this.handleSearchChange} />
//           <div className="data-area">
//             <DataTable
//               headings={this.headings}
//               users={this.state.filteredUsers}
//               handleSort={this.handleSort}
//             />
//           </div>
//         </>
//       );
//     }