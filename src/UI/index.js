import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import Row from "react-flexbox-grid";

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 48px;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  @media (min-width: 768px) {
    line-height: 34px;
    font-size: 32px;
  }
`;

export const Reviews = styled.span`
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

export const Card = styled.div`
  position: relative;
`;

export const CardName = styled.a`
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 7px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const CardPrice = styled.span`
  display: inline-block;
  font-family: "Circular Air Bold", Helvetica Neue, Helvetica, Arial, sans-serif;
  padding-right: 0.5rem;
  font-size: 13px;
  line-height: 15px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Link = styled(RouteLink)`
  display: block;
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 8px;
`;

export const Slider = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-right: -8px;
  margin-left: -8px;
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
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  margin-right: 20px;
  font-family: "Circular Air", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 24px;
  text-decoration: none;
  white-space: nowrap;
  color: #383838;
  @media only screen and (min-width: 992px) {
    font-size: 14px;
  }

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 7px;
    width: 12px;
    box-sizing: border-box;
    top: 9px;
    margin-left: 8px;
    padding-left: 8px;
    vertical-align: bottom;
    background-color: #fff;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center center;
    background-cover: cover;
    border: none;
    transform: rotate(-90deg);
  }
`;

export const FilterButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  color: #383838;
  margin: 0.75rem 0.75rem 0.75rem 0;
  transition: background-color 0.2s ease-out;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-family: "CircularAir Normal";
  background: ${props => (props.selected ? "#008489" : "#fff")};
  border: 1px solid
    ${props => (props.selected ? "#008489" : " rgba(72, 72, 72, 0.2);")};
  color: ${props => (props.selected ? "#fff" : "#383838")};
`;

export const Fade = styled.div`
  position: fixed;
  z-index: -1;
  top: 8rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
`;
