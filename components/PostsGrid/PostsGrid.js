import React, { useEffect, useState } from "react";
import { PostItem } from "../PostItem";

export default function Posts({ posts, id }) {
  const [amount, setAmount] = useState(4);

  useEffect(() => {
    function calculateAmount() {
      const w = window.innerWidth;

      if (w > 1800) return 5;
      if (w > 1400) return 4;
      if (w > 1100) return 3;
      if (w > 900) return 2;
      return 1;
    }

    // Set on initial load
    setAmount(calculateAmount());

    // Listen for resize
    function handleResize() {
      setAmount(calculateAmount());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create rows dynamically based on amount
  const rows = Array.from({ length: amount }, (_, rowIndex) => (
    <div className="row" key={rowIndex}>
      {posts.map((post, i) => {
        return i % amount === rowIndex ? (
          <PostItem key={i} post={post.node} i={i} />
        ) : null;
      })}
    </div>
  ));

  return (
    <section {...(id && { id })}>
      <div className="grid">
        {rows}
        {posts?.length < 1 && <p>No posts found.</p>}
      </div>
    </section>
  );
}
