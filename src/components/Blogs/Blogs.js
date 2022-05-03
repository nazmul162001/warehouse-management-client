import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className=" px-5 md:px-16">
      <h1 className="text-center text-5xl py-10 text-gray-700 font-bold">
        Our Latest Blogs
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
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
        text-2xl
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h1 className="text-4xl">Q</h1>{' '}
              <sub className="pr-2 text-2xl">1.</sub> Difference between
              javascript and nodeJs
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <table className="border-collapse border border-slate-500 w-full">
                <thead>
                  <tr>
                    <th className="border border-slate-600">Javascript</th>
                    <th className="border border-slate-600">NodeJs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700">
                      Javascript is a client side coding
                    </td>
                    <td className="border border-slate-700">
                      Nodejs enable server side coding writing in javascript
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Javascript is a programming language
                    </td>
                    <td className="border border-slate-700">
                      Nodejs in not a language but it has v8 engine that run
                      javascript on the server side
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Javascript runs inside the browser
                    </td>
                    <td className="border border-slate-700">
                      Nodejs runs outside the browser
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Javascript Provides behaviour to our HTML,CSS Pages
                    </td>
                    <td className="border border-slate-700">
                      Nodejs is a server, can perform server function like
                      reading files, database object etc
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700"></td>
                    <td className="border border-slate-700">
                      Nodejs has "npm" (Node Package Manager) - used for sharing
                      ane reusing the code
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
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
        text-2xl
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h1 className="text-4xl">Q</h1>{' '}
              <sub className="pr-2 text-2xl">2.</sub> When Should you use Nodejs
              and when should you use mongodb?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <p className="italic text-gray-500">When should we use Nodejs?</p>
              <p>
                Any project needs a programming environment and a runtime
                library that offers basic programming tools/support and can
                compile and/or interpret our code. Nodejs is such as tool for
                the Javascript programming language. There are other similar
                tools for other languages such as Python, Java, PHP, C#, C++,
                Go, etc. So, if we want to write some kind of stand-alone
                program or server in Javascript, then we can use nodejs for it.
              </p>
              <p className="italic text-gray-500">
                When should we use MongoDB?
              </p>
              <p>
                If our application needs the ability to persistently store data
                in a way that we can efficiently query or update it later, then
                we would typically use some form of database. There are dozens
                of popular databases. MongoDB is one such database. MariaDB,
                MySql, CouchDB, DynamoDB, Postgres are examples of other
                databases. Different databases have different strengths and
                different ways of using them so it's a whole different question
                to choose the right/best database for what we're doing.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
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
        text-2xl
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h1 className="text-4xl">Q</h1>{' '}
              <sub className="pr-2 text-2xl">3.</sub> Difference between SQL and
              NoSQL
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <table className="border-collapse border border-slate-500 w-full">
                <thead>
                  <tr>
                    <th className="border border-slate-600">SQL</th>
                    <th className="border border-slate-600">NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700">
                      Relational Database Management system
                    </td>
                    <td className="border border-slate-700">
                      Distributed Database management system
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Vertically Scalable
                    </td>
                    <td className="border border-slate-700">
                      Horizontally Scalable
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Fixed or predifined Schema
                    </td>
                    <td className="border border-slate-700">Dynamic Schema</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Not suitable for hierarchical data storage
                    </td>
                    <td className="border border-slate-700">
                      Best suitable for hierarchical data storage
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">
                      Can be used for complex queries
                    </td>
                    <td className="border border-slate-700">
                      Not good for complex queries
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="
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
        text-2xl
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h1 className="text-4xl">Q</h1>{' '}
              <sub className="pr-2 text-2xl">4.</sub> What is the purpose of JWT
              and how does it work?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="jwt-purpose">
                <p className="py-5">
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
                At first, user signIn using id/pass or facebook, google etc.
                Then user redirect to authentication server. And then user
                authenticated, JWT created and returned to user. User passes JWT
                when API Calls. Finally API verifies and processes API Call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
