import React, {useState, useEffect} from 'react'
import {RestaurantCard} from "./";

import {resList} from "../utils/mockData"

const Body = () => {

    const [listData, setListData] = useState([]);

    
    useEffect(() => {
      setListData(resList);
    }, [resList])

    const setTopRatedRes = () => {
      const topRestaurants = resList.filter(({data}) => data.avgRating >= 4) 
      setListData(topRestaurants);
    }

    return (
      <div className="body">
        {/* Search area */}

        {/* <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button>
        </div> */}
        <div className="filter">
          <button className="filter-btn" onClick={() => setTopRatedRes()}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listData.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body