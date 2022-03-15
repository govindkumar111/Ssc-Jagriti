import React from 'react'
import './Events.css'

function Events(props) {
  function overView(){
    console.log("overViewoooo");
    props.setEvents(`dheiufheijf`);
  }


  return (
    <>
    <div className="events">
        <span className="competitions">
          Competitions
        </span>
        <span className="guest">
          Guest Talks
        </span>
        <p className='para'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Quaerat ad iste ipsa omnis molestias, modi sunt iusto nisi
            necessitatibus consequuntur ducimus laborum saepe cumque
             alias unde non expedita molestiae excepturi.
             </p>
        </div>
        <div>
          <div className='row'>
          <div className='col-sm'>
            <img id="images" src={require('../Assets/events.png')} alt="" />
          </div>
          <div className='col-sm tags'>
            <div className="row">
              <div className="col-sm" id='overview' onClick={overView}>
              Overview
              </div>
              <div className="col-sm" id='timeline' onClick={props.timeLine}>
              Timeline
              </div>
              <div className="col-sm" id='contacts' onClick={props.contacts}>
              Contacts
              </div>
            </div>
            <div className="row" id='special'>
              {props.events}
            </div>
          </div>
          </div>
          </div>




    </>
  )
}
Events.defaultProps = {
  events : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore consequuntur distinctio enim velit minima et sunt quas quibusdam, animi consectetur error pariatur soluta. Odit iste nemo officia numquam ut!`

}

export default Events
