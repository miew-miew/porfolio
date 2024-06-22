import "./index.css"

function ProgressCircle() {
    return(
        <div className="container">
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                        <h2>80 <span>%</span> </h2>
                    </div>
                </div>
                <h2 className="text">HTML, CSS</h2>
            </div>
        </div>
        
    )
}

export default ProgressCircle;