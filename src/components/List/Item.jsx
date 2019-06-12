import React from 'react'

// business
// arrival: "Antalya"
// arrivalTime: 1564410656
// departure: "Ankara"
// departureTime: 1561627856

// cheap:
// arrival: 1558902656
// departure: 1558902656
// route: "Cruz del Eje-Antalya"

const Item = ({ route, arrival, arrivalTime, departure, departureTime }) => (
  <div>
    <p>route: {route}</p>
    <p>arrival: {arrival}</p>
    <p>arrivalTime: {arrivalTime}</p>
    <p>departure: {departure},</p>
    <p>departureTime: {departureTime}</p>
  </div>
)

export default Item
