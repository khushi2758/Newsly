import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {

  constructor(){
    super();
    console.log("it is a constructer");
    this.state = {
      articles: [],
      loading : false
    }
  }
    async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=Us&category=business&apiKey=082a76f337704f5f89ea3186f64eed5e"
      let data = await fetch(url);
      let parsedData =await data.json()
      console.log(parsedData);
   this.setState({articles: parsedData.articles})
    }
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>Newsly - Top Headlines</h1>
        <div className="row">
          {/*Looping through an array in JSX to display NewsItems from state---------------------------------------->>*/}
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>{/*----------kry= some unique element-------------------*/}
             <NewsItems title= {element.title?element.title:" "} description={element.description?element.description.slice(0,88):" "}imgurl={element.urlToImage} newsUrl={element.url} />
           </div>
          })}
          {/*---------------------------------------------------------------------------------------------------------------*/}
          </div>
        </div>
     
    );
  }
}

export default News;
