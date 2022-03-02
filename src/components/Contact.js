import React from 'react';

class Contact extends React.Component {
   render() {
     
    return (
      <section id="contact">
        <ul className='d-flex flex-row'>
        <a href="https://github.com/jgarner828" className='m-2 text-decoration-none'>Github</a>
        <a href="https://www.linkedin.com/in/justin-garner-0598a398/" className='m-2 text-decoration-none'>LinkedIn</a>
        <a href="mailto: j.garner828@gmail.com" className='m-2 text-decoration-none'>Email</a>
        </ul>
      </section>
    );
  }
}



export default Contact;