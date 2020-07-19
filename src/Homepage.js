import React from "react";
import CardContainer from "./containers/CardContainer";
import Card from "./components/Card";
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/trending/movie/day?page=1", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then(
        (res) => {
          console.log({ res });
          this.setState({
            isLoaded: true,
            movies: res.results,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="HomePage">
          <CardContainer>
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </CardContainer>
        </div>
      );
    }
  }
}
