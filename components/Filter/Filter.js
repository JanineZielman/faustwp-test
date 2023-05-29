import { Collapsible } from "../Collapsible";

export default function Filter({ path, categories, category, subject, year}) {

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

  return (
    <div className='filter'>
      <div className='filter-cat'>
        <div className='small-title'>Jane Doe</div>
      </div>
      <div className='filter-cat'>
        <Collapsible trigger="Subject" idname={'subject'}>
          ...
        </Collapsible>
        {subject &&
          <div className='small-title'>
            <div className="text">{subject}</div> <a href={`${path.replace(`&subject=${subject.toLowerCase().replaceAll(' ', '_')}`, '')}`}>x</a>
          </div>
        }
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
        <Collapsible trigger="Year" idname={'year'}>
          {yearsArray.map((year, i) => {
            return(
              <a className={`small-title year${year}`} href={`${path}&year=year${year}`}>{year}</a>
            )
          })}
        </Collapsible>
        {year &&
          <div className='small-title'>
            <div className="text">{year.replace('year', '')}</div> <a href={`${path.replace(`&year=${year}`, '')}`}>x</a>
          </div>
        }
      </div>
      <div className='filter-cat'>
        <div className='small-title'>Tags</div>
      </div>
    </div>
  );
}
