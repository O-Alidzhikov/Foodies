import Image from "next/image";
import { getOne } from "@/app/services/meals-service";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

export default function customPage({ params }) {
  const meal = getOne(params.slug);

  if (!meal) {
    notFound();
  }
  console.log(meal);
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
