import React from 'react';
import styled from 'styled-components';
import BaseCheckbox from '../RoomType/Checkbox';
import down from '../../../assets/arrowDown.svg';

export const AmenitiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: block;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-family: 'Circular Air', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 24px;
  }
`;

export const HideSm = styled.span`
  display: none;
  @media screen and (min-width: 576px) {
    display: inline;
  }
`;

export const Content = styled.div`
  display: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 16px;
  }
`;

export const CheckboxWrapper = styled.label`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 50%;
  display: flex;
  align-items: center;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
`;

export const Checkbox = styled(BaseCheckbox)``;

export const ExpandButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  color: #0f7276;
  font-family: 'Circular Air Light', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Icon = styled.img`
  margin-left: 6px;
`;

export const Name = styled.span`
  margin-left: 12px;
`;

export default function (props) {
  return (
    <AmenitiesWrapper>
      <Title>Amenities</Title>
      <Content>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.amenities.heating}
            name="heating"
            handleChange={props.onChange}
          />
          <Name>Heating</Name>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.amenities.kitchen}
            name="kitchen"
            handleChange={props.onChange}
          />
          <Name>Kitchen</Name>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox isChecked={props.amenities.tv} name="tv" handleChange={props.onChange} />
          <Name>TV</Name>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox isChecked={props.amenities.wifi} name="wifi" handleChange={props.onChange} />
          <Name>Wireless Internet</Name>
        </CheckboxWrapper>
      </Content>
      <ExpandButton>
        See all <HideSm>amenities</HideSm> <Icon src={down} />
      </ExpandButton>
    </AmenitiesWrapper>
  );
}
