import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4"> 
            <div className="card h-100">
                <img className="card-img-top" src="https://placehold.co/500x325/AAAAAA/000000?text=500x325" alt={props.title} />
                <div className="card-body p-4 text-center">
                    <h5 className="card-title mb-3">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-light">
                    <div className="text-center">
                        <a className="btn btn-primary" href="#!">{props.buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string
};

export default Card;