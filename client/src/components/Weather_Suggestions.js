import React from "react"; 

//help from https://www.cleverhiker.com/lightweight-backpacking-food-guide-meal-planning-nutrition/
//          https://www.rei.com/learn/expert-advice/cold-weather-hiking.html
//          https://www.rei.com/learn/expert-advice/hot-weather-hiking.html

//Clothing, Food, Materials
//32 degrees and below
const cold = [
        ["Heavy Jacket, Fleece Gloves, Wool Socks, Thermal, Long Sleeve, Balaclava, Leggings, Pants, Boots"], 
        ["Coffee, Trail Mix, Cheese, Oatmeal, Gatorade, Water, Tuna, Tortillas, Ramen, Candy"],
        ["Mini Stove, Cookpot, Spoon, Thermos, Head Lamp, Batteries, Goggles, Compass, Matches, Knife"]
    ];

//33 - 60
const chilly = [
        ["Jacket, Long Sleeve, Pants, Gloves, Beanie, Shirts, Gloves, Wool Socks, Shoes or Boots"],
        ["Water, Coffee, Trail Mix, Bars, Jerky, Gatorade, Chicken, Instant Soup, Ramen"],
        ["Mini Stove, Cookpot, Spoon, Flask, Head Lamp, Batteries, Compass, Matches, Knife"]
    ];

//61 - 75   
const cool = [
        ["Long Sleeve, Pants, Gloves, Beanie, Shirts, Gloves, Wool Socks, Shoes or Boots"],
        ["Water, Coffee, Trail Mix, Bars, Jerky, Gatorade, Chicken, Instant Soup, Ramen"],
        ["Mini Stove, Cookpot, Spoon, Flask, Head Lamp, Batteries, Compass, Matches, Knife"]
    ];

//75-85
const warm = [
        ["Shoes, Shirt, Shorts, Sunglasses, Hat, Khaki, Synthetic Socks, Bandana"],
        ["Water, Coffee, Trail Mix, Bars, Jerky, Gatorade, Chicken, Cous Cous, Bagels"],
        ["Mini Stove, Cookpot, Sunscreen, Flask, Compass, Matches, Knife, Squirt Bottle"]
    ];

//85+
const hot = [
        ["Shoes, Shirt, Shorts, Sunglasses, Hat, Khaki, Synthetic Socks, Bandana"],
        ["Water, Coffee, Trail Mix, Bars, Jerky, Gatorade, Chicken, Cous Cous, Bagels"],
        ["Mini Stove, Cookpot, Sunscreen, Flask, Compass, Matches, Knife, Squirt Bottle"]
    ];

const Weather_Suggestions = (props) => (

	<div>
		<h1 className="title-container__title">Suggestions Based on Weather</h1>
        { 	
            props.temperature < 33 &&
            <div>
                <p className="sug__key"> Clothing: 
                    <span className="sug__value"> {cold[0]}	</span>
                </p> 
                <p className="sug__key"> Food:
                    <span className="sug__value"> {cold[1]}	</span>
                </p> 
                <p className="sug__key"> Gear: 
                    <span className="sug__value"> {cold[2]}	</span>
                </p> 
            </div>
	     }

        { 	
            props.temperature > 32 && props.temperature < 61 &&
            <div>
                <p className="sug__key"> Clothing: 
                    <span className="sug__value"> {chilly[0]}	</span>
                </p> 
                <p className="sug__key"> Food:
                    <span className="sug__value"> {chilly[1]}	</span>
                </p> 
                <p className="sug__key"> Gear: 
                    <span className="sug__value"> {chilly[2]}	</span>
                </p> 
            </div>
	    }

        { 	
            props.temperature > 60 && props.temperature < 75 &&
            <div>
                <p className="sug__key"> Clothing: 
                    <span className="sug__value"> {cool[0]}	</span>
                </p> 
                <p className="sug__key"> Food:
                    <span className="sug__value"> {cool[1]}	</span>
                </p> 
                <p className="sug__key"> Gear: 
                    <span className="sug__value"> {cool[2]}	</span>
                </p> 
            </div>
	    }

        { 	
            props.temperature > 74 && props.temperature < 86 &&
            <div>
                <p className="sug__key"> Clothing: 
                    <span className="sug__value"> {warm[0]}	</span>
                </p> 
                <p className="sug__key"> Food:
                    <span className="sug__value"> {warm[1]}	</span>
                </p> 
                <p className="sug__key"> Gear: 
                    <span className="sug__value"> {warm[2]}	</span>
                </p> 
            </div>
	    }

        { 	
            props.temperature > 85 &&
            <div>
                <p className="sug__key"> Clothing: 
                    <span className="sug__value"> {warm[0]}	</span>
                </p> 
                <p className="sug__key"> Food:
                    <span className="sug__value"> {warm[1]}	</span>
                </p> 
                <p className="sug__key"> Gear: 
                    <span className="sug__value"> {warm[2]}	</span>
                </p> 
            </div>
	    }
         
	</div>
);

export default Weather_Suggestions