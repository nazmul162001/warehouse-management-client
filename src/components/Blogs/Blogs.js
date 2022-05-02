import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className=" px-5 md:px-16">
      <h1 className="text-center text-5xl py-10 text-gray-700 font-bold">
        Our Latest Blogs
      </h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button
              class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between javascript and nodeJs
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5">
              <table class="border-collapse border border-slate-500 w-full">
                <thead>
                  <tr>
                    <th class="border border-slate-600">Javascript</th>
                    <th class="border border-slate-600">NodeJs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-700">
                      Javascript is a client side coding
                    </td>
                    <td class="border border-slate-700">
                      Nodejs enable server side coding writing in javascript
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">
                      Javascript is a programming language
                    </td>
                    <td class="border border-slate-700">
                      Nodejs in not a language but it has v8 engine that run
                      javascript on the server side
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">
                      Javascript runs inside the browser
                    </td>
                    <td class="border border-slate-700">
                      Nodejs runs outside the browser
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">
                      Javascript Provides behaviour to our HTML,CSS Pages
                    </td>
                    <td class="border border-slate-700">
                      Nodejs is a server, can perform server function like
                      reading files, database object etc
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700"></td>
                    <td class="border border-slate-700">
                      Nodejs has "npm" (Node Package Manager) - used for sharing
                      ane reusing the code
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              When Should you use Nodejs and when should you use mongodb?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Difference between SQL and NoSQL
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5">
              <table class="border-collapse border border-slate-500 w-full">
                <thead>
                  <tr>
                    <th class="border border-slate-600">SQL</th>
                    <th class="border border-slate-600">NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-700">
                      Relational Database Management system
                    </td>
                    <td class="border border-slate-700">
                      Distributed Database management system
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">Vertically Scalable</td>
                    <td class="border border-slate-700">
                      Horizontally Scalable
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">
                      Fixed or predifined Schema
                    </td>
                    <td class="border border-slate-700">Dynamic Schema</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">
                      Not suitable for hierarchical data storage
                    </td>
                    <td class="border border-slate-700">
                      Best suitable for hierarchical data storage
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-slate-700">
                      Can be used for complex queries
                    </td>
                    <td class="border border-slate-700">
                      Not good for complex queries
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="headingFour">
            <button
              class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What is the purpose of JWT and how does it work?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body py-4 px-5">
              <div className="jwt-purpose">
                <p className='py-5'>
                  {' '}
                  JSON Web Tokens are an open, industry standard RFC 7519 method
                  for representing claims securely between two parties, Client
                  and Server. JWT.IO allows us to decode, verify and generate
                  JWT.
                </p>
              </div>
              <div className="img-jwt">
                <img
                  src="https://miro.medium.com/max/2188/1*SSXUQJ1dWjiUrDoKaaiGLA.png"
                  alt=""
                />
              </div>
              <p className="pt-10">
                  At first, user signIn using id/pass or facebook, google etc. Then user redirect to authentication server. And then user authenticated, JWT created and returned to user. User passes JWT when API Calls. Finally API verifies and processes API Call.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
