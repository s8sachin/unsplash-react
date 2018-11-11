import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import WayPoint from 'react-waypoint';
import qs from 'qs';
import PhotosList from '../PhotosList/PhotosList';
import { searchPhotosAction } from '../../actions';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    const query = this.getQuery();
    this.state = {
      pageNum: 1, query,
    };
  }

  componentDidMount() {
    const { query, pageNum } = this.state;
    this.callAction(query, pageNum, true);
  }

  componentDidUpdate(prevProps) {
    const queryParam = this.getQuery();
    const { query } = this.state;
    if (this.props !== prevProps && (query !== queryParam)) {
      this.callAction(queryParam, 1, true);
      this.setState({ pageNum: 1, query: queryParam });
    }
  }

  getQuery() {
    const { query } = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    return query;
  }

  callAction(search, pageNum, newSearch) {
    this.props.searchPhotosAction(search, pageNum, newSearch);
  }

  loadMoreItems() {
    let { pageNum, query } = this.state;
    pageNum += 1;
    this.callAction(query, pageNum, false);
    this.setState({ pageNum });
  }

  renderWaypoint() {
    return (
      <WayPoint
        onEnter={() => this.loadMoreItems()}
        // threshold={100}
        topOffset="20%"
        // bottomOffset="-60%"
        fireOnRapidScroll
      >
        {/* <center><span>Loading ...</span></center> */}
      </WayPoint>
    );
  }

  render() {
    const { searchedPhotosList, searchVal } = this.props;
    return (
      <React.Fragment>
        <Container className="custom-container">
          {searchedPhotosList && (
            <React.Fragment>
              <span className="searchVal">Found <b>{searchVal.total}</b> results for <b>{searchVal.searchVal}</b></span>
              <PhotosList photosList={searchedPhotosList} />
              {this.renderWaypoint()}
            </React.Fragment>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ photosReducer }) => {
  const { searchedPhotosList, searchVal } = photosReducer;
  return { searchedPhotosList, searchVal };
};

export default connect(mapStateToProps, { searchPhotosAction })(SearchPage);
