import { Collapsible } from "../Collapsible";

export default function Filter({ path, categories, category}) {
  const year = new Date().getFullYear();

  return (
    <div className='filter'>
      <div className='filter-cat'>
        <div className='small-title'>Jane Doe</div>
      </div>
      <div className='filter-cat'>
        <div className='small-title'>Subject</div>
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Category" idname={'category'}>
          {categories.map((category, i) => {
            return(
              <a className={`small-title ${category.name.toLowerCase().replace(' ', '-')}`} href={`${path}&category=${category.name.toLowerCase().replace(' ', '-')}`}>{category.name}</a>
            )
          })}
        </Collapsible>
        {category &&
          <>
          {Array.isArray(category) ?
          <>
            {category?.map((item, i) => {
              return(
                <div className='category left'>
                  {item} <a href={`${path.replace(`&category=${item}`, '')}`}>x</a>
                </div>
              )
            })}
          </>
          :
          <div className='category left'>
            {category} <a href={`${path.replace(`&category=${category}`, '')}`}>x</a>
          </div>
          }
          </>   
        }
      </div>
      <div className='filter-cat'>
        <div className='small-title'>Year</div>
      </div>
      <div className='filter-cat'>
        <div className='small-title'>Tags</div>
      </div>
    </div>
  );
}
