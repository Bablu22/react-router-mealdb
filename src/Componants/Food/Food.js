import React from 'react';
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { useHistory } from 'react-router';

const Food = (props) => {
    const { strMeal, strMealThumb, strCategory, strArea, idMeal } = props.item

    const history = useHistory()
    const seeMoreButton = () => {
        history.push(`/food/${idMeal}`)
    }
    return (
        <div className="mb-9">

            <Card className="h-full">
                <CardImage
                    src={strMealThumb}
                    alt="Card Image"
                />
                <CardBody>
                    <H6 color="gray">{strMeal}</H6>
                    <Paragraph color="gray">
                        Category: {strCategory}
                    </Paragraph>
                    <Paragraph color="gray">
                        varieties : {strArea}
                    </Paragraph>
                </CardBody>

                <CardFooter>
                    <Button onClick={seeMoreButton} color="lightBlue" size="lg" ripple="light">
                        Read More
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Food;