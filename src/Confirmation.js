
import React from "react";
export default function confrimation(props) {
  const { order } = props;
  if (!order) {
    return <h3>Working fetching your data</h3>
}
  return (
    <>
        <h1>Thank You For Ordering</h1>
        <br/>
        <h2> The Pizza is on its way</h2>
        <br/>
    </>
  );
}