import Link from 'next/link';
import Moment from 'moment';
import React, {useEffect, useState} from 'react';

export default function LinkedItems({ props}) {
  console.log(props)
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
              
        return(
          <div className="linked-item">
            <Link href={`/posts/${post.slug}?&category=${category}&year=${year}&title=${title?.toLowerCase()}${tagsList}`}>
              <a>
                {/* {post.categories &&<div className='category'>{post.categories.nodes[0].name}</div>} */}
                {/* {post.tags?.nodes.map((item, i) => {
                  return(
                    <div className='tag'>{item.name}</div>
                  )
                })} */}
                {post.featuredImage &&
                  <img src={post.featuredImage?.node.mediaItemUrl}/>
                }
                <h1 className='title'>{post.title}</h1>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
