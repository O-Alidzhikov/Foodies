import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ allMeals }) {
  return (
    <ul className={classes.meals}>
      {allMeals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal}></MealItem>
        </li>
      ))}
    </ul>
  );
}
