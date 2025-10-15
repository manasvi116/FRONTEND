import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>My React App</h1>
      <nav>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#61dafb',
    margin: 0,
  },
  link: {
    color: 'white',
    margin: '0 10px',
    textDecoration: 'none',
  }
};

export default Header;
