export default function PostInfo({ date, author, className }) {
  if (!date && !author) {
    return null;
  }

  return (
    <div className={className}>
      {date && (
        <time dateTime={date}>
          {date}
        </time>
      )}
      {date && author && <>&nbsp;</>}
      {author && <span>by {author}</span>}
    </div>
  );
}
