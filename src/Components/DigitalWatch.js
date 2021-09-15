import React, { useEffect, useState } from "react";
let Sagar = () => {
    let [start, setStart] = useState(
        {
            currentTime: new Date().toLocaleTimeString()

        }
    )
    useEffect(() => {
        let time = setInterval(() => {
            setStart(
                {
                    currentTime: new Date().toLocaleTimeString()
                }
            )
        }, 1000)
        return () => {
            clearInterval(time)
        }
    }, [])
    return (
        <React.Fragment>
            <section className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-center text-danger">
                                <h3>Digital Watch</h3>
                            </div>
                            <div className="card-body bg-light text-center">
                                <h4>{start.currentTime}</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Sagar;