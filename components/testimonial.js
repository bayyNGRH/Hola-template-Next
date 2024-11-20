import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <div className={`testimonial-testimonial ${props.rootClassName} `}>
        <div className="testimonial-content">
          <img alt="image" src="/apostrophe.svg" className="testimonial-icon" />
          <span className="testimonial-text">{props.quote}</span>
        </div>
        <div className="testimonial-author1">
          <img alt="image" src={props.avatar} className="testimonial-author2" />
          <div className="testimonial-details">
            <span className="testimonial-name">{props.name}</span>
            <span className="testimonial-origin">{props.origin}</span>
          </div>
        </div>
        <div className="testimonial-divider"></div>
      </div>
      <style jsx>
        {`
          .testimonial-testimonial {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: #61616b;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            border-right-width: 1px;
          }
          .testimonial-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .testimonial-icon {
            height: 40px;
            object-fit: cover;
          }
          .testimonial-text {
            color: rgb(255, 255, 255);
            width: 400px;
            font-size: 24px;
            line-height: 44px;
          }
          .testimonial-author1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-author2 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-details {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonial-name {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
          }
          .testimonial-origin {
            color: rgb(255, 255, 255);
            font-size: 20px;
            line-height: 30px;
          }
          .testimonial-divider {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .testimonial-testimonial {
              gap: var(--dl-space-space-unit);
              margin-right: 0px;
              padding-right: 0px;
              border-right-width: 0px;
            }
            .testimonial-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial-icon {
              height: 24px;
            }
            .testimonial-text {
              width: 100%;
              font-size: 16px;
              line-height: 28px;
            }
            .testimonial-author1 {
              gap: var(--dl-space-space-unit);
            }
            .testimonial-author2 {
              width: 40px;
              height: 40px;
            }
            .testimonial-details {
              gap: var(--dl-space-space-halfunit);
            }
            .testimonial-name {
              font-size: 16px;
              line-height: 28px;
            }
            .testimonial-origin {
              font-size: 16px;
              line-height: 28px;
            }
            .testimonial-divider {
              width: 100px;
              height: 1px;
              display: flex;
              background-color: #61616b;
            }
            .testimonialroot-class-name {
              width: 100%;
            }
            .testimonialroot-class-name1 {
              width: 100%;
            }
            .testimonialroot-class-name2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  avatar:
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NTY3NDE5&ixlib=rb-4.0.3&w=200',
  name: 'Joanna Smith',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  origin: '@zeng',
  rootClassName: '',
}

Testimonial.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
  origin: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Testimonial
