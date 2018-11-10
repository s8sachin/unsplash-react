import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import { connect } from 'react-redux';
import { getPhotosAction } from '../../actions/photos';
import PhotosList from '../PhotosList/PhotosList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getPhotosAction(1);
  }

  render() {
    const { photosList } = this.props;
    return (
      <Container className="custom-container">
        {photosList && <PhotosList photosList={photosList} />}
      </Container>
    );
  }
}

const mapStateToProps = ({ photosReducer }) => {
  const { photosList } = photosReducer;
  return { photosList };
};

export default connect(mapStateToProps, { getPhotosAction })(Home);
