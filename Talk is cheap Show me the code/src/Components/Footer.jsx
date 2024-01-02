import React from 'react'

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made by <strong>Supratim</strong>
      </p>
    </footer>
  );
};


export default Footer