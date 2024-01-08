import { Component } from "react";

class ReviewCard extends Component {
  render() {
    return (
      <>
        <p>
          recensito il {this.props.data.date_of_dispatch} da {this.props.data.user.firstName}{" "}
          {this.props.data.user.lastName}
        </p>
        <p>{this.props.fn(this.props.data.evaluation)}</p>
        <p>{this.props.data.description}</p>
      </>
    );
  }
}

export default ReviewCard;
