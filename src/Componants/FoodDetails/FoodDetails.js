import Button from '@material-tailwind/react/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import OrderdFood from '../OrderdFood/OrderdFood';

const saveToLoaclStore = () => {
    let list = localStorage.getItem('cart')
    if (list) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    else {
        return []
    }
}

const FoodDetails = () => {

    const { foodId } = useParams()
    const [foods, setFoods] = useState([])
    const [orderdFood, setOrderdFood] = useState(saveToLoaclStore);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    const orderItem = item => {
        const newItem = [...orderdFood, item]
        setOrderdFood(newItem)
    }

    const removeOrder = item => {
        const remove = orderdFood.filter(ml => ml.idMeal !== item.idMeal)
        setOrderdFood(remove);
    }

    // Save to local storage

    useEffect(() => {
        return localStorage.setItem('cart', JSON.stringify(orderdFood))
    }, [orderdFood])


    return (
        <div className="container">
            <div className="grid lg:grid-cols-2 gap-4 lg:px-20 h-2/5">
                <div>
                    {
                        foods.map(item => <Details
                            key={item.idMeal}
                            item={item}
                            handleOrder={orderItem}
                        ></Details>)
                    }
                </div>
                <div className="p-11">
                    <h1 className="p-5 mb-10 rounded bg-green-700 text-white">Total Order: {orderdFood.length}
                        <Button
                            color="deepOrange"
                            buttonType="filled"
                            size="sm"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                        >
                            <Link to="/account">Purchase</Link>

                        </Button>
                    </h1>

                    {
                        orderdFood.map(item => <OrderdFood
                            key={item.idMeal}
                            item={item}
                            removeOrder={removeOrder}
                        ></OrderdFood>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;