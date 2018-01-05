import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  margin-top: 48px;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
`;

export const Card = styled.div``;

export const CardName = styled.a`
  font-family: "CircularAir", Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 15px;
  color: #383838;
`;

export const CardPrice = styled.span`
  font-family: "Circular_Air-Bold";
  line-height: 1.1rem;
  padding-right: 0.5rem;
  line-height: normal;
  font-size: 15px;
  color: #383838;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
`;

export const Slider = styled.div``;

export const SeeAll = styled.a`
  display: inline-block;
  font-family: CircularAir;
  padding-top: 10px;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  text-decoration: none;
  color: #383838;

  ::after {
    content: ">";
    padding-left: 8px;
    vertical-align: bottom;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 8px;
`;

// export const SliderArrow = styled.button`
//   position: absolute;
//   top: center;
//   right: -0.75rem;
//   width: 2.5rem;
//   height: 2.5rem;
//   box-sizing: border-box;
//   background-color: #fff;
//   background-image: url(${arrowRight});
//   background-repeat: no-repeat;
//   background-size: 0.6rem 1.1rem;
//   background-position: center center;
//   border: 0.05rem solid rgba(72, 72, 72, 0.2);
//   box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.16);
//   border-radius: 1.25rem;
//   cursor: pointer;
// `;
