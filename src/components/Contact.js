import React, { useState } from 'react';




export default function Contact(props) {

  // place for state variables


  return (
    <section id="contact">
    <ul className='d-flex flex-row justify-content-center'>
    <a href="https://github.com/jgarner828" className='m-2 text-decoration-none'><i className="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/justin-garner-0598a398/" className='m-2 text-decoration-none'><i className="fa-brands fa-linkedin"></i></a>
    <a href="mailto:j.garner828@gmail.com" className='m-2 text-decoration-none'><i className="fa-solid fa-envelope"></i></a>
    </ul>
  </section>
  )
}

