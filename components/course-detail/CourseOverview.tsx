import DetailHero from "./DetailHero";
import PurchaseCard from "./PurchaseCard";
import Tabs from "./Tabs";

export default function CourseOverview() {
  return (
    <section className="detail-overview" aria-label="Course overview">
      <DetailHero />
      <div className="detail-overview__body">
        <div className="detail-overview__main">
          <Tabs />
        </div>
        <PurchaseCard />
      </div>
    </section>
  );
}
