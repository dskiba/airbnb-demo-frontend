import React from "react";
import Responsive from "react-responsive";

export const Md = props => (
  <Responsive {...props} minWidth={576} maxWidth={991} />
);
export const Sm = props => <Responsive {...props} maxWidth={575} />;
export const Lg = props => <Responsive {...props} minWidth={992} />;
