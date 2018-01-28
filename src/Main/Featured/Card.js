import React from 'react';
import { Link, Img, CardName } from '../../UI';

const City = CardName.extend`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 768px) {
    line-height: 18px;
    font-size: 15px;
  }
`;

export default props => (
  <React.Fragment>
    <Link to={props.link}>
      <Img src={props.imgSrc} alt={props.imgAlt} />
      <City>{props.city}</City>
    </Link>
  </React.Fragment>
);
