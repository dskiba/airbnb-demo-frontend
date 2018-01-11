import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Wrapper = styled.section`
  display: none;
  box-sizing: border-box;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    top: 136px;
    right: 0;
    bottom: 0;
    width: 33%;
  }
`;

const Place = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: darkorange;
`;

class GoogleMap extends React.Component {
  static defaultProps = {
    center: [48.239811, 16.375931],
    zoom: 2
  };

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBCA8KZzxZIbUOjhHnApX5KuC_z - lKeLnQ"
          }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <Place lat={48.209619} lng={16.347093} text={"Airbnb"} />
          <Place lat={55.751244} lng={55.751244} text={"Moscow"} />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default GoogleMap;
