import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import PostItem from '../PostItem/PostItem';

export default function RelatedGrid({ posts, id }){

  const [amount, setAmount] = useState(5);
	
	useEffect(() => {
    handleResize();
		function handleResize(){
			if (window.innerWidth>1800){
				setAmount(5);
			}
      if (window.innerWidth<1800 &&  window.innerWidth>1100){
				setAmount(4);
			}
      if (window.innerWidth<1100 && window.innerWidth>900){
				setAmount(2);
			}
      if (window.innerWidth<900){
				setAmount(1);
			}
		}
		window.addEventListener('resize', handleResize)
  }, [])

	
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      <div className="grid related-grid">
        <h2 className='title related'>Related content</h2>
        <div className='row'>
          {posts.map((post, i) => {
            return(
              <>
              {i %amount==0 &&
                <PostItem post={post}/>
              }
              </>
            )
          })}
        </div>
        {amount >= 2 &&
          <div className='row'>
            {posts.map((post, i) => {
              return(
                <>
                {i %amount==1 &&
                  <PostItem post={post}/>
                }
                </>
              )
            })}
          </div>
        }
        {amount >= 3 &&
          <div className='row'>
            {posts.map((post, i) => {
              return(
                <>
                {i %amount==2 &&
                  <PostItem post={post}/>
                }
                </>
              )
            })}
          </div>
        }
        {amount >= 4 &&
          <div className='row'>
            {posts.map((post, i) => {
              return(
                <>
                {i %amount==3 &&
                  <PostItem post={post}/>
                }
                </>
              )
            })}
          </div>
        }
        {amount >= 5 &&
          <div className='row'>
            {posts.map((post, i) => {
              return(
                <>
                {i %amount==4 &&
                  <PostItem post={post}/>
                }
                </>
              )
            })}
          </div>
        }
        {amount >= 6 &&
          <div className='row'>
            {posts.map((post, i) => {
              return(
                <>
                {i %amount==5 &&
                  <PostItem post={post}/>
                }
                </>
              )
            })}
          </div>
        }
        {posts && posts?.length < 1 && <p>No posts found.</p>}
      </div>
    </section>
  );
}
