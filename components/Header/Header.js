import { useState } from 'react';
import { Container, NavigationMenu } from '../../components';

export default function Header({
  title,
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header>
      <Container>
        <div className='background-animation'>
          <div className="bg-blob1"></div>
          <div className="bg-blob2"></div>
          <div className="bg-blob3"></div>
        </div>
        <div className={'navbar'}>
          <div className="logo-container">
            <a href="/" className="logo">
              <svg className="apria_logo" width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50%" cy="50%" r="50"></circle></svg>
            </a>
            <a href="/" className="logo-link"></a>
          </div>
          <div
            type="button"
            className={`nav-toggle ${isNavShown ? 'active' : ''} `}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={'primary-navigation'}
            aria-expanded={isNavShown}
          >
           {isNavShown ? '✕' : '☰'} 
          </div>
          <NavigationMenu
            className={`primary-navigation ${isNavShown ? 'show' : ''}`}
            menuItems={menuItems}
          />
        </div>
      </Container>
    </header>
  );
}
