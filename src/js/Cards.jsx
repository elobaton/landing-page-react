import React from "react";



const Cards = () => {
    return (
        <div className="card-group">
            <div className="card mx-4 my-4 rounded-top border-secondary">
                <img src="https://picsum.photos/id/233/500/325" className="card-img-top w-100% rounded-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
            <div className="card mx-4 my-4 border-secondary">
                <img src="https://picsum.photos/id/27/500/325" className="card-img-top " alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
            <div className="card mx-4 my-4 border-secondary">
                <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
            <div className="card mx-4 my-4 border-secondary">
                <img src="https://picsum.photos/id/297/500/325" className="card-img-top" alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus viverra nisi quis aliquet.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
        </div> 
    )
}

        
export default Cards;