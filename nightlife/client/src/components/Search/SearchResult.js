import React from 'react'
import { Divider, Image } from 'semantic-ui-react'
import './SearchResult.css'

export const SearchResult = (props) => (
  <div>
    <div className="result-root">
      <Image.Group >
        {
          props.data.map( (v,i) => (
          <div className="image-cover" key={i} >
            <Image src={v.image_url} width="200px" height="200px"/>
          </div>
          ))
        }
      </Image.Group>
    </div>
  </div>
)

export default SearchResult
