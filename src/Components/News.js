import React, { Component } from "react";
import NewsDetail from "./NewsDetail";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 5,
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };
    }

    async componentDidMount(props) {
        this.props.setProgress(10);
        let url =
            `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fec3f13e792d4b05a192643828703e47&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults, page: 1 });
        this.props.setProgress(100);
        document.body.style.backgroundColor = "#292F6D";
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 }, async () => {
            let url =
                `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fec3f13e792d4b05a192643828703e47&page=${this.state.page}&pagesize=${this.props.pagesize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false });
        })
    };

    render() {
        return (
            <>
            <h1 className="text-center text-white" style={{marginTop: "75px"}}><u>NewsLetter- Top {this.props.category} Headlines</u></h1>
                {this.state.loading && <Spinner />} 
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container my-2">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4 my-2" key={element.url}>
                                        <NewsDetail
                                            title={element.title}
                                            desc={element.description}
                                            img={element.urlToImage}
                                            url={element.url}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}
export default News;
