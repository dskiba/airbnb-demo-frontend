import React from 'react';
import {
  AmenitiesWrapper,
  Title,
  Name,
  Content,
  CheckboxWrapper,
  Checkbox,
  ExpandButton,
  HideSm,
  Icon,
} from '../Amenities';
import down from '../../../assets/arrowDown.svg';

const Facilities = AmenitiesWrapper.extend`
  margin-bottom: 60px;
  @media screen and (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export default function (props) {
  return (
    <Facilities>
      <Title>Facilities</Title>
      <Content>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.elevator}
            name="elevator"
            handleChange={props.onChange}
          />
          <Name>Elevator</Name>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.freeParking}
            name="freeParking"
            handleChange={props.onChange}
          />
          <Name>Free parking on premises</Name>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox isChecked={props.facilities.pool} name="pool" handleChange={props.onChange} />
          <Name>Pool</Name>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.wheelchairAccessible}
            name="wheelchairAccessible"
            handleChange={props.onChange}
          />
          <Name>Wheelchair accessible</Name>
        </CheckboxWrapper>
      </Content>
      <ExpandButton>
        See all <HideSm>facilities</HideSm> <Icon src={down} />
      </ExpandButton>
    </Facilities>
  );
}
