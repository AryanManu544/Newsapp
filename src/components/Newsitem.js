import React, {Component} from "react";

export class Newsitem extends Component{

    render(){
        let {title,description,imageurl,newsurl,author,date,source} = this.props;
        return(
            <div>
                <div className="card" style={{width: "24 rem"}}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"88%",zIndex:1}}>
    {source}
  </span>
                    <img src={imageurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...
  
</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} target= "_blank" className="btn btn-primary">Read more</a>
                    </div>
                    </div>
            </div>
        )
    }
}
export default Newsitem