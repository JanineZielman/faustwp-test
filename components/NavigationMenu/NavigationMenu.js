
export default function NavigationMenu({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      <div className='menu'>
        {menuItems.map((item) => {
          const { id, uri, label } = item;

          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <div key={id} className='menu-link'>
              <a href={uri ?? '/'}>{label ?? ''}</a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
