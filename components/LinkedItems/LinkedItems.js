import Moment from 'moment';
import React, {useEffect, useState} from 'react';

export default function LinkedItems({ props}) {
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

  return (
    <div className='linked-items' id="linked-items">
      {props?.map((post, i) => {
        const category = slugify(post.categories?.nodes[0].slug)
        const year = Moment(post.date).format("YYYY")
        const title = post.title

        let tags = '';
        const [tagsList, setTagsList] = useState('')
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
    

        return(
          <div className="linked-item">
            <a href={`/${post.slug}?&category=${category}&year=${year}&title=${slugify(title)}${tagsList}${authorsList}`}>
              {post.featuredImage &&
                <img src={post.featuredImage?.node.mediaItemUrl}/>
              }
              <h1 className='title'>{post.title}</h1>
              <div className='authors'>
                <div dangerouslySetInnerHTML={{ __html: post.authors.authors ?? '' }} />
              </div>
            </a>
          </div>
        )
      })}
    </div>
  );
}
