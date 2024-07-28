import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articals =  [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Lhakpa Sherpa: Everest record holder shares her domestic abuse turmoil",
      "description": "Lhakpa Sherpa, who has climbed Everest more than any other woman, wants to inspire women and girls.",
      "url": "https://www.bbc.co.uk/news/articles/ckrrgdpvrdpo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/df6d/live/44c00ef0-4ba1-11ef-aebc-6de4d31bf5cd.jpg",
      "publishedAt": "2024-07-27T06:52:11.9537947Z",
      "content": "Climbing is not only her passion - it's also a healing process.\r\n\"My darkness I leave behind [on the mountain],\" she says. \r\nWe see her begin her record-breaking 10th Everest ascent in 2022.\r\nWhisper… [+876 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "South African killer Louis van Schoor dies as victims still demand justice",
      "description": "The 72-year-old South African was convicted for seven apartheid-era murders but was behind many more deaths.",
      "url": "https://www.bbc.co.uk/news/articles/cd1r45kme45o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cd1f/live/ef4e53d0-4b66-11ef-8f0f-0577398c3339.jpg",
      "publishedAt": "2024-07-27T06:37:11.4062047Z",
      "content": "In 2021, Van Schoor had both his legs partially amputated following circulatory complications.\r\nHis hospitalisation a month ago, in the same East London hospital where many of his victims were taken,… [+883 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "South Korea wrongly introduced as North Korea at Olympics",
      "description": "South Korea said it would request a meeting with International Olympic Committee Chairman Thomas Bach.",
      "url": "https://www.bbc.co.uk/news/articles/cmj2r1403jpo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c341/live/34a7bea0-4bbf-11ef-8f0f-0577398c3339.jpg",
      "publishedAt": "2024-07-27T04:37:09.9847113Z",
      "content": "The subtitle which ran across the bottom of the television broadcast showed the correct title, however.\r\nThe South Korean sports ministry said it planned to lodge a \"strong complaint with France on a… [+883 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Ismael 'El Mayo' Zambada: How US authorities arrested a drug lord",
      "description": "The last of an original generation of drug cartel leaders, El Mayo evaded arrest for decades. Until now.",
      "url": "https://www.bbc.co.uk/news/articles/c1rwyl2x050o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/885d/live/29705520-4b96-11ef-a878-89879bf912b3.jpg",
      "publishedAt": "2024-07-26T23:37:16.3559357Z",
      "content": "Mike Vigil thinks a similar explosion of violence, which became known as the Culiacanazo, might be avoided this time around:\r\nThe Sinaloa Cartel has a very strong bench of possible leaders who could … [+2398 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Celine Dion makes live comeback at Paris Olympics opening ceremony",
      "description": "It's the superstar singer's first performance since revealing a serious health condition two years ago.",
      "url": "https://www.bbc.co.uk/news/articles/cgerkx08dw0o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ae5a/live/30218b50-4ba0-11ef-b2d2-cdb23d5d7c5b.jpg",
      "publishedAt": "2024-07-26T23:22:15.159763Z",
      "content": "Dion has a big following in France. Her 1995 album D'eux is the best-selling French-language album of all time.\r\nFriday's appearance was the second time that Dion, known for hits including My Heart W… [+659 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Spectacular photos from the Paris 2024 Olympic opening ceremony",
      "description": "A selection of eye-catching moments from the opening ceremony for the 2024 Olympic Games in Paris.",
      "url": "https://www.bbc.co.uk/news/articles/c9x827dnxpgo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/738b/live/6a7ae790-4b93-11ef-b2d2-cdb23d5d7c5b.jpg",
      "publishedAt": "2024-07-26T22:22:16.0516807Z",
      "content": "The Olympic opening ceremony presents the host country with the opportunity to wow the world with a uniquely spectacular show. \r\nThe opening of the Paris 2024 Olympic Games was just that - the organi… [+367 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Jasper fire: Canadians mourn as jewel of the Rockies burns",
      "description": "The wildfire destruction to Jasper National Park has reverberated across all of Canada.",
      "url": "https://www.bbc.co.uk/news/articles/cp68rz0zrrwo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/58a9/live/176504b0-4b83-11ef-8bbf-8529a913926f.jpg",
      "publishedAt": "2024-07-26T22:22:14.4883432Z",
      "content": "Ms Porttin said she loves watching visitors fall in love with Jasper. Most who end up moving to the town have a similar-sounding origin story. \r\n\"Most people say I came for a summer, and I stayed the… [+1541 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "JD Vance defends 'childless cat ladies' comment after backlash",
      "description": "Donald Trump's vice-presidential candidate says his 2021 comments about Democrats were \"sarcastic\".",
      "url": "https://www.bbc.co.uk/news/articles/c147yn4xxx4o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f271/live/9243eb40-4b7b-11ef-aebc-6de4d31bf5cd.jpg",
      "publishedAt": "2024-07-26T22:07:19.3861788Z",
      "content": "On Friday, Mr Vance said: I wish her step-children and Kamala Harris and her whole family the very best. The point is not that shes lesser. The point is that her party has pursued a set of policies t… [+1216 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Three ways Trump will try to end the Harris honeymoon",
      "description": "Kamala Harris is riding a wave of momentum, but Republicans sense vulnerabilities they can exploit.",
      "url": "https://www.bbc.co.uk/news/articles/crg4p4ndkr0o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/fe0f/live/3c3a7270-4b8d-11ef-8f0f-0577398c3339.png",
      "publishedAt": "2024-07-26T21:22:12.8020818Z",
      "content": "In the first public rally of her presidential campaign, Ms Harris unveiled a particularly pointed line of attack against the former president. Noting that she had served as a courtroom prosecutor and… [+1912 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Justin Timberlake was 'not intoxicated' during DWI arrest, lawyer says",
      "description": "Police made several errors and should not have arrested the popstar, his lawyer Edward Burke said.",
      "url": "https://www.bbc.co.uk/news/articles/cgxqjly724po",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b666/live/e83e9400-4b8a-11ef-8f0f-0577398c3339.jpg",
      "publishedAt": "2024-07-26T21:07:16.8947156Z",
      "content": "The arrest occurred in Sag Harbor in the Hamptons, a popular summer destination for celebrities on Long Island.\r\nWhen officers stopped him, Timberlake's eyes were \"bloodshot and glassy\" and a \"strong… [+668 chars]"
    }
  ]
  constructor(){
    super();
    console.log("it is a constructer");
    this.state = {
      articals: this.articals,
      loading : false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Newsly - Top Headlines</h2>
        <div className="row">
          {/*Looping through an array in JSX to display NewsItems from state---------------------------------------->>*/}
        {this.state.articals.map((element)=>{
           return <div className="col-md-4" key={element.url}>{/*----------kry= some unique element-------------------*/}
             <NewsItems title= {element.title.slice(0,45)} description={element.description.slice(0,88)}imgurl={element.urlToImage} newsUrl={element.url} />
           </div>
          })}
          {/*---------------------------------------------------------------------------------------------------------------*/}
          </div>
        </div>
     
    );
  }
}

export default News;
