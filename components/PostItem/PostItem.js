import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Moment from 'moment';

export default function PostItem({ post, i }){
	const colors = ['blue', 'yellow', 'pink'];
  const [authors, setAuthors] = useState([]);

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
    async function fetchAuthors() {
      const response = await fetch(`https://apriatst.artez.nl/wp-json/wp/v2/posts/${post.databaseId}`);
      const jsonData = await response.json();
      setAuthors(jsonData.authors)
    }
    fetchAuthors()
    if(authors){
      for (let i = 0; i < authors.length; i++) {
        authorsl += `&authors=${authors[i].display_name.toLowerCase()}`;
      }
      setAuthorsList(authorsl);
    }
  }, [authors])

  
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
            {authors?.map((item, i) => {
              return(
                <div>{item.display_name}</div>
              )
            })}
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
