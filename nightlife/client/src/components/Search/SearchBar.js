import React from 'react';
import { Input } from 'semantic-ui-react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city : '',
      sortBy : 'rating',
    }
  }

componentWillReceiveProps(nextProps) {
  console.log(nextProps)
}

handleChange(e){
  this.setState({city : e.target.value})
  this.props.getSearchList(this.state.city, 'rating');
}


  render(){
    let {withSearchResult, searchList} = this.props;
    return (
      <div>
        <Input size='large' icon='search' placeholder='Search...'
          onChange = {this.handleChange.bind(this)}/>
      </div>
    )
  }

}

export default SearchBar
