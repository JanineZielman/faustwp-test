import Link from 'next/link';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';

export default function LinkedItems({ props}) {
  return (
    <div className='linked-items'>
      {props?.map((post, i) => {
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
          var authors = post.authors.authors.replaceAll('\n', '').split(',')
          for (let i = 0; i < authors.length; i++) {
            authorsl += `&authors=${authors[i].toLowerCase()}`;
          }
          setAuthorsList(authorsl);
        }, [])

        // /${post.slug}?&category=${category}&year=${year}&title=${title?.toLowerCase()}${tagsList}${authorsList}    

        return(
          <div className="linked-item">
            <Link href={`/${post.slug}?&category=${category}&year=${year}&title=${title?.toLowerCase()}${tagsList}${authorsList}`}>
              <a>
                {post.featuredImage &&
                  <img src={post.featuredImage?.node.mediaItemUrl}/>
                }
                <h1 className='title'>{post.title}</h1>
                <div className='authors'>
                  <div dangerouslySetInnerHTML={{ __html: post.authors.authors ?? '' }} />
                </div>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
