import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { Collapsible } from "../Collapsible";

export default function Filter({
  path,
  categories,
  category,
  tags,
  tag,
  title,
  year,
  authors,
  allAuthors
}) {
  const router = useRouter();

  const [authorFilter, setAuthorFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // Filtered lists (computed only when filter changes)
  const filteredAuthors = useMemo(() => {
    return allAuthors?.filter(a =>
      a.toLowerCase().includes(authorFilter.toLowerCase())
    );
  }, [allAuthors, authorFilter]);

  const filteredTags = useMemo(() => {
    return tags?.filter(t =>
      t.name.toLowerCase().includes(tagFilter.toLowerCase())
    );
  }, [tags, tagFilter]);

  const yearsArray = useMemo(() => {
    const arr = [];
    const end = new Date().getFullYear();
    for (let y = 2019; y <= end; y++) arr.push(y);
    return arr;
  }, []);

  function updateQuery(newParams) {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, ...newParams }
      },
      undefined,
      { shallow: true }
    );
  }

  function removeQuery(key, value) {
    const q = { ...router.query };
    if (Array.isArray(q[key])) {
      q[key] = q[key].filter(v => v !== value);
    } else {
      delete q[key];
    }
    router.push({ pathname: router.pathname, query: q }, undefined, { shallow: true });
  }

  return (
    <div className="filter">
      {/* AUTHORS */}
      <div className="filter-cat">
        <Collapsible trigger="Author" idname="Author">
          <input
            type="text"
            value={authorFilter}
            onChange={e => setAuthorFilter(e.target.value)}
            placeholder="Search authors..."
            className="title-search-input"
          />

          <div className="tag-list">
            {filteredAuthors?.map((author, i) => (
              <a
                key={i}
                className="small-title"
                onClick={() =>
                  updateQuery({ authors: author.toLowerCase().replaceAll(" ", "-") })
                }
              >
                {author}
              </a>
            ))}
          </div>
        </Collapsible>

        {/* Selected Authors */}
        {authors &&
          (Array.isArray(authors) ? authors : [authors]).map((a, i) => (
            <div className="small-title" key={i}>
              <div className="text">{a}</div>
              <a onClick={() => removeQuery("authors", a)}>x</a>
            </div>
          ))}
      </div>

      {/* TITLE */}
      <div className="filter-cat">
        <div className="small-title title-cat">Title</div>

        {title ? (
          <div className="small-title">
            <div className="text">{title.replaceAll("-", " ")}</div>
            <a onClick={() => removeQuery("title", title)}>x</a>
          </div>
        ) : (
          <div className="title-search">
            <input
              type="text"
              placeholder="Search titles..."
              onKeyDown={e =>
                e.key === "Enter" &&
                updateQuery({ title: e.target.value.replaceAll(" ", "-") })
              }
            />
            <div
              className="search-button"
              onClick={() => {
                const val = document.querySelector("#titleSearch").value;
                updateQuery({ title: val.replaceAll(" ", "-") });
              }}
            >
              Search
            </div>
          </div>
        )}
      </div>

      {/* CATEGORY */}
      <div className="filter-cat">
        <Collapsible trigger="Category" idname="category">
          {categories.map((cat, i) => (
            <a
              key={i}
              className={`small-title ${cat.slug}`}
              onClick={() => updateQuery({ category: cat.slug })}
            >
              {cat.name}
            </a>
          ))}
        </Collapsible>

        {category && (
          <div className="category left">
            {category}
            <a onClick={() => removeQuery("category", category)}>x</a>
          </div>
        )}
      </div>

      {/* YEAR */}
      <div className="filter-cat">
        <Collapsible trigger="Year" idname="year">
          {yearsArray.map((y, i) => (
            <a key={i} className="small-title" onClick={() => updateQuery({ year: y })}>
              {y}
            </a>
          ))}
        </Collapsible>

        {year &&
          (Array.isArray(year) ? year : [year]).map((y, i) => (
            <div className="small-title" key={i}>
              <div className="text">{y}</div>
              <a onClick={() => removeQuery("year", y)}>x</a>
            </div>
          ))}
      </div>

      {/* TAGS */}
      <div className="filter-cat">
        <Collapsible trigger="Tags" idname="tags">
          <input
            type="text"
            placeholder="Search tags..."
            value={tagFilter}
            onChange={e => setTagFilter(e.target.value)}
            className="title-search-input"
          />

          <div className="tag-list">
            {filteredTags?.map((t, i) => (
              <a
                key={i}
                className="small-title"
                onClick={() => updateQuery({ tag: t.name.toLowerCase() })}
              >
                {t.name}
              </a>
            ))}
          </div>
        </Collapsible>

        {tag &&
          (Array.isArray(tag) ? tag : [tag]).map((t, i) => (
            <div className="tag" key={i}>
              {t} <a onClick={() => removeQuery("tag", t)}>x</a>
            </div>
          ))}
      </div>

      <br />

      <div className="small-title">
        <a onClick={() => router.push("/filter", undefined, { shallow: true })}>
          Clear all
        </a>
      </div>
    </div>
  );
}
