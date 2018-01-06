import styled from "styled-components";
import arrow from "../Footer/arrow.svg";
import Row from "react-flexbox-grid";

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

export const Card = styled.div`
  position: relative;
`;

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

export const Img = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 8px;
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;

  box-sizing: border-box;
  margin-left: -5px;
  margin-right: -5px;
`;

export const SliderArrow = styled.button`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;

    box-sizing: border-box;
    right: -12px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center center;
    border: 0.05rem solid rgba(72, 72, 72, 0.2);
    box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.16);
    border-radius: 20px;
    cursor: pointer;
    z-index: 3;
    transform: rotate(-90deg);
  }
`;

export const SeeAll = styled.a`
  display: block;
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
