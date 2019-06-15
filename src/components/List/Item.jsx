import React from 'react'

const Item = ({ route, arrival, departure }) => (
  <div>
    <p>route: {route}</p>
    <p>arrival: {arrival}</p>
    <p>departure: {departure},</p>
    <br />
    <hr />
    <br />
  </div>
)

export default Item
