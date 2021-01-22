import * as React from "react";
import PropTypes from "prop-types";
import { Dot } from "pure-react-carousel";
import { Button, Container } from "semantic-ui-react";

const CarouselDotGroup = ({ slides, size }) => (
  <Container textAlign="center">
    <Button.Group size={size}>
      {[...Array(slides).keys()].map(slide => (
        <Button as={Dot} key={slide} icon="circle" slide={slide} />
      ))}
    </Button.Group>
  </Container>
);

CarouselDotGroup.defaultProps = {
  size: "mini"
};

CarouselDotGroup.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
};

export default CarouselDotGroup;
