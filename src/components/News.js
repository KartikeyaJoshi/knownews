import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=IN&apiKey=89ee6a89dac14a04980a7cd03aa92b7c&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=IN&apiKey=89ee6a89dac14a04980a7cd03aa92b7c&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      loading: true,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=IN&apiKey=89ee6a89dac14a04980a7cd03aa92b7c&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      loading: true,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">KnowNews - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((elem) => {
            return (
              <div className="col-md-3" key={elem.url}>
                <NewsItem
                  title={elem ? elem.title : ""}
                  desc={elem ? elem.description : ""}
                  newsUrl={elem ? elem.url : ""}
                  imgUrl={
                    elem.urlToImage
                      ? elem.urlToImage
                      : "https://media.istockphoto.com/id/1351440359/vector/megaphone-with-breaking-news-speech-bubble-banner-loudspeaker-label-for-business-marketing.jpg?s=612x612&w=0&k=20&c=o2Q3N327CD_YdTjXqQ5cP2MW7rNHWDRD33ZO7iFA9QE="
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; PREV
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              NEXT &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
