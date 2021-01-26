import React from "react"
import Moment from 'moment';

export const EventCard = (props) => {

    return (
        <section className="card__event">
          <h3 className="card__title">{props.event.name}</h3>
          <div className="card__date">{Moment(props.event.date).format("MMM Do YYYY")}</div>
          <div className="card__attending">Attending: {props.event.attendance}</div>
          <div className="card__location">In {props.event.locationCity}, {props.event.locationStateCode}</div>
          {props.technical ? <div className="card__technical">Looking for: {props.technical.type}</div> : ""}
        </section>
        )
}