import React from 'react';
// import Leftbar from '../../components/leftbar/Leftbar';
// import Feed from '../../components/feed/Feed';
// import Rightbar from '../../components/rightbar/Rightbar';

const Landing = () => {
  return (
    <>
      {/* <!-- Showcase --> */}
      <section className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                Become a <span className='text-warning'> Web Developer </span>
              </h1>
              <p className='lead my-4'>
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button
                className='btn btn-primary btn-lg'
                data-bs-toggle='modal'
                data-bs-target='#enroll'
              >
                Start The Enrollment
              </button>
            </div>
            <img
              className='img-fluid w-50 d-none d-sm-block'
              src='img/showcase.svg'
              alt=''
            />
          </div>
        </div>
      </section>

      {/* <!-- Newsletter --> */}

      <section className='bg-primary text-light p-5'>
        <div className='container'>
          <div className='d-md-flex justify-content-between align-items-center'>
            <h3 className='mb-3 mb-md-0'>Sign Up For Our Newsletter</h3>

            <div className='input-group news-input'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Email'
              />
              <button className='btn btn-dark btn-lg' type='button'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <div className='container'>
          <div className='row text-center g-4'>
            <div className='col-md'>
              <div className='card bg-dark text-light'>
                <div className='card-body text-center'>
                  <div className='h1 mb-3'>
                    <i className='bi bi-laptop'></i>
                  </div>
                  <h3 className='card-title mb-3'>Virtual</h3>
                  <p className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href='#!' className='btn btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='card bg-secondary text-light'>
                <div className='card-body text-center'>
                  <div className='h1 mb-3'>
                    <i className='bi bi-person-square'></i>
                  </div>
                  <h3 className='card-title mb-3'>Hybrid</h3>
                  <p className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href='#!' className='btn btn-dark'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md'>
              <div className='card bg-dark text-light'>
                <div className='card-body text-center'>
                  <div className='h1 mb-3'>
                    <i className='bi bi-people'></i>
                  </div>
                  <h3 className='card-title mb-3'>In Person</h3>
                  <p className='card-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href='#!' className='btn btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='learn' className='p-5'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-md'>
              <img src='img/fundamentals.svg' className='img-fluid' alt='' />
            </div>
            <div className='col-md p-5'>
              <h2>Learn The Fundamentals</h2>
              <p className='lead'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href='#!' className='btn btn-light mt-3'>
                <i className='bi bi-chevron-right'></i> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='learn' className='p-5 bg-dark text-light'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-md p-5'>
              <h2>Learn React</h2>
              <p className='lead'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href='#!' className='btn btn-light mt-3'>
                <i className='bi bi-chevron-right'></i> Read More
              </a>
            </div>
            <div className='col-md'>
              <img src='img/react.svg' className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section id='questions' className='p-5'>
        <div className='container'>
          <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
          <div className='accordion accordion-flush' id='questions'>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#question-one'
                >
                  Where exactly are you located?
                </button>
              </h2>
              <div
                id='question-one'
                className='accordion-collapse collapse'
                data-bs-parent='#questions'
              >
                <div className='accordion-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#question-two'
                >
                  How much does it cost to attend?
                </button>
              </h2>
              <div
                id='question-two'
                className='accordion-collapse collapse'
                data-bs-parent='#questions'
              >
                <div className='accordion-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#question-three'
                >
                  What do I need to Know?
                </button>
              </h2>
              <div
                id='question-three'
                className='accordion-collapse collapse'
                data-bs-parent='#questions'
              >
                <div className='accordion-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#question-four'
                >
                  How Do I sign up?
                </button>
              </h2>
              <div
                id='question-four'
                className='accordion-collapse collapse'
                data-bs-parent='#questions'
              >
                <div className='accordion-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#question-five'
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id='question-five'
                className='accordion-collapse collapse'
                data-bs-parent='#questions'
              >
                <div className='accordion-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='instructors' className='p-5 bg-primary'>
        <div className='container'>
          <h2 className='text-center text-white'>Our Instructors</h2>
          <p className='lead text-center text-white mb-5'>
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <div className='row g-4'>
            <div className='col-md-6 col-lg-3'>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <img
                    src='https://randomuser.me/api/portraits/men/21.jpg'
                    className='rounded-circle mb-3'
                    alt=''
                  />
                  <h3 className='card-title mb-3'>John Doe</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href='#!'>
                    <i className='bi bi-twitter text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-facebook text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-linkedin text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-instagram text-dark mx-1'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <img
                    src='https://randomuser.me/api/portraits/women/21.jpg'
                    className='rounded-circle mb-3'
                    alt=''
                  />
                  <h3 className='card-title mb-3'>Jane Doe</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href='#!'>
                    <i className='bi bi-twitter text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-facebook text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-linkedin text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-instagram text-dark mx-1'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <img
                    src='https://randomuser.me/api/portraits/men/22.jpg'
                    className='rounded-circle mb-3'
                    alt=''
                  />
                  <h3 className='card-title mb-3'>Steve Smith</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href='#!'>
                    <i className='bi bi-twitter text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-facebook text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-linkedin text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-instagram text-dark mx-1'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='card bg-light'>
                <div className='card-body text-center'>
                  <img
                    src='https://randomuser.me/api/portraits/women/22.jpg'
                    className='rounded-circle mb-3'
                    alt=''
                  />
                  <h3 className='card-title mb-3'>Sara Smith</h3>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href='#!'>
                    <i className='bi bi-twitter text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-facebook text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-linkedin text-dark mx-1'></i>
                  </a>
                  <a href='#!'>
                    <i className='bi bi-instagram text-dark mx-1'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-md'>
              <h2 className='text-center mb-4'>Contact Info</h2>
              <ul className='list-group list-group-flush lead'>
                <li className='list-group-item'>
                  <span className='fw-bold'>Main Location:</span> 50 Main st
                  Boston MA
                </li>
                <li className='list-group-item'>
                  <span className='fw-bold'>Enrollment Phone:</span> (555)
                  555-5555
                </li>
                <li className='list-group-item'>
                  <span className='fw-bold'>Student Phone:</span> (333) 333-3333
                </li>
                <li className='list-group-item'>
                  <span className='fw-bold'>Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </li>
                <li className='list-group-item'>
                  <span className='fw-bold'>Student Email:</span>
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div className='col-md'>
              <div id='map'></div>
            </div>
          </div>
        </div>
      </section>
      <footer className='p-5 bg-dark text-white text-center position-relative'>
        <div className='container'>
          <p className='lead'>Copyright &copy; 2021 Frontend Bootcamp</p>

          <a href='#!' className='position-absolute bottom-0 end-0 p-5'>
            <i className='bi bi-arrow-up-circle h1'></i>
          </a>
        </div>
      </footer>

      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id='enroll'
        tabIndex='-1'
        aria-labelledby='enrollLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='enrollLabel'>
                Enrollment
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <p className='lead'>
                Fill out this form and we will get back to you
              </p>
              <form>
                <div className='mb-3'>
                  <label htmlFor='first-name' className='col-form-label'>
                    First Name:
                  </label>
                  <input type='text' className='form-control' id='first-name' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='last-name' className='col-form-label'>
                    Last Name:
                  </label>
                  <input type='text' className='form-control' id='last-name' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='col-form-label'>
                    Email:
                  </label>
                  <input type='email' className='form-control' id='email' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phone' className='col-form-label'>
                    Phone:
                  </label>
                  <input type='tel' className='form-control' id='phone' />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
