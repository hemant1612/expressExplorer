import React from 'react'
import {Divider, Image,Rating} from 'semantic-ui-react'
import './SearchResult.css';


export const SearchResult = (props) => (<div>
  <div className="result-root">
      {
        props
          .data
          .map((v, i) =>
          (
            <div className="image-main">
            <div className="image-cover" key={i}>
              <a href={v.url}>
                <Image src={v.image_url} width="200px" height="200px"/>
              </a>

            </div>
            <div className="image-desc" key={v.id}>
               <h4>{v.name}</h4>
               <a title="RSVP"><Rating icon='heart' defaultRating={0} maxRating={1} /></a>
                &nbsp; |&nbsp;
              <Rating icon='star' defaultRating={v.rating} maxRating={5} disabled/>



            </div>
          </div>))
      }
  </div>
</div>)

export default SearchResult
