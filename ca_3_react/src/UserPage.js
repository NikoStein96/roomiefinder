import React, { Component } from "react"
import facade from "./apiFacade";

export default class UserPage extends Component {
    constructor(props) {
      super(props);
      this.state = { dataFromServer: "",}
      this.state = { value: "" };
    }
  
  // fetch user and admin details from backend
/*    componentDidMount() {
      facade.fetchData().then(res => this.setState({ dataFromServer: res }));
      facade.fetchDataAdmin().then(res => this.setState({ dataFromServer: res}));
    }
*/
    handleChangeUP = event => {
      console.log("this is event.target.value: "+event.target.value);
      this.setState({ value: event.target.value });
    };
componentWillMount(){
  this.handleSubmitUP();
}
   
componentDidUpdate() {
  var URL = "http://localhost:8080/RoomieRoamer/api/User/1/poma";
      fetch(URL)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          try{
            if(json === undefined){
              document.getElementById("desc1").innerHTML = "Out of luck. Can't find a user";
            }
            else{
              console.log(nr);
            document.getElementById("desc1").innerHTML = json.results[nr].Name + "</br>" + 
            json.results[nr].Id + "</br>" + json.results[nr].Desc;
            nr--;
            }
          }
        catch{
          document.getElementById("desc1").innerHTML = "Out of luck. Can't find a user";
        }
});
}
    


    handleSubmitUP() {
      var URL = "http://localhost:8080/RoomieRoamer/api/User/1/poma";
      fetch(URL)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          try{
          if(json === undefined){
            document.getElementById("desc1").innerHTML = "Out of luck. Can't find a user";
          }
          else{
            console.log(nr);
          document.getElementById("desc1").innerHTML = json.results[nr].Name + "</br>" + 
          json.results[nr].Id + "</br>" + json.results[nr].Desc; 
          nr--;
          }
        }
      catch{
        document.getElementById("desc1").innerHTML = "Out of luck. Can't find a user";
      }
      });
    };
  

nrIncrement(){
  nr++;
  console.log(nr);
}
nrIncrement2(){
  nr++;
}

    render() {
      return (
        <div>
          Welcome to the userpage. If you are logged in, a message will be displayed below with your role and name.
          <div>
            {this.state.dataFromServer}
          </div>
          <br>
          </br>
          <button onClick={facade.logout}>Logout</button>
        <br/>
        <br/>
        <br/>
  <form onClick={this.nrIncrement()}>
        <input id="likebtn" type="submit" value="Like">
        </input>
  </form>

    <form onClick={this.nrIncrement2()}>
        <input id="dislikebtn" type="submit" value="Dislike">
        </input>
  </form>
      <p id="desc1" align="center">No potential matches yet</p>
     
      
      </div>  
      )
    }
  }
  let nr = -2;

 
      