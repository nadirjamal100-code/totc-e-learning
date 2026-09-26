"use client";

import { useState } from "react";
import { tabs } from "@/data/courseDetail";
import RatingCard from "./RatingCard";
import ReviewList from "./ReviewList";
import Avatar from "../Avatar";

const lessons = [
  "Welcome and cloud architecture fundamentals",
  "Designing secure, resilient AWS applications",
  "Storage, databases, and networking essentials",
  "Practice exam and certification preparation",
];

export default function Tabs() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Course sections">
        {tabs.map((label, index) => (
          <button
            key={label}
            id={`course-tab-${index}`}
            type="button"
            role="tab"
            aria-controls="course-tabpanel"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            className={`tabs__tab${active === index ? " tabs__tab--active" : ""}`}
            onClick={() => setActive(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="course-tabpanel" className="detail-overview__panel" role="tabpanel" aria-labelledby={`course-tab-${active}`}>
        {active === 0 && (
          <div className="course-tab-copy">
            <h2>About this course</h2>
            <p>Build the knowledge and confidence to design reliable, secure cloud solutions with AWS. This course combines clear explanations with practical guidance to help you prepare for the Solutions Architect certification.</p>
            <h3>What you’ll learn</h3>
            <ul>{["Choose the right AWS services for common architecture needs", "Design secure and resilient cloud environments", "Prepare a practical plan for the certification exam"].map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        )}
        {active === 1 && (
          <div className="course-tab-copy">
            <h2>Course content</h2>
            <p>4 modules <span aria-hidden="true">·</span> Learn at your own pace</p>
            <ol className="course-lesson-list">{lessons.map((lesson, index) => <li key={lesson}><span>Module {index + 1}</span><strong>{lesson}</strong><span>▶</span></li>)}</ol>
          </div>
        )}
        {active === 2 && (
          <div className="course-instructor">
            <Avatar size={77} />
            <div><p className="course-instructor__eyebrow">YOUR INSTRUCTOR</p><h2>Lina</h2><p>An experienced cloud educator helping learners turn complex architecture concepts into practical skills.</p></div>
          </div>
        )}
        {active === 3 && <><RatingCard /><ReviewList /></>}
      </div>
    </>
  );
}
