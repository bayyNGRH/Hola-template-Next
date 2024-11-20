import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavLinks from '../components/nav-links'
import Testimonial from '../components/testimonial'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Hola template</title>
          <meta property="og:title" content="Hola template" />
        </Head>
        <header className="home-header1">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-branding1">
              <span className="home-text100">hola studio</span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-right">
                  <NavLinks></NavLinks>
                  <div className="home-button1">
                    <button className="home-work-with-us1 button">
                      <span className="home-text101">work with us</span>
                      <img
                        alt="image"
                        src="/hamburger.svg"
                        className="home-image10"
                      />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <button className="home-work-with-us2 button">
                <span className="home-text102">work with us</span>
                <img
                  alt="image"
                  src="/hamburger.svg"
                  className="home-image11"
                />
              </button>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav2"
              >
                <div className="home-top">
                  <div className="home-branding2">
                    <span className="home-text103">hola studio</span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon1">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-middle"
                >
                  <div className="home-links">
                    <span className="navLink">work</span>
                    <span className="navLink">services</span>
                    <span className="navLink">contact</span>
                  </div>
                  <button className="home-work-with-us3 button">
                    <span className="home-text104">work with us</span>
                  </button>
                </nav>
              </div>
            </div>
          </header>
        </header>
        <div className="home-hero">
          <div className="home-header2">
            <h1 className="home-text105">
              Creating visual identity that fits like a dream for conscious
              teams with innovative products in web3 and SaaS
            </h1>
            <img alt="image" src="/mouse.svg" className="home-image12" />
          </div>
          <div className="home-hero-image">
            <img alt="image" src="/computer.svg" className="home-image13" />
          </div>
        </div>
        <div className="home-who">
          <div className="home-header3">
            <div className="home-heading1">
              <h2 className="home-text106">
                We are a technology-driven design studio.
              </h2>
              <span className="home-text107">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            <button className="home-button2 button">let’s chat</button>
          </div>
          <div className="home-preview">
            <div className="home-image14">
              <img alt="image" src="/preview.svg" className="home-image15" />
            </div>
            <div className="home-video1">
              <video src poster="/video.svg" className="home-video2"></video>
            </div>
          </div>
        </div>
        <div className="home-information">
          <div className="home-purpose">
            <span className="home-caption1">What we do</span>
            <span className="home-description1">
              We arrive at business-reflective design decisions by integrating
              strategic thinking with mature design and transferrable
              functionality. From helping transform the image of a legacy brand
              to creating an ultra-modern identity for a space tech startup -
              we’re always up for a fresh challenge.
            </span>
          </div>
          <div className="home-industries">
            <span className="home-caption2">INDUSTRIES</span>
            <div className="home-list">
              <div data-role="accordion-container" className="home-accordion">
                <div
                  data-role="accordion-trigger"
                  className="accordion-trigger"
                >
                  <span className="home-title10">Education</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text108">Perspiciatis</span>
                  <span className="home-text109">Nemo voluptatem</span>
                  <span className="home-text110">Dolore magnam</span>
                  <span className="home-text111">Tempora</span>
                  <span className="home-text112">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item1">
                <div
                  data-role="accordion-trigger"
                  className="accordion-trigger"
                >
                  <span className="home-title11">B2B</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text113">Perspiciatis</span>
                  <span className="home-text114">Nemo voluptatem</span>
                  <span className="home-text115">Dolore magnam</span>
                  <span className="home-text116">Tempora</span>
                  <span className="home-text117">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item2">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger3 accordion-trigger accordion-trigger-active"
                >
                  <span className="home-title12">Tech Startup</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content accordion-content-active"
                >
                  <span className="home-text118">Perspiciatis</span>
                  <span className="home-text119">Nemo voluptatem</span>
                  <span className="home-text120">Dolore magnam</span>
                  <span className="home-text121">Tempora</span>
                  <span className="home-text122">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item3">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger4 accordion-trigger"
                >
                  <span className="home-title13">Ecommerce</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text123">Perspiciatis</span>
                  <span className="home-text124">Nemo voluptatem</span>
                  <span className="home-text125">Dolore magnam</span>
                  <span className="home-text126">Tempora</span>
                  <span className="home-text127">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item4">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger5 accordion-trigger"
                >
                  <span className="home-title14">Marketing</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text128">Perspiciatis</span>
                  <span className="home-text129">Nemo voluptatem</span>
                  <span className="home-text130">Dolore magnam</span>
                  <span className="home-text131">Tempora</span>
                  <span className="home-text132">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item5">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger6 accordion-trigger"
                >
                  <span className="home-title15">SAAS</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text133">Perspiciatis</span>
                  <span className="home-text134">Nemo voluptatem</span>
                  <span className="home-text135">Dolore magnam</span>
                  <span className="home-text136">Tempora</span>
                  <span className="home-text137">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item6">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger7 accordion-trigger"
                >
                  <span className="home-title16">Media</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text138">Perspiciatis</span>
                  <span className="home-text139">Nemo voluptatem</span>
                  <span className="home-text140">Dolore magnam</span>
                  <span className="home-text141">Tempora</span>
                  <span className="home-text142">Reprehenderit qui</span>
                </div>
              </div>
              <div data-role="accordion-container" className="home-item7">
                <div
                  data-role="accordion-trigger"
                  className="home-trigger8 accordion-trigger"
                >
                  <span className="home-title17">Social</span>
                </div>
                <div
                  data-role="accordion-content"
                  className="accordion-content"
                >
                  <span className="home-text143">Perspiciatis</span>
                  <span className="home-text144">Nemo voluptatem</span>
                  <span className="home-text145">Dolore magnam</span>
                  <span className="home-text146">Tempora</span>
                  <span className="home-text147">Reprehenderit qui</span>
                </div>
              </div>
            </div>
            <div>
              <div className="home-container3">
                <Script
                  html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-case-studies">
            <div className="home-caption3">
              <span className="home-text148">Case Studies</span>
              <div className="home-date-range">
                <span className="home-text149">2022</span>
                <span className="home-text150">——</span>
                <span className="home-text151">2019</span>
              </div>
            </div>
            <div className="home-gallery1">
              <div className="home-row1">
                <div className="home-case1">
                  <img
                    alt="image"
                    src="/study%20%231-1300w.png"
                    className="home-image16"
                  />
                  <div className="home-heading2">
                    <span className="home-text152">Perspiciatis</span>
                    <span className="home-text153">
                      Lorem ipsum dolor sit amet consectetur adipiscing.
                    </span>
                  </div>
                </div>
                <div className="home-case2">
                  <img
                    alt="image"
                    src="/study%20%232-1400w.png"
                    className="home-image17"
                  />
                  <div className="home-heading3">
                    <span className="home-text154">Nemo voluptatem</span>
                    <span className="home-text155">
                      Lorem ipsum dolor sit amet consectetur adipiscing.
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-row2">
                <div className="home-case3">
                  <img
                    alt="image"
                    src="/study%20%233-1400w.png"
                    className="home-image18"
                  />
                  <div className="home-heading4">
                    <span className="home-text156">Dolore magnam</span>
                    <span className="home-text157">
                      Lorem ipsum dolor sit amet consectetur adipiscing.
                    </span>
                  </div>
                </div>
                <div className="home-case4">
                  <img
                    alt="image"
                    src="/study%20%234-1400w.png"
                    className="home-image19"
                  />
                  <div className="home-heading5">
                    <span className="home-text158">Tempora</span>
                    <span className="home-text159">
                      Lorem ipsum dolor sit amet consectetur adipiscing.
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-row3">
                <div className="home-case5">
                  <img
                    alt="image"
                    src="/study%20%235-1300w.png"
                    className="home-image20"
                  />
                  <div className="home-heading6">
                    <span className="home-text160">Reprehenderit qui</span>
                    <span className="home-text161">
                      Lorem ipsum dolor sit amet consectetur adipiscing.
                    </span>
                  </div>
                </div>
                <div className="home-case6">
                  <img
                    alt="image"
                    src="/study%20%236-1300w.png"
                    className="home-image21"
                  />
                  <div className="home-heading7">
                    <span className="home-text162">Ullamco laboris</span>
                    <span className="home-text163">
                      Lorem ipsum dolor sit amet consectetur adipiscing.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-testimonials">
            <div className="home-header4">
              <span className="home-caption4">What our clients say</span>
              <div className="home-controls">
                <svg
                  id="quote-previous"
                  viewBox="0 0 1024 1024"
                  className="home-icon3"
                >
                  <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
                <span className="home-text164">——</span>
                <svg
                  id="quote-next"
                  viewBox="0 0 1024 1024"
                  className="home-icon5"
                >
                  <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
                </svg>
              </div>
            </div>
            <div className="home-row4">
              <div className="quote">
                <Testimonial rootClassName="testimonialroot-class-name"></Testimonial>
              </div>
              <div className="home-quote2 quote">
                <Testimonial
                  name="Coco White"
                  avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                  origin="@white_co"
                  rootClassName="testimonialroot-class-name1"
                ></Testimonial>
              </div>
              <div className="quote">
                <Testimonial
                  avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                  rootClassName="testimonialroot-class-name2"
                ></Testimonial>
              </div>
              <div className="home-gradiant"></div>
            </div>
          </div>
        </div>
        <div className="home-book">
          <div className="home-content2">
            <div className="home-left">
              <h2 className="home-text165">
                Book a 15 minutes consultation to check how can we help you
              </h2>
              <button className="home-button3 button">
                <span className="home-text166">book a call</span>
              </button>
            </div>
            <img alt="image" src="/message.svg" className="home-image22" />
          </div>
        </div>
        <div className="home-section2">
          <div className="home-about-us">
            <div className="home-header5">
              <span className="home-caption5">About us</span>
              <h2 className="home-description2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h2>
            </div>
            <div className="home-statistics">
              <div className="home-statistic1">
                <span className="home-text167">25</span>
                <span className="home-text168">Years of experience</span>
              </div>
              <div className="home-statistic2">
                <span className="home-text169">40+</span>
                <span className="home-text170">Years of Experts on board</span>
              </div>
              <div className="home-statistic3">
                <span className="home-text171">300+</span>
                <span className="home-text172">Finished projects</span>
              </div>
              <div className="home-statistic4">
                <span className="home-text173">3</span>
                <span className="home-text174">Offices worldwide</span>
              </div>
            </div>
            <div className="home-dna">
              <span className="home-caption6">Our DNA</span>
              <span className="home-description3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <span className="home-description4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
            <div className="home-gallery2">
              <img
                alt="image"
                src="/linkedin-sales-solutions-hrhjn6ztgrm-unsplash%201-700w.png"
                className="home-image23"
              />
              <img
                alt="image"
                src="/austin-distel-800w.png"
                className="home-image24"
              />
            </div>
            <div className="home-recruit">
              <h2 className="home-text175">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h2>
              <div className="home-sections">
                <div className="home-section3">
                  <span className="home-text176">lumenco laboris</span>
                  <span className="home-text177">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </span>
                </div>
                <div className="home-section4">
                  <span className="home-text178">Adipiscing elit</span>
                  <span className="home-text179">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </span>
                </div>
                <div className="home-section5">
                  <span className="home-text180">Dolor sit</span>
                  <span className="home-text181">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </span>
                </div>
                <div className="home-section6">
                  <span className="home-text182">Huiposcing</span>
                  <span className="home-text183">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </span>
                </div>
              </div>
              <button className="home-button4 button">
                <span className="home-text184">
                  <span>be part of our team</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-header6">
            <span className="home-branding3">hola studio</span>
            <div className="home-socials1">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <img
                  alt="image"
                  src="/facebook%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <img
                  alt="image"
                  src="/twitter%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <img
                  alt="image"
                  src="/dribbble%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <img
                  alt="image"
                  src="/instagram%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <img
                  alt="image"
                  src="/linkedin%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <img
                  alt="image"
                  src="/youtube%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link19"
              >
                <img
                  alt="image"
                  src="/telegram%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link20"
              >
                <img
                  alt="image"
                  src="/medium%20-%20negative.svg"
                  className="social"
                />
              </a>
            </div>
          </div>
          <div className="home-content3">
            <div className="home-contact">
              <span className="home-email">hola@hola.studio</span>
              <span className="home-number">+4 222.345.987</span>
            </div>
            <div className="home-links-row">
              <div className="home-links-column1">
                <span className="home-link21">Responsive Web Design</span>
                <span className="home-link22">Design to Code</span>
                <span className="home-link23">Static Website Designer</span>
                <span className="home-link24">Static Website Generator</span>
              </div>
              <div className="home-links-column2">
                <span className="home-link25">About</span>
                <span className="home-link26">Team</span>
                <span className="home-link27">News</span>
                <span className="home-link28">Partners</span>
                <span className="home-link29">Careers</span>
                <span className="home-link30">Press &amp; Media</span>
              </div>
            </div>
          </div>
          <div className="home-locations">
            <div className="home-location1">
              <span className="home-title18">United States</span>
              <span className="home-details17">
                <span>90210 Broadway Street</span>
                <br></br>
                <span>San Francisco</span>
                <br></br>
                <br></br>
                <span>hola_us@hola.studio</span>
              </span>
            </div>
            <div className="home-location2">
              <span className="home-title19">Romania</span>
              <span className="home-details18">
                <span>115 Turzii Road</span>
                <br></br>
                <span>Cluj Napoca</span>
                <br></br>
                <br></br>
                <span>hola_ro@hola.studio</span>
              </span>
            </div>
            <div className="home-location3">
              <span className="home-title20">United Kingdom</span>
              <span className="home-details19">
                <span>87–135 Brompton Road</span>
                <br></br>
                <span>London</span>
                <br></br>
                <br></br>
                <span>hola_uk@hola.studio</span>
              </span>
            </div>
            <div className="home-location4">
              <span className="home-title21">Spain</span>
              <span className="home-details20">
                <span>34-36 Carrer de Tele</span>
                <br></br>
                <span>Barcelona</span>
                <br></br>
                <br></br>
                <span>hola_sp@hola.studio</span>
              </span>
            </div>
          </div>
          <div className="home-socials2">
            <div className="home-row5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/facebook%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/twitter%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/dribbble%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/instagram%20-%20negative.svg"
                  className="social"
                />
              </a>
            </div>
            <div className="home-row6">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/linkedin%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/youtube%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/telegram%20-%20negative.svg"
                  className="social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/medium%20-%20negative.svg"
                  className="social"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding1 {
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-text100 {
            color: #27272d;
            font-size: 30px;
            font-family: Inter;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-right {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-button1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-work-with-us1 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-work-with-us1:hover {
            opacity: 0.5;
          }
          .home-text101 {
            display: flex;
            font-size: 24px;
          }
          .home-image10 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-work-with-us2 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-work-with-us2:hover {
            opacity: 0.5;
          }
          .home-text102 {
            display: flex;
            font-size: 24px;
          }
          .home-image11 {
            width: 100px;
            display: none;
            object-fit: cover;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-branding2 {
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            border-color: #61616b;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-text103 {
            color: #27272d;
            font-size: 30px;
            font-family: Inter;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-middle {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-work-with-us3 {
            cursor: pointer;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-work-with-us3:hover {
            opacity: 0.5;
          }
          .home-text104 {
            display: flex;
            font-size: 24px;
          }
          .home-hero {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 140px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text105 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 400;
          }
          .home-image12 {
            width: 24px;
            height: 40px;
            display: flex;
            object-fit: cover;
          }
          .home-hero-image {
            width: 100%;
            display: flex;
            align-items: flex-end;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 180px;
            padding-right: 180px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #e5fe58;
          }
          .home-image13 {
            width: 640px;
            height: 540px;
            object-fit: cover;
          }
          .home-who {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 320px;
          }
          .home-header3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: 170px;
            padding-right: 170px;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-text106 {
            width: 100%;
            font-size: 54px;
            max-width: 800px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text107 {
            color: #27272d;
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            line-height: 43px;
          }
          .home-button2 {
            font-size: 24px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(229, 254, 88);
          }
          .home-preview {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: 170px;
            padding-right: 170px;
            flex-direction: row;
          }
          .home-image14 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 527px;
            align-items: flex-start;
            flex-direction: column;
            background-color: #e5fe58;
          }
          .home-image15 {
            object-fit: cover;
            margin-left: -160px;
          }
          .home-video1 {
            top: 0px;
            right: 0px;
            width: 646px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
            cursor: pointer;
            margin-top: 77px;
          }
          .home-information {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            padding-left: 170px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 140px;
            border-top-width: 1px;
          }
          .home-purpose {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: #27272d;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-description1 {
            color: #27272d;
            width: 100%;
            font-size: 30px;
            max-width: 900px;
            line-height: 54px;
          }
          .home-industries {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption2 {
            color: rgb(39, 39, 45);
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-list {
            width: 100%;
            display: grid;
            grid-gap: 80px;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: auto auto auto;
          }
          .home-accordion {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title10 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text108 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text109 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text110 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text111 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text112 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title11 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text113 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text114 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text115 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text116 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text117 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-trigger3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title12 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text118 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text119 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text120 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text121 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text122 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-trigger4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title13 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text123 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text124 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text125 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text126 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text127 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-trigger5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title14 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text128 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text129 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text130 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text131 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text132 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-trigger6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title15 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text133 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text134 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text135 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text136 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text137 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-trigger7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title16 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text138 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text139 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text140 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text141 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text142 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-item7 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-trigger8 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title17 {
            color: rgb(39, 39, 45);
            width: 100%;
            font-size: 54px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text143 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text144 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text145 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text146 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-text147 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 18px;
          }
          .home-container3 {
            display: contents;
          }
          .home-section1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 135px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 135px;
            background-color: #27272d;
          }
          .home-case-studies {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: 130px;
            border-bottom-width: 1px;
          }
          .home-caption3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text148 {
            color: #ffffff;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-date-range {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text149 {
            color: rgb(255, 255, 255);
          }
          .home-text150 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 300;
          }
          .home-text151 {
            color: rgb(255, 255, 255);
          }
          .home-gallery1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .home-case1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image16 {
            width: 560px;
            height: 416px;
            object-fit: cover;
          }
          .home-heading2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text152 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 36px;
          }
          .home-text153 {
            color: rgb(255, 255, 255);
            font-size: 18px;
          }
          .home-case2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image17 {
            width: 640px;
            height: 545px;
            object-fit: cover;
          }
          .home-heading3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text154 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 36px;
          }
          .home-text155 {
            color: rgb(255, 255, 255);
            font-size: 18px;
          }
          .home-row2 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-case3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image18 {
            width: 640px;
            height: 545px;
            object-fit: cover;
          }
          .home-heading4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text156 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 36px;
          }
          .home-text157 {
            color: rgb(255, 255, 255);
            font-size: 18px;
          }
          .home-case4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-image19 {
            width: 560px;
            height: 628px;
            object-fit: cover;
          }
          .home-heading5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text158 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 36px;
          }
          .home-text159 {
            color: rgb(255, 255, 255);
            font-size: 18px;
          }
          .home-row3 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-case5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-image20 {
            width: 560px;
            height: 628px;
            object-fit: cover;
          }
          .home-heading6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text160 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 36px;
          }
          .home-text161 {
            color: rgb(255, 255, 255);
            font-size: 18px;
          }
          .home-case6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image21 {
            width: 640px;
            height: 545px;
            object-fit: cover;
          }
          .home-heading7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text162 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 36px;
          }
          .home-text163 {
            color: rgb(255, 255, 255);
            font-size: 18px;
          }
          .home-testimonials {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            flex-direction: column;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-caption4 {
            color: #ffffff;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-controls {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon3 {
            fill: #61616b;
            width: 24px;
            cursor: pointer;
            height: 24px;
          }
          .home-text164 {
            color: #ffffff;
            font-style: normal;
            font-weight: 300;
          }
          .home-icon5 {
            fill: #ffffff;
            width: 24px;
            cursor: pointer;
            height: 24px;
          }
          .home-row4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-quote2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-gradiant {
            top: 0px;
            right: 0px;
            width: 100px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
            background-image: linear-gradient(
              90deg,
              rgba(39, 39, 45, 0) 3%,
              rgba(39, 39, 45, 0.5) 33%,
              rgb(39, 39, 45) 100%
            );
          }
          .home-book {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #e5fe58;
          }
          .home-content2 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 810px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text165 {
            font-size: 54px;
            font-weight: initial;
            line-height: 65px;
          }
          .home-button3 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: lowercase;
            background-color: rgb(0, 0, 0);
          }
          .home-image22 {
            height: 400px;
            object-fit: cover;
          }
          .home-section2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #244444;
          }
          .home-about-us {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header5 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption5 {
            color: #ffffff;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-description2 {
            color: rgb(255, 255, 255);
            font-size: 54px;
            font-style: normal;
            font-weight: 400;
            line-height: 65px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #ffffff;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-statistic1 {
            gap: var(--dl-space-space-unit);
            width: 272px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text167 {
            color: rgb(255, 255, 255);
            font-size: 54px;
            line-height: 65px;
          }
          .home-text168 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            text-align: center;
            line-height: 27px;
          }
          .home-statistic2 {
            gap: var(--dl-space-space-unit);
            width: 272px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text169 {
            color: rgb(255, 255, 255);
            font-size: 54px;
            line-height: 65px;
          }
          .home-text170 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            text-align: center;
            line-height: 27px;
          }
          .home-statistic3 {
            gap: var(--dl-space-space-unit);
            width: 272px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text171 {
            color: rgb(255, 255, 255);
            font-size: 54px;
            line-height: 65px;
          }
          .home-text172 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            text-align: center;
            line-height: 27px;
          }
          .home-statistic4 {
            gap: var(--dl-space-space-unit);
            width: 272px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text173 {
            color: rgb(255, 255, 255);
            font-size: 54px;
            line-height: 65px;
          }
          .home-text174 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            text-align: center;
            line-height: 27px;
          }
          .home-dna {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-caption6 {
            color: rgb(255, 255, 255);
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-description3 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 54px;
          }
          .home-description4 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            line-height: 54px;
          }
          .home-gallery2 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            padding-bottom: 120px;
          }
          .home-image23 {
            width: 640px;
            z-index: 10;
            object-fit: cover;
          }
          .home-image24 {
            top: 370px;
            right: 0px;
            width: 760px;
            bottom: 0px;
            position: absolute;
            object-fit: cover;
          }
          .home-recruit {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text175 {
            color: #ffffff;
            font-size: 54px;
            max-width: 1000px;
            font-style: normal;
            font-weight: 400;
            line-height: 65px;
          }
          .home-sections {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-section3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text176 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            max-width: 1000px;
            line-height: 36px;
          }
          .home-text177 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 1000px;
            line-height: 27px;
          }
          .home-section4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text178 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            max-width: 1000px;
            line-height: 36px;
          }
          .home-text179 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 1000px;
            line-height: 27px;
          }
          .home-section5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text180 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            max-width: 1000px;
            line-height: 36px;
          }
          .home-text181 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 1000px;
            line-height: 27px;
          }
          .home-section6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text182 {
            color: rgb(255, 255, 255);
            font-size: 30px;
            max-width: 1000px;
            line-height: 36px;
          }
          .home-text183 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 1000px;
            line-height: 27px;
          }
          .home-button4 {
            color: rgb(39, 39, 45);
            font-size: 24px;
            line-height: 30px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 70px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: lowercase;
            background-color: rgb(229, 254, 88);
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-header6 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-branding3 {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-socials1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link13 {
            display: contents;
          }
          .home-link14 {
            display: contents;
          }
          .home-link15 {
            display: contents;
          }
          .home-link16 {
            display: contents;
          }
          .home-link17 {
            display: contents;
          }
          .home-link18 {
            display: contents;
          }
          .home-link19 {
            display: contents;
          }
          .home-link20 {
            display: contents;
          }
          .home-content3 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #61616b;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-contact {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-email {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-number {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-links-row {
            gap: 128px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-links-column1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link21 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link21:hover {
            opacity: 0.7;
          }
          .home-link22 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link22:hover {
            opacity: 0.7;
          }
          .home-link23 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link23:hover {
            opacity: 0.7;
          }
          .home-link24 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link24:hover {
            opacity: 0.7;
          }
          .home-links-column2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link25 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link25:hover {
            opacity: 0.7;
          }
          .home-link26 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link26:hover {
            opacity: 0.7;
          }
          .home-link27 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link27:hover {
            opacity: 0.7;
          }
          .home-link28 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link28:hover {
            opacity: 0.7;
          }
          .home-link29 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link29:hover {
            opacity: 0.7;
          }
          .home-link30 {
            color: rgb(39, 39, 45);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
          }
          .home-link30:hover {
            opacity: 0.7;
          }
          .home-locations {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-location1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 270px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title18 {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-details17 {
            color: rgb(39, 39, 45);
            font-size: 16px;
            line-height: 24px;
          }
          .home-location2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 270px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title19 {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-details18 {
            color: rgb(39, 39, 45);
            font-size: 16px;
            line-height: 24px;
          }
          .home-location3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 270px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title20 {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-details19 {
            color: rgb(39, 39, 45);
            font-size: 16px;
            line-height: 24px;
          }
          .home-location4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 270px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title21 {
            color: rgb(39, 39, 45);
            font-size: 30px;
          }
          .home-details20 {
            color: rgb(39, 39, 45);
            font-size: 16px;
            line-height: 24px;
          }
          .home-socials2 {
            gap: var(--dl-space-space-twounits);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .home-navbar-interactive {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text101 {
              line-height: 30px;
            }
            .home-text102 {
              line-height: 30px;
            }
            .home-text104 {
              line-height: 30px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text105 {
              font-size: 32px;
            }
            .home-image12 {
              display: none;
            }
            .home-hero-image {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-who {
              gap: var(--dl-space-space-fourunits);
              margin-bottom: 750px;
              padding-bottom: 0px;
            }
            .home-header3 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-text106 {
              font-size: 32px;
            }
            .home-text107 {
              font-size: 16px;
              line-height: 28px;
            }
            .home-button2 {
              font-size: 16px;
            }
            .home-preview {
              align-items: flex-end;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-image14 {
              width: 80%;
              height: 100%;
            }
            .home-image15 {
              width: 100%;
            }
            .home-video1 {
              top: auto;
              left: 24px;
              right: auto;
              bottom: -729px;
            }
            .home-information {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
              border-top-width: 0px;
            }
            .home-purpose {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption1 {
              font-size: 12px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 28px;
            }
            .home-caption2 {
              font-size: 12px;
            }
            .home-list {
              grid-gap: 16px;
              grid-template-columns: auto;
            }
            .home-accordion {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title10 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text108 {
              font-size: 16px;
            }
            .home-text109 {
              font-size: 16px;
            }
            .home-text110 {
              font-size: 16px;
            }
            .home-text111 {
              font-size: 16px;
            }
            .home-text112 {
              font-size: 16px;
            }
            .home-item1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title11 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text113 {
              font-size: 16px;
            }
            .home-text114 {
              font-size: 16px;
            }
            .home-text115 {
              font-size: 16px;
            }
            .home-text116 {
              font-size: 16px;
            }
            .home-text117 {
              font-size: 16px;
            }
            .home-item2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title12 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text118 {
              font-size: 16px;
            }
            .home-text119 {
              font-size: 16px;
            }
            .home-text120 {
              font-size: 16px;
            }
            .home-text121 {
              font-size: 16px;
            }
            .home-text122 {
              font-size: 16px;
            }
            .home-item3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title13 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text123 {
              font-size: 16px;
            }
            .home-text124 {
              font-size: 16px;
            }
            .home-text125 {
              font-size: 16px;
            }
            .home-text126 {
              font-size: 16px;
            }
            .home-text127 {
              font-size: 16px;
            }
            .home-item4 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title14 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text128 {
              font-size: 16px;
            }
            .home-text129 {
              font-size: 16px;
            }
            .home-text130 {
              font-size: 16px;
            }
            .home-text131 {
              font-size: 16px;
            }
            .home-text132 {
              font-size: 16px;
            }
            .home-item5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title15 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text133 {
              font-size: 16px;
            }
            .home-text134 {
              font-size: 16px;
            }
            .home-text135 {
              font-size: 16px;
            }
            .home-text136 {
              font-size: 16px;
            }
            .home-text137 {
              font-size: 16px;
            }
            .home-item6 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title16 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text138 {
              font-size: 16px;
            }
            .home-text139 {
              font-size: 16px;
            }
            .home-text140 {
              font-size: 16px;
            }
            .home-text141 {
              font-size: 16px;
            }
            .home-text142 {
              font-size: 16px;
            }
            .home-item7 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-title17 {
              font-size: 32px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text143 {
              font-size: 16px;
            }
            .home-text144 {
              font-size: 16px;
            }
            .home-text145 {
              font-size: 16px;
            }
            .home-text146 {
              font-size: 16px;
            }
            .home-text147 {
              font-size: 16px;
            }
            .home-section1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-case-studies {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-caption3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-text148 {
              font-size: 12px;
            }
            .home-date-range {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text149 {
              font-size: 12px;
            }
            .home-text150 {
              font-size: 12px;
            }
            .home-text151 {
              font-size: 12px;
            }
            .home-gallery1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              flex-direction: column;
            }
            .home-case1 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              margin-top: 0px;
            }
            .home-image16 {
              width: 100%;
              height: 210px;
            }
            .home-heading2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text152 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-text153 {
              font-size: 16px;
            }
            .home-case2 {
              gap: var(--dl-space-space-unit);
            }
            .home-image17 {
              width: 100%;
              height: 210px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text154 {
              font-size: 24px;
            }
            .home-text155 {
              font-size: 16px;
            }
            .home-row2 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              flex-direction: column;
            }
            .home-case3 {
              gap: var(--dl-space-space-unit);
              width: 100%;
            }
            .home-image18 {
              width: 100%;
              height: 210px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text156 {
              font-size: 24px;
            }
            .home-text157 {
              font-size: 16px;
            }
            .home-case4 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              padding-top: 0px;
            }
            .home-image19 {
              width: 100%;
              height: 210px;
            }
            .home-heading5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text158 {
              font-size: 24px;
            }
            .home-text159 {
              font-size: 16px;
            }
            .home-row3 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              flex-direction: column;
            }
            .home-case5 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              padding-top: 0px;
            }
            .home-image20 {
              width: 100%;
              height: 210px;
            }
            .home-heading6 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text160 {
              font-size: 24px;
            }
            .home-text161 {
              font-size: 16px;
            }
            .home-case6 {
              gap: var(--dl-space-space-unit);
              width: 100%;
            }
            .home-image21 {
              width: 100%;
              height: 210px;
            }
            .home-heading7 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text162 {
              font-size: 24px;
            }
            .home-text163 {
              font-size: 16px;
            }
            .home-testimonials {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-controls {
              display: none;
            }
            .home-row4 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-book {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column-reverse;
              justify-content: center;
            }
            .home-left {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
            }
            .home-text165 {
              font-size: 32px;
              text-align: center;
              line-height: 38px;
            }
            .home-text166 {
              font-size: 16px;
            }
            .home-image22 {
              height: 220px;
            }
            .home-section2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-about-us {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption5 {
              font-size: 12px;
            }
            .home-description2 {
              font-size: 32px;
              line-height: 38px;
            }
            .home-statistics {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-text167 {
              font-size: 32px;
              line-height: 38px;
            }
            .home-text168 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text169 {
              font-size: 32px;
              line-height: 38px;
            }
            .home-text170 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text171 {
              font-size: 32px;
              line-height: 38px;
            }
            .home-text172 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text173 {
              font-size: 32px;
              line-height: 38px;
            }
            .home-text174 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-dna {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: 0px;
              padding-left: 0px;
              padding-bottom: 0px;
            }
            .home-caption6 {
              font-size: 12px;
            }
            .home-description3 {
              font-size: 16px;
              line-height: 28px;
            }
            .home-description4 {
              font-size: 16px;
              line-height: 28px;
            }
            .home-recruit {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
            }
            .home-text175 {
              font-size: 32px;
              line-height: 38px;
            }
            .home-sections {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-section3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text176 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-text177 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-section4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text178 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-text179 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-section5 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text180 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-text181 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-section6 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text182 {
              font-size: 24px;
              line-height: 30px;
            }
            .home-text183 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text184 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-header6 {
              padding-top: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-branding3 {
              font-size: 18px;
            }
            .home-socials1 {
              display: none;
            }
            .home-content3 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-email {
              font-size: 24px;
            }
            .home-number {
              font-size: 24px;
            }
            .home-links-row {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-locations {
              padding-top: var(--dl-space-space-threeunits);
              border-color: var(--dl-color-gray-black);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
              border-bottom-width: 1px;
            }
            .home-title18 {
              font-size: 24px;
            }
            .home-title19 {
              font-size: 24px;
            }
            .home-title20 {
              font-size: 24px;
            }
            .home-title21 {
              font-size: 24px;
            }
            .home-socials2 {
              width: 100%;
              display: flex;
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-row5 {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-row6 {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-top: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-work-with-us1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text101 {
              display: none;
            }
            .home-image10 {
              width: 16px;
              height: 14px;
              display: flex;
            }
            .home-burger-menu {
              display: flex;
              align-self: flex-start;
            }
            .home-work-with-us2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text102 {
              display: none;
            }
            .home-image11 {
              width: 16px;
              height: 14px;
              display: flex;
            }
            .home-branding2 {
              max-width: 80%;
            }
            .home-work-with-us3 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image13 {
              width: auto;
              height: 220px;
            }
            .home-who {
              margin-bottom: 0px;
            }
            .home-video1 {
              width: 85%;
              bottom: -500px;
              z-index: 100;
              position: static;
              align-self: center;
              margin-top: -48px;
            }
            .home-video2 {
              margin-top: 0px;
            }
            .home-image23 {
              width: 350px;
            }
            .home-image24 {
              width: 350px;
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
            .home-image15 {
              margin-left: -120px;
            }
            .home-video1 {
              bottom: -419px;
            }
            .home-image23 {
              width: 240px;
            }
            .home-image24 {
              top: 250px;
              width: 240px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
