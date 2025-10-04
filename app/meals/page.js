import Link from "next/link";
import classes from "./page.module.css";
import { Suspense } from "react";
import MealsGrid from "./meals-grid";
import { getAll } from "../services/meals-service";

function MealSection() {
  const allMeals = getAll();
  console.log(allMeals);
  return <MealsGrid allMeals={allMeals}></MealsGrid>;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you!</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It's fun and easy to
          do!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">share some cool recipes</Link>
        </p>
      </header>
      <main className={classes.main}></main>
      <Suspense fallback={<p>we have an issue</p>}>
        <MealSection></MealSection>
      </Suspense>
    </>
  );
}
