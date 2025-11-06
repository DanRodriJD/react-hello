import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Information = [
    { 
        title: "Card title", 
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti laborum adipisci quaerat?", 
        buttonText: "Find Out More!" 
    },
    { 
        title: "Card title", 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit a ipsa harum. Unde cupiditate maxime a totam?",
        buttonText: "Find Out More!" 
    },
    { 
        title: "Card title", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates voluptatibus qui?", 
        buttonText: "Find Out More!" 
    },
    { 
        title: "Card title", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ut a voluptatibus nisi labore dignissimos sunt suscipit?", 
        buttonText: "Find Out More!" 
    },
];


const Navbar = () => {
    return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#!">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

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
    )
};


const CardSection = () => {
    return (
        <section className="pt-2">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    {Information.map((item, index) => (
                        <Card 
                            key={index}
                            title={item.title} 
                            description={item.description}
                            buttonText={item.buttonText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">
                    Copyright &copy; Your Website 2025
                </p>
            </div>
        </footer>
    )
}

const Home = () => {
	return (
       <>
            <Navbar />
            <Jumbotron />
            <CardSection />
            <Footer />
        </>
    );
};

export default Home;