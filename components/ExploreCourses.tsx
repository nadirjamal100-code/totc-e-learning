import { courses } from "@/data/content";
import CourseShelf from "./CourseShelf";

export default function ExploreCourses() {
  return (
    <section className="courses" id="courses" aria-labelledby="courses-title">
      <div className="courses__inner">
        <div className="courses__head">
          <h2 id="courses-title" className="courses__title">
            {courses.title}
          </h2>
          <p className="courses__text">{courses.text}</p>
        </div>
        {courses.shelves.map((shelf) => (
          <CourseShelf key={shelf.title} shelf={shelf} seeAll={courses.seeAll} />
        ))}
      </div>
    </section>
  );
}
