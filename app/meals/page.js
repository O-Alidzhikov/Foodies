import Link from "next/link";
import classes from "./page.module.css";

export default function Meals() {
  return (
    <>
      <header>
        <h1>
          {" "}
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you!</span>
        </h1>
        <p>some text in a paragraph very texty and it should be long</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share some cool recipes</Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}
