import React, { Component } from 'react'

export  class NewsItem extends Component {
    render() {
       let {title , description , imageUrl , newsUrl} = this.props;
        return (
            <div>
                <div  className="card my-3 mx-3" >
  <img src={!imageUrl?"https://www.presse-citron.net/app/uploads/2022/01/Ford-Bourse-performance.jpg":imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a rel ="noreferrer" href={newsUrl}  className="btn  btn-sm btn-primary">Read More</a>
  </div>
</div>
            </div>
        )  
    }
}

export default NewsItem


// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     render() {
//         let {title, description, imageUrl, newsUrl} = this.props;
//         return (
//             <div className="my-3">
//                 <div className="card" style={{width: "18rem"}}>
//                     <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem
