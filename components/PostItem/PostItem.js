import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Moment from 'moment';

export default function PostItem({ post }){
	const colors = ['blue', 'yellow', 'pink'];

  let tags = '';
  const [tagsList, setTagsList] = useState()
  useEffect(() => {
    if(post.tags){
      for (let i = 0; i < post.tags.nodes.length; i++) {
        tags += `&tag=${post.tags.nodes[i].name.toLowerCase()}`;
      }
      setTagsList(tags);
    }
  }, [tagsList])

  console.log

  
  return (
    <div
      className={`post-item`}
      key={post.id ?? ''}
      id={`post-${post.id}`}
    >
      <Link href={`/posts/${post.slug}?category=${post.categories.nodes[0].name.toLowerCase().replace(' ', '_')}&year=${Moment(post.date).format("YYYY")}${tagsList}`}>
        <a>
          <div className='category'>{post.categories.nodes[0].name}</div>
          {post.featuredImage ?
            <img src={post.featuredImage?.node.mediaItemUrl}/>
            :
            <div className={`placeholder placeholder-${Math.floor(Math.random() * 5)}`}>
              <div className={`blob blob1 ${colors[Math.floor(Math.random() * 3)]}`}></div>
              <div className={`blob blob2 ${colors[Math.floor(Math.random() * 3)]}`}></div>
              <div className={`blob blob3 ${colors[Math.floor(Math.random() * 3)]}`}></div>
            </div>
          }
          <h1 className='title'>{post.title}</h1>
        </a>
      </Link>
    </div>
  );
}
