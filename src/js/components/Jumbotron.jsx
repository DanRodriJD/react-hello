import React from "react";

const Jumbotron = () => {
    return (
        <header className="py-5">
            <div className="container px-5">
                <div className="bg-light p-5 mt-5"> 
                    <div className="col-lg-11 col-xxl-11">
                        <div className="text-start"> 
                            <h1 className="fw-bolder mb-3 display-3">A Warm Welcome!</h1>
                            <p className="lead text-muted mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit ab repellendus perferendis accusantium expedita placeat. Vitae nulla repudiandae odio qui, rerum ut sit minus eos voluptas ratione id provident?
                            </p>
                            <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Jumbotron;