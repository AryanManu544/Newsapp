import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async fetchNews(page) {
    try {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=eb29df728c084c6680eff7a710da3dff&page=${page}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();

      // Filter out articles with missing fields
      const validArticles = parsedData.articles.filter(
        (article) =>
          article.title &&
          article.description &&
          article.url &&
          article.urlToImage
      );

      this.setState({
        articles: validArticles || [],
        totalResults: parsedData.totalResults,
        loading: false,
        page: page,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ articles: [], loading: false });
    }
  }

  async componentDidMount() {
    this.fetchNews(this.state.page);
  }

  handlenextclick = async () => {
    const { page, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / 20);

    if (page < totalPages) {
      this.fetchNews(page + 1);
    }
  };

  handlepreviousclick = async () => {
    const { page } = this.state;

    if (page > 1) {
      this.fetchNews(page - 1);
    }
  };

  render() {
    const { articles, loading, page, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / 20);

    return (
      <div className="container my-3">
        <h2 className="text-center">NewsApp - Top Headlines</h2>
        {loading && <div className="text-center">Loading...</div>}
        <div className="row">
          {!loading && articles && articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4 my-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : "No Title"}
                  description={element.description ? element.description.slice(0, 88) : "No description available"}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            ))
          ) : (
            !loading && <p>No articles available</p>
          )}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlepreviousclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= totalPages}
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
