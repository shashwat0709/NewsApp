import React from 'react';

export default function NewsComponents(props) {
  return (
    <div>
      <div className="card my-2" >
            <img src= {!props.urlToImage?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbBsaGBhLRmoYRlbWV8cW_1RnLuJYu6n2LpeQrcpj&s":props.urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}...</p>
                <a rel="noreferrer" href={props.url} target="_blank" className="btn btn-primary btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
  );
}
