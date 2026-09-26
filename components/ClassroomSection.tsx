import { youCanDo } from "@/data/art/youCanDo";
import { classroom } from "@/data/content";
import Artwork from "./Artwork";
import VideoButton from "./VideoButton";

export default function ClassroomSection() {
  return (
    <section className="section classroom" id="classroom" aria-labelledby="classroom-title">
      <span className="classroom__dot" aria-hidden="true" />
      <div className="classroom__text">
        <h2 id="classroom-title" className="classroom__title">
          {classroom.title}
        </h2>
        <p className="classroom__lead">{classroom.text}</p>
        <a className="classroom__link" href="#features">
          {classroom.link}
        </a>
      </div>
      <div className="classroom__visual">
        <Artwork
          data={youCanDo}
          className="classroom__art"
          label="Teacher explaining a lesson to pupils working on laptops in a classroom"
        />
        <VideoButton className="classroom__video-button" label="Play classroom video preview">
          <span className="visually-hidden">Play classroom video</span>
        </VideoButton>
      </div>
    </section>
  );
}
