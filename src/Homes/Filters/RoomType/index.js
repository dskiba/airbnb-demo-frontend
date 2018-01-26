import React from 'react';
import isEqual from 'lodash/isEqual';

import Dropdown from '../Dropdown';
import Filter from './Types';

const getRoomsNumber = rooms => rooms.entire + rooms.privat + rooms.shared;

const getTitle = (roomtype) => {
  if (getRoomsNumber(roomtype) > 1) {
    return `Room Type ⋅ ${getRoomsNumber(roomtype)}`;
  }
  if (roomtype.entire) return 'Entire home';
  if (roomtype.privat) return 'Private room';
  if (roomtype.shared) return 'Shared room';
  return 'Room Type';
};

export default class RoomTypes extends React.Component {
  initialValues = {
    roomtype: {
      entire: false,
      privat: false,
      shared: false,
    },
  };

  state = this.initialValues;

  onChange = (values) => {
    this.setState(prevState => ({
      roomtype: {
        ...prevState.roomtype,
        ...values,
      },
    }));
  };

  onApply = () => this.props.onApply({ roomtype: this.state.roomtype });

  onReset = () => this.setState(this.initialValues);

  render() {
    return (
      <Dropdown
        name="Room Type"
        isOpen={this.props.isOpen}
        isActive={!isEqual(this.state, this.initialValues)}
        activeTitle={getTitle(this.state.roomtype)}
        onClick={this.props.onClick}
        onApply={this.onApply}
        onReset={this.onReset}
        isCancelOrReset={isEqual(this.state.roomtype, this.initialValues.roomtype)}
      >
        <Filter roomtype={this.state.roomtype} onChange={this.onChange} />
      </Dropdown>
    );
  }
}
