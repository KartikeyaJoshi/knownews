import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, desc, newsUrl, imgUrl} = this.props;
    return (
      <>
        <div className="card my-3 text-center" style={{width: "18rem"}}>
          <img src={imgUrl} />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">
                {desc}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read Article
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
