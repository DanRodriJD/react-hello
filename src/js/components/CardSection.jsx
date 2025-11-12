import React from "react";
import Card from "./Card";
import {Information} from "../Information";

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

export default CardSection;