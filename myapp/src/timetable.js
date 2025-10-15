import React from 'react';

function Timetable() {
  const schedule = [
    { time: "9:00 - 10:00", subject: "Math" },
    { time: "10:00 - 11:00", subject: "English" },
    { time: "11:00 - 12:00", subject: "Physics" },
    { time: "12:00 - 1:00", subject: "Break" },
    { time: "1:00 - 2:00", subject: "Chemistry" },
    { time: "2:00 - 3:00", subject: "Computer Science" },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>My Timetable</h2>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th style={styles.th}>Time</th>
            <th style={styles.th}>Subject</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td style={styles.td}>{item.time}</td>
              <td style={styles.td}>{item.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#282c34',
    color: 'white'
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px'
  }
};

export default Timetable;
