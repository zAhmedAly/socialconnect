import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-primary navbar-dark  fixed-top'>
      <div className='container'>
        <a
          href='#!'
          className='navbar-brand align-items-center justify-content-between'
        >
          SocialConnect{' '}
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navmenu'>
          <ul
            className='navbar-nav ms-auto align-items-center justify-content-between'
            // style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <li className='nav-item'>
              <a href='#learn' className='nav-link'>
                What You'll Learn
              </a>
            </li>
            <li className='nav-item'>
              <a href='#questions' className='nav-link'>
                Questions
              </a>
            </li>
            <li className='nav-item'>
              <a href='#instructors' className='nav-link'>
                Instructors
              </a>
            </li>
            <li className='nav-item text-center mr-3'>
              <div className='h3 text-white'>
                <i class='bi bi-bell-fill'></i>
              </div>
            </li>
            <li className='nav-item text-center'>
              <img
                src='https://randomuser.me/api/portraits/men/22.jpg'
                className='rounded-circle'
                style={{ width: '32px', height: '32px' }}
                alt=''
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
