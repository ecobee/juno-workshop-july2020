import React from "react";
import Img from "./Img";
import ReactModal from "react-modal";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMovieDetailsModal: false,
    };
  }

  handleOpenMovieModal = () => {
    this.setState({ showMovieDetailsModal: true });
  };

  handleCloseMovieModal = () => {
    this.setState({ showMovieDetailsModal: false });
  };

  render() {
    return (
      <div className="card">
        <h3>{this.props.movie.title}</h3>
        <h4>({this.props.movie.release_date})</h4>
        <Img
          path={this.props.movie.poster_path}
          title={this.props.movie.title}
          vote={this.props.movie.vote_average}
          date={this.props.movie.release_date}
          handleClick={this.handleOpenMovieModal}
        />
        <span>
          <p>
            {this.props.movie.vote_average}
            {` `}
            <svg height="20" width="23" className="star rating" data-rating="1">
              <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
          </p>
        </span>
        <ReactModal
          isOpen={this.state.showMovieDetailsModal}
          // gets called for closing the modal via esc / other keys
          onRequestClose={this.handleCloseMovieModal}
        >
          <button onClick={this.handleCloseMovieModal}>X</button>
        </ReactModal>
      </div>
    );
  }
}

export default Card;
