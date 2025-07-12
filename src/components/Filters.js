// src/components/Filters.jsx
import React from 'react';
import getSubjectsByLevel from '../utils/getSubjectsByLevel';

export default function Filters({ level, subject, startDate, endDate, setLevel, setSubject, setStartDate, setEndDate }) {
  const subjects = getSubjectsByLevel(level);

  return (
    <div className="subject-selector">
      <label>Level:
        <select value={level} onChange={(e) => { setLevel(e.target.value); setSubject(''); }}>
          <option value="">Select Level</option>
          <option value="SHS">SHS</option>
          <option value="JHS">JHS</option>
        </select>
      </label>

      <label>Subject:
        <select value={subject} onChange={(e) => setSubject(e.target.value)} disabled={!level}>
          <option value="">Select Subject</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>

      <label>Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>

      <label>End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
    </div>
  );
}
