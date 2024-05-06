import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import NewsComponents from './NewsComponents';
import Spinner from './Spinner';
// import setBodyColor from './setBodyColor';
export default function News(props) {

  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState("");
  const [loading, setloading] = useState(false);

  const updateNews=async(page)=>{
      let url =`https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=c1261ec268d64d67b944cb4bcea5ec47&page=${page}&pageSize=${props.pageSize}`;
      setloading(true);
      let data = await fetch(url);
      let parsedData= await data.json();
      setarticles(parsedData.articles);
      setloading(false);
      settotalResults(parsedData.totalResults);
      console.log(parsedData);

  }

useEffect(() => {
 updateNews();
},[]);


const handlePrevClick=async()=>{
  // let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=c1261ec268d64d67b944cb4bcea5ec47&page=${page-1}`;
  //     let data = await fetch(url);
  //     let parsedData= await data.json();
  //     setarticles(parsedData.articles);
  //     console.log(parsedData);
  updateNews(page-1)
  setpage(page-1)

}

const handleNextClick=async()=>{
  if(!(page+1>Math.ceil(totalResults/props.pageSize)))
  {
  // let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=c1261ec268d64d67b944cb4bcea5ec47&page=${page+1}&pageSize=${props.pageSize}`;
  // let data = await fetch(url);
  // let parsedData= await data.json();
  // setarticles(parsedData.articles);
  // console.log(parsedData);
  updateNews(page+1)
  setpage(page+1)
  }

}


  return (
    <>
    <div className='container my-3'>
    {/* {setBodyColor({color: "#aa9999"})} */}
        <div className="container my-3">
          <h3 className='text-center' style={{margin: "62px auto"}}>NewsApp-Top {props.category} Headlines</h3>
        </div>
        {loading && <Spinner/>}
        <div className="row my-3">
            {!loading && articles.map((articles)=>{
                return <div className="column col-md-4" key={articles.url}>
                    <NewsComponents title={!articles.title? "" :articles.title} desc={!articles.description? "" :articles.description.slice(0,80)} urlToImage={articles.urlToImage} url={articles.url}/>
              </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={page===1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr;Previous</button>
        <button disabled={(page+1)>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark"  onClick={handleNextClick}>Next &rarr;</button>
        </div>
    </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: '6'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.string
};
