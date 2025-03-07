import "./Menu.css"

const meals = [
	{
		week: 1,
		name: " Crispy Lemon Herb Chicken",
		description:
			"A flavorful dish featuring tender chicken marinated in zesty lemon and fresh herbs, then baked to golden perfection for a delightful crunch. Perfectly paired with a side of roasted vegetables for a complete meal",
		price: "10.00"
	},
	{
		week: 2,
		name: " Crispy Lemon Herb Chicken",
		description:
			"A flavorful dish featuring tender chicken marinated in zesty lemon and fresh herbs, then baked to golden perfection for a delightful crunch. Perfectly paired with a side of roasted vegetables for a complete meal",
		price: "10.00"
	},
	{
		week: 3,
		name: " Crispy Lemon Herb Chicken",
		description:
			"A flavorful dish featuring tender chicken marinated in zesty lemon and fresh herbs, then baked to golden perfection for a delightful crunch. Perfectly paired with a side of roasted vegetables for a complete meal",
			price: "10.00"
	},
	{
		week: 4,
		name: " Crispy Lemon Herb Chicken",
		description:
			"A flavorful dish featuring tender chicken marinated in zesty lemon and fresh herbs, then baked to golden perfection for a delightful crunch. Perfectly paired with a side of roasted vegetables for a complete meal",
			price: "10.00"
	},
];

const Menu = () => {
	return (
		<div className="menu-container">
			<div className="menu-header">
			<h1>MENU</h1>
				</div>
			<div className="grid-container">
				{meals.slice(0, 4).map((meal, index) => (
					<div className="meal-card" key={index}>
						<h2 className="meal-title">Week One</h2>
						<h4 className="meal-name">{meal.name}</h4>
						<p className="meal-info">{meal.description}</p>
						<p className="meal-info"><em>Price:</em> ${meal.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

//npm install @sanity/client @sanity/image-url @portabletext/react

export default Menu;
