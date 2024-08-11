import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'//impt
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
    totalResults:0
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props){
    super(props);
   // console.log("it is a constructer");
    this.state = {
      articles: [],
      loading : false,
      page:1
    }
    document.title =`${this.capitalizeFirstLetter(this.props.category)} - Newsly`;
  }
  //updation function------------------------------------------------>
  async updateNews(){
    let url =   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=1&pageSize=${this.props.pageSize}`;
 
    this.setState({loading:true });
      let data = await fetch(url);
      let parsedData =await data.json()
      console.log(parsedData);
   this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false })
  }
 
    async componentDidMount(){
   /*let url =   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=1&pageSize=${this.props.pageSize}`;
 
    this.setState({loading:true });
      let data = await fetch(url);
      let parsedData =await data.json()
      console.log(parsedData);
   this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,
    loading:false })*/
    this.updateNews();
   
  }
    handlePreviousClick= async ()=>{
     /* console.log("prev")

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true });
      let data = await fetch(url);
      let parsedData =await data.json()
      this.setState({
        page:this.state.page - 1,
        articles: parsedData.articles,
       loading:false 
      })*/
       this.setState({ page: this.state.page - 1 });
       this.updateNews();

        }
        handleNextClick= async () =>{
         /* console.log("Next"); 
          if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          console.log("next")
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
          //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=082a76f337704f5f89ea3186f64eed5e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true });
          let data = await fetch(url);
          let parsedData =await data.json()
          
          this.setState({
            page:this.state.page + 1,
            articles: parsedData.articles,
           loading:false 
          })*/
           this.setState({ page: this.state.page + 1 });
           this.updateNews();
        }
        fetchMoreData=async ()=>{
          let url =   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=1&pageSize=${this.props.pageSize}`;
 
    this.setState({loading:true });
      let data = await fetch(url);
      let parsedData =await data.json()
      console.log(parsedData);
   this.setState({articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    loading:false })
        }
      


  render() {
    console.log("render")
    return (
 <>

        <h1 className= "text-center " style= {{margin: '40px 0px'}} >Newsly - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
       {/* {this.state.loading &&<Spinner/>}*/} {/*----------------------if this.state.loading is true then you show the spinner else no required 6------------------------------------------>> */}
        
          {/*--------------------------------------------------------------------------------------------------------------------------------------
          Looping through an array in JSX to display NewsItems from state---------------------------------------->>
        {/* {! this.setState.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>{/*----------kry= some unique element-------------------*/}
            {/*  <NewsItems title= {element.title?element.title:" "} description={element.description?element.description.slice(0,88):" "}imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
           </div>
          })}
         ---------------------------------------------------------------------------------------------------------------*/}

{/*create infinite scrole bar-------------------------------------------------------------->>>*/}
<InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
          {/*---------------------------------------------------------------------------------------------------------------*/}
          </>
        )
    }
}
export default News ;
