import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';
import { css } from "@emotion/react";
import { HashLoader } from 'react-spinners';
const Home = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))


    }, [searchText])



    const searchValueHandle = (e) => {
        const searchValue = e.target.value

        setSearchText(searchValue);
    }
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#8e44ad");
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  loading: true;
`;
    return (

        <div>
            <div>
                <Header
                    handele={searchValueHandle}
                ></Header>
            </div>
            {
                meals.length === 0 ?
                    <div className="sweet-loading">

                        <HashLoader color={color} loading={loading} css={override} size={150} />
                    </div>

                    : <div className="lg:grid grid-cols-4 gap-5 p-11">
                        {
                            meals.map(item => <Food
                                key={item.idMeal}
                                item={item}
                            ></Food>)
                        }
                    </div>
            }






        </div>


    );
};

export default Home;