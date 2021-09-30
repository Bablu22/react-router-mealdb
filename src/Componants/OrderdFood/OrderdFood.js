import React from 'react';
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";

import Button from '@material-tailwind/react/Button';
const OrderdFood = (props) => {
    const { strMeal, strMealThumb, } = props.item
    return (
        <div className="mb-10">
            <Card>
                <CardRow>
                    <CardHeader color="gray" size="lg" iconOnly>
                        <img src={strMealThumb} alt="" />
                    </CardHeader>

                    <CardStatus title="Name:" amount={strMeal} />
                </CardRow>

                <CardStatusFooter >
                    <Button
                        onClick={() => props.removeOrder(props.item)}
                        color="indigo"
                        buttonType="filled"
                        size="lg"
                        rounded={false}
                        block={true}
                        iconOnly={false}
                        ripple="light"
                    >
                        Cancle Order
                    </Button>
                </CardStatusFooter>
            </Card>
        </div>
    );
};

export default OrderdFood;