import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function NewsSection() {
  const { featured } = news;
  return (
    <section className="section news" id="news" aria-labelledby="news-title">
      <SectionTitle id="news-title" font="nunito" title={news.title} text={news.text} />

      <div className="news__grid">
        <article className="news-featured">
          <div className="news-featured__media">
            <Link href={`/news/${featured.slug}`} aria-label={`Read ${featured.title}`}>
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(max-width: 900px) 100vw, 34vw"
                className="news__image"
              />
            </Link>
          </div>
          <span className="tag">{featured.tag}</span>
          <h3 className="news-featured__title"><Link href={`/news/${featured.slug}`}>{featured.title}</Link></h3>
          <p className="news-featured__text">{featured.excerpt}</p>
          <Link className="news-featured__more" href={`/news/${featured.slug}`}>
            {news.readMore}
          </Link>
        </article>

        <div className="news__list">
          {news.items.map((item) => (
            <article key={item.slug}>
              <Link className="news-item" href={`/news/${item.slug}`} aria-label={`Read ${item.title}`}>
                <div className="news-item__media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 40vw, 15vw"
                    className="news__image"
                  />
                  <span className="tag tag--overlay">{item.tag}</span>
                </div>
                <div className="news-item__body">
                  <h3 className="news-item__title">{item.title}</h3>
                  <p className="news-item__text">{item.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
