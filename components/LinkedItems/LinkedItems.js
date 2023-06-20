import Link from 'next/link';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';

export default function LinkedItems({ props}) {
  return (
    <div className='linked-items'>
      {props?.map((post, i) => {
        const [authors, setAuthors] = useState([]);
        const category = post.categories?.nodes[0].name.toLowerCase().replaceAll(' ', '_')
        const year = Moment(post.date).format("YYYY")
        const title = post.title

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
              
        return(
          <div className="linked-item">
            <Link href={`/posts/${post.slug}?&category=${category}&year=${year}&title=${title?.toLowerCase()}${tagsList}`}>
              <a>
                {post.featuredImage &&
                  <img src={post.featuredImage?.node.mediaItemUrl}/>
                }
                <h1 className='title'>{post.title}</h1>
                <div className='authors'>
                  {authors?.map((item, i) => {
                    return(
                      <div>{item.display_name}</div>
                    )
                  })}
                </div>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
