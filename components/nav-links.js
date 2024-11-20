import React from 'react'

import PropTypes from 'prop-types'

const NavLinks = (props) => {
  return (
    <>
      <div className="nav-links-links">
        <span className="navLink">{props.link}</span>
        <span className="navLink">{props.link1}</span>
        <span className="navLink">{props.link2}</span>
      </div>
      <style jsx>
        {`
          .nav-links-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .nav-links-links {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

NavLinks.defaultProps = {
  link1: 'services',
  link: 'work',
  link2: 'contact',
}

NavLinks.propTypes = {
  link1: PropTypes.string,
  link: PropTypes.string,
  link2: PropTypes.string,
}

export default NavLinks
