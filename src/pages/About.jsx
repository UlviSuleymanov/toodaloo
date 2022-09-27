import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="tech">
        <h1>This project is made by Ulvi Suleymanov</h1>
        <h3>List of technologies I used on this project.</h3>
        <ul>
          <li>React-hooks (including custom hooks)</li>
          <li>Axios</li>
          <li>Pagination</li>
          <li>React-Transitions</li>
          <li>React-Router</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact Info</h2>
        <ol>
          <li>
            <a href="https://github.com/UlviSuleymanov">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/%C3%BClvi-s%C3%BCleymanov-9a96a5247/">Linkedin</a>
          </li>
          <li>
            <a href="https://t.me/UlviSuleymanov">Telegram</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
