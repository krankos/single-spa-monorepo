import React from "react";
import Parcel from "single-spa-react/parcel";

export default class ParcelPage extends React.Component {
  render() {
    return (
      <div>
        
        <Parcel config={() => System.import("vue-parcel")} wrapWith="div" />
      </div>
    );
  }
}
