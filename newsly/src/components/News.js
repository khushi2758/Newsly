import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'//impt
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
  constructor(){
    super();
   // console.log("it is a constructer");
    this.state = {
      articles: [],
      loading : false,
      page:1
    }
  }
 
    async componentDidMount(){
   let url =   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=1&pageSize=${this.props.pageSize}`;
 
    this.setState({loading:true });
      let data = await fetch(url);
      let parsedData =await data.json()
      console.log(parsedData);
   this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,
    loading:false })
   
  }
    handlePreviousClick= async ()=>{
      console.log("prev")

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=46135747f39647f78b3c478cab7ed9d5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true });
      let data = await fetch(url);
      let parsedData =await data.json()
      this.setState({
        page:this.state.page - 1,
        articles: parsedData.articles,
       loading:false 
      })

        }
        handleNextClick= async () =>{
          console.log("Next"); 
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
          })
        }

      }


  render() {
    console.log("render")
    return (
      <div className="container my-3">

        <h1 className= "text-center " style= {{margin: '40px 0px'}} >Newsly - Top Headlines</h1>
        {this.state.loading &&<Spinner/>} {/*----------------------if this.state.loading is true then you show the spinner else no required 6------------------------------------------>> */}
        <div className="row">
          {/*Looping through an array in JSX to display NewsItems from state---------------------------------------->>*/}
        {! this.setState.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>{/*----------kry= some unique element-------------------*/}
             <NewsItems title= {element.title?element.title:" "} description={element.description?element.description.slice(0,88):" "}imgurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author}source={element.source.name} />
           </div>
          })}
          {/*---------------------------------------------------------------------------------------------------------------*/}
          <div className="container d-flex justify-content-between my-4">
          <button   disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> 	&larr;preview</button>
          {/*disable ==> {this.state.page>=1} // its mean if page is > or = 1 then the previous bottor will be disable--------------------------------- */}
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>next	&rarr;</button>
          </div>
          </div>
        </div>
     
    );
  }
}

export default News ;
