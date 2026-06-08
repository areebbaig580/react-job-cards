import React from 'react'


function Card(props) {
  return (
    <div className='card'>
      <div className="card-top">
        <img src={props.img} alt="" />
        <div className="save-box">Save</div>
      </div>
      <div className="card-mid">
        <div className="mid1">
          <div className="company-name">{props.company}</div>
          <div className="days-ago">{props.posted}</div>
        </div>
        <div className="mid2">{props.post}</div>
        <div className="mid3">
          <div className="job-info">{props.tag1} </div>
          <div className="job-info">{props.tag2} </div>
        </div>
      </div>
      <div className="card-btm">
        <div className="btm1">
          <div className="pay">{props.pay} </div>
          <div className="place">{props.place} </div>
        </div>
        <div className="apply-btn">Apply now</div>
      </div>
    </div>
  )
}


export default Card
