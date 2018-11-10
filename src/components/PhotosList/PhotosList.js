
import React from 'react';
import {
  Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg,
} from 'reactstrap';
import './PhotosList.scss';

class Header extends React.Component {
  render() {
    const { photosList } = this.props;
    console.log(photosList);
    return (
      <div className="photosList">
        {photosList.map(photo => (
          <React.Fragment key={photo.id}>
            <Card>
              <CardImg top width="100%" src={photo.urls.small} alt="img" />
              {/* <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody> */}
            </Card>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default (Header);
