import React from 'react'
import {Input} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchSearchList, toggleAndUpdateRsvp} from '../../assets/action'
import {formatSearchList} from '../../assets/helper'
import {getSearchList , test} from '../../assets/client'
import SearchBar from './SearchBar'
import { SearchResult } from './SearchResult'

import './Search.css'

class Search extends React.Component {

  static propTypes = {
    userInfo: PropTypes.object,
    token: PropTypes.string,
    city: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool,
    sortBy: PropTypes.string,
    getSearchList: PropTypes.func,
    toggleRsvpAction: PropTypes.func
  }


   getSearchList = ( city , sortBy='rating' ) => {
     this.props.getSearchList(city,sortBy);
   }

   handleRsvpAction = (id, info) => {
     this.props.toggleRsvpAction(id, info);
   }


  render() {
     let { city, sortBy, searchList, error, token, userInfo } = this.props;
     let withSearchResult = !!searchList.length;
     let searchListDisplay = formatSearchList(searchList,userInfo.rsvps);
     return (
      <div className="search-root">
        <div className="search-bar">
          <SearchBar
            getSearchList={this.props.getSearchList}
            city={city}
            searchList={searchListDisplay}
            withSearchResult={withSearchResult}
           />
        </div>
          <SearchResult data={searchList} />
      </div>
    )
   }
}

const mapStateToProps = state => ({
  ...state.search,
  token: state.account.token,
  userInfo: state.account.userInfo
})

const mapDispatchToProps = dispatch => ({
  getSearchList: (city, sortBy) => dispatch(fetchSearchList(city, sortBy)),
  toggleRsvpAction: (id, info) => dispatch(toggleAndUpdateRsvp(id, info))
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
