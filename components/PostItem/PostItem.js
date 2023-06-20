import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Moment from 'moment';

export default function PostItem({ post, i }){
  let tags = '';
  const [tagsList, setTagsList] = useState('')
  useEffect(() => {
    if(post.tags){
      for (let i = 0; i < post.tags.nodes.length; i++) {
        tags += `&tag=${post.tags.nodes[i].name.toLowerCase()}`;
      }
      setTagsList(tags);
    }
  }, [tagsList])


  let authorsl = '';
  const [authorsList, setAuthorsList] = useState('')

  useEffect(() => {
    var authors = post.authors.authors.replaceAll('\n', '').split(',')
    for (let i = 0; i < authors.length; i++) {
      authorsl += `&authors=${authors[i].toLowerCase()}`;
    }
    setAuthorsList(authorsl);
  }, [])


  
  return (
    <div
      className={`post-item ${post.categories.nodes[0].name.toLowerCase().replaceAll(' ', '-')}`}
      key={post.id ?? ''}
      id={`post-${i} `}
    >
      <Link href={`/posts/${post.slug}?title=${post.title}&category=${post.categories.nodes[0].name.toLowerCase().replace(' ', '-')}&year=${Moment(post.date).format("YYYY")}${tagsList}${authorsList}`}>
        <a>
          <div className='category'>{post.categories.nodes[0].name}</div>
          <div className='authors'>
            <div dangerouslySetInnerHTML={{ __html: post.authors.authors ?? '' }} />
          </div>
          {post.featuredImage &&
            <img src={post.featuredImage?.node.mediaItemUrl}/>
          }
          <h1 className='title'>{post.title}</h1>
        </a>
      </Link>
    </div>
  );
}
