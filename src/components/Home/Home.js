import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import { connect } from 'react-redux';
import WayPoint from 'react-waypoint';
import { getPhotosAction } from '../../actions/photos';
import PhotosList from '../PhotosList/PhotosList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
    };
  }

  componentDidMount() {
    this.callAction(1);
  }

  callAction(pageNum) {
    this.props.getPhotosAction(pageNum);
  }

  loadMoreItems() {
    let { pageNum } = this.state;
    pageNum += 1;
    this.callAction(pageNum);
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
    const { photosList } = this.props;
    return (
      <Container className="custom-container">
        {photosList && (
          <React.Fragment>
            <PhotosList photosList={photosList} />
            {this.renderWaypoint()}
          </React.Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ photosReducer }) => {
  const { photosList } = photosReducer;
  return { photosList };
};

export default connect(mapStateToProps, { getPhotosAction })(Home);
