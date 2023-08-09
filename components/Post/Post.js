import { FeaturedImage } from '../FeaturedImage';
import { PostInfo } from '../PostInfo';
import styles from './Post.module.scss';

export default function Post({
  title,
  content,
  date,
  author,
  uri,
  featuredImage,
}) {
  return (
    <article className={styles.component}>
      {featuredImage && (
        <a href={uri}>
          <FeaturedImage
            image={featuredImage}
            layout="responsive"
            className={styles.featuredImage}
          />
        </a>
      )}

      <a href={uri}>
        <h2>{title}</h2>
      </a>
      <PostInfo date={date} author={author} className={styles.postInfo} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
