import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Moment from 'moment';

export default function PostItem({ post, i }){
  let tags = '';
  const [tagsList, setTagsList] = useState('')

  function slugify(str) {
    return String(str)
      .normalize('NFKD') // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
      .replace(/\s+/g, '-') // replace spaces with hyphens
      .replace(/-+/g, '-'); // remove consecutive hyphens
  }


  useEffect(() => {
    if(post.tags){
      for (let i = 0; i < post.tags.nodes.length; i++) {
        tags += `&tag=${slugify(post.tags.nodes[i].name)}`;
      }
      setTagsList(tags);
    }
  }, [tagsList])


  let authorsl = '';
  const [authorsList, setAuthorsList] = useState('')

  useEffect(() => {
    var authors = post.authors.authors.replaceAll('\n', '').split(',')
    for (let i = 0; i < authors.length; i++) {
      authorsl += `&authors=${slugify(authors[i])}`;
    }
    setAuthorsList(authorsl);
  }, [])


  
  return (
    <div
      className={`post-item ${slugify(post.categories.nodes[0].name)}`}
      key={post.id ?? ''}
      id={`post-${i} `}
    >
      <Link href={`/${post.slug}?title=${slugify(post.title)}&category=${slugify(post.categories.nodes[0].name)}&year=${Moment(post.date).format("YYYY")}${tagsList}${authorsList}`}>
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
