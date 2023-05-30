import { Collapsible } from "../Collapsible";

export default function Filter({ path, categories, category, tags, tag, title, year}) {

  function generateYearsBetween(startYear = 2019, endYear) {
    const endDate = endYear || new Date().getFullYear();
    let years = [];
  
    for (var i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  const yearsArray = generateYearsBetween(2019);

  function titleSearch() {
    var filter = document.getElementById("titleSearch").value.toLowerCase();
    window.location.href = `${path}&title=${filter}`
  }

  return (
    <div className='filter'>
      <div className='filter-cat'>
        <div className='small-title'>Jane Doe</div>
      </div>
      <div className='filter-cat'>
        {/* <Collapsible trigger="Title" idname={'title'}>

        </Collapsible> */}
        <div className="small-title title-cat">Title</div>
        {title ?
          <div className='small-title'>
            <div className="text">{title}</div> <a href={`${path.replace(`&title=${title.toLowerCase()}`, '')}`}>x</a>
          </div>
        :
        <div className="title-search">
          <input type="text" id="titleSearch" placeholder="Search for titles.." title="Type in a title"/>
          <div className="search-button" onClick={titleSearch}>Search</div>
        </div>
        }
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Category" idname={'category'}>
          {categories.map((category, i) => {
            return(
              <a key={`category${i}`} className={`small-title ${category.name.toLowerCase().replace(' ', '-')}`} href={`${path}&category=${category.name.toLowerCase().replace(' ', '-')}`}>{category.name}</a>
            )
          })}
        </Collapsible>
        {category &&
          <>
          {Array.isArray(category) ?
          <>
            {category?.map((item, i) => {
              return(
                <div key={`categoryItem${i}`} className='category left'>
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
        <Collapsible trigger="Year" idname={'year'}>
          {yearsArray.map((year, i) => {
            return(
              <a key={`year${i}`} className={`small-title year${year}`} href={`${path}&year=${year}`}>{year}</a>
            )
          })}
        </Collapsible>
    
        {Array.isArray(year) ?
            year.map((item,i) => {
              return(
                <div className='small-title' key={`yearitem${i}`}>
                  <div className="text">{item}</div> <a href={`${path.replace(`&year=${item}`, '')}`}>x</a>
                </div>
              )
            })
          :
          <>
          {year &&
            <div className='small-title'>
              <div className="text">{year}</div> <a href={`${path.replace(`&year=${year}`, '')}`}>x</a>
            </div>
          }
          </>
        }
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Tags" idname={'tags'}>
          <div className="tag-list">
            {tags?.map((tag, i) => {
              return(
                <a key={`tag${i}`} className={`small-title ${tag.name.toLowerCase().replace(' ', '-')}`} href={`${path}&tag=${tag.name.toLowerCase().replace(' ', '-')}`}>{tag.name}</a>
              )
            })}
          </div>
        </Collapsible>
        {tag &&
          <>
          {Array.isArray(tag) ?
          <>
            {tag?.map((item, i) => {
              return(
                <div className='tag' key={`tagitem${i}`}>
                  {item} <a href={`${path.replace(`&tag=${item}`, '')}`}>x</a>
                </div>
              )
            })}
          </>
          :
          <div className='tag'>
            {tag} <a href={`${path.replace(`&tag=${tag}`, '')}`}>x</a>
          </div>
          }
          </>   
        }
      </div>
    </div>
  );
}
