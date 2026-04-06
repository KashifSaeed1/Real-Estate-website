// import React from "react"
// import { footer } from "../../data/Data"
// import "./footer.css"

// const Footer = () => {
//   return (
//     <>
//       <section className='footerContact' style={{border: "2px solid red"}}>
//         <div className='container'>
//           <div className='send flex'>
//             <div className='text'>
//               <h1>Do You Have Questions ?</h1>
//               <p>We'll help you to grow your career and growth.</p>
//             </div>
//             <button className='btn5'>Contact Us Today</button>
//           </div>
//         </div>
//       </section>

//       <footer>
//         <div className='container'>
//           <div className='box'>
//             <div className='logo'>
//               <img src='../images/logo-light.png' alt='' />
//               <h2>Do You Need Help With Anything?</h2>
//               <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

//               <div className='input flex'>
//                 <input type='text' placeholder='Email Address' />
//                 <button>Subscribe</button>
//               </div>
//             </div>
//           </div>

//           {footer.map((val) => (
//             <div className='box'>
//               <h3>{val.title}</h3>
//               <ul>
//                 {val.text.map((items) => (
//                   <li> {items.list} </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </footer>
//       <div className='legal'>
//         <span>© 2021 RentUP. Designd By GorkCoder.</span>
//       </div>
//     </>
//   )
// }

// export default Footer


import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* Existing Contact Banner Section */}
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      {/* New Section - Why Choose RentUP / Our Expertise */}
      <section className="whyRentup">
        <div className="container">
          <div className="heading">
            <h2>Why Choose RentUP?</h2>
            <p>
              Your trusted partner for finding the perfect home, investment
              property, or rental in Pakistan.
            </p>
          </div>

          <div className="content grid">
            <div className="box">
              <div className="icon">🏠</div>
              <h3>Wide Property Selection</h3>
              <p>
                Browse thousands of verified homes, apartments, plots, and
                commercial spaces across Saddiqabad, Punjab, and major cities.
              </p>
            </div>

            <div className="box">
              <div className="icon">🔑</div>
              <h3>Easy Rental & Buying Process</h3>
              <p>
                Simple booking, transparent pricing, and secure transactions for
                both tenants and property owners.
              </p>
            </div>

            <div className="box">
              <div className="icon">👨‍💼</div>
              <h3>Expert Guidance</h3>
              <p>
                Get professional advice from real estate experts to make the
                best investment or rental decisions.
              </p>
            </div>

            <div className="box">
              <div className="icon">📍</div>
              <h3>Local Focus</h3>
              <p>
                Specialized in Punjab properties with detailed listings for
                Saddiqabad and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="RentUP Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, i) => (
                  <li key={i}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Legal / Copyright */}
      <div className="legal">
        <span>
          © 2021 - {new Date().getFullYear()} RentUP. Designed By Kashif saeed.
        </span>
      </div>
    </>
  );
};

export default Footer;
