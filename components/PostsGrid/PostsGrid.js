import React, {useEffect, useState} from 'react';
import Link from 'next/link';

export default function Posts({ posts, id }){

  const colors = ['blue', 'yellow', 'pink'];

  const [amount, setAmount] = useState(5);
	
	useEffect(() => {
		function handleResize(){
      if (window.innerWidth<1800){
				setAmount(4);
			}
			if (window.innerWidth>1800){
				setAmount(5);
			}
      if (window.innerWidth<1100){
				setAmount(2);
			}
      if (window.innerWidth<600){
				setAmount(1);
			}
		}
		window.addEventListener('resize', handleResize)
  })

	
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      <div className="grid">
        <div className='row'>
          {posts.map((post, i) => {
            return(
              <>
              {i %amount==0 &&
                <div
                  className="post-item"
                  key={post.id ?? ''}
                  id={`post-${post.id}`}
                >
                  <Link href={`/posts/${post.slug}`}>
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
              }
              </>
            )
          })}
        </div>
        <div className='row'>
          {posts.map((post, i) => {
            return(
              <>
              {i %amount==1 &&
                <div
                  className="post-item"
                  key={post.id ?? ''}
                  id={`post-${post.id}`}
                >
                  <Link href={`/posts/${post.slug}`}>
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
              }
              </>
            )
          })}
        </div>
        <div className='row'>
          {posts.map((post, i) => {
            return(
              <>
              {i %amount==2 &&
                <div
                  className="post-item"
                  key={post.id ?? ''}
                  id={`post-${post.id}`}
                >
                  <Link href={`/posts/${post.slug}`}>
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
              }
              </>
            )
          })}
        </div>
        <div className='row'>
          {posts.map((post, i) => {
            return(
              <>
              {i %amount==3 &&
                <div
                  className="post-item"
                  key={post.id ?? ''}
                  id={`post-${post.id}`}
                >
                  <Link href={`/posts/${post.slug}`}>
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
              }
              </>
            )
          })}
        </div>
        <div className='row'>
          {posts.map((post, i) => {
            return(
              <>
              {i %amount==4 &&
                <div
                  className="post-item"
                  key={post.id ?? ''}
                  id={`post-${post.id}`}
                >
                  <Link href={`/posts/${post.slug}`}>
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
              }
              </>
            )
          })}
        </div>
        {posts && posts?.length < 1 && <p>No posts found.</p>}
      </div>
    </section>
  );
}
