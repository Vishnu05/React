import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCards";
import {TimeStamp} from './TimeStamp';

const App = () => {
  return (
    <div className="ui container components">
      {/* ApproavalCard is a parent and commentDetails is a child component
       if we need to access the child properties we can use it by props.children to get the values */}

      <ApprovalCard>
        <div>
          <h3>Alert</h3>
          Hello there, this is warning if you do this there is no way going back
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Vishnu"
          date="today is 2020 8am"
          comments="Nice blog dood"
          js={onclick = console.log('hello Im logged')}
          img={faker.image.avatar()}
        />

        <TimeStamp times={'Current Time : ' +
          Date()
        } />

      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Reactjs"
          date="today is 2020 coronavirus"
          comments="Reactjs is going good so far"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Udemy-course"
          date="Today is 2020 April 27"
          comments="This course is better to learn"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetails />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
//ReactDOM.render(<App1 />);
