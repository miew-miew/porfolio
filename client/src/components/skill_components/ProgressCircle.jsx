import { useState, useEffect } from "react";
import "./index.css"

function ProgressCircle({ skill, percentage }) {
  const [counter, setCounter] = useState(0)

  let interval = null;

  useEffect(() => {
    interval = setInterval(() => {
      if(counter < percentage){
        setCounter(counter + 1);
      }
    }, 23) 

    return () => {
      clearInterval(interval)
    }
  }) 

  return(
    <div className="item-container">
      <div className="item">
        <div className="outer">
          <div className="inner">
            <div className="number">
              <h2> {counter} <span>%</span> </h2>
            </div>
          </div>
        </div>
        <p>{skill}</p>
        <svg>
          <circle cx="80" cy="80" r="70" strokeLinecap="round" strokeDashoffset={450 - (counter / 100) * 450}></circle>
        </svg>
      </div>
    </div>
  )
}

export default ProgressCircle;