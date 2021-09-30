import React from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
const Details = (props) => {
    const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = props.item
    return (
        <div>
            <Card>
                <div className="mt-11">
                    <div className="">
                        <CardImage
                            src={strMealThumb}
                            alt="Card Image"

                        />
                    </div>
                    <div className="">

                        <CardBody>
                            <H6 color="gray">{strMeal}</H6>
                            <Paragraph color="black">
                                {strInstructions}
                            </Paragraph>
                            <Paragraph color="gray">
                                Category: {strCategory}
                            </Paragraph>
                            <Paragraph color="gray">
                                varieties : {strArea}
                            </Paragraph>
                        </CardBody>

                        <CardFooter>
                            <Button onClick={() => props.handleOrder(props.item)} color="teal" size="lg" ripple="light">
                                Order Now
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Details;