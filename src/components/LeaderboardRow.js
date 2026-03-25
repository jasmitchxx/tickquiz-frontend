import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';

function LeaderboardRow({ result, index, userCode, total, originalLength }) {
  const isTopThree = index % originalLength === 0 || index % originalLength === 1 || index % originalLength === 2;

  const getRankClass = () => {
    const rankIndex = index % originalLength;
    if (rankIndex === 0) return 'gold';
    if (rankIndex === 1) return 'silver';
    if (rankIndex === 2) return 'bronze';
    return '';
  };

  const getPercentClass = (percent) => {
    if (percent >= 80) return 'percent-high';
    if (percent >= 50) return 'percent-medium';
    return 'percent-low';
  };

  const percentage = ((result.score / total) * 100).toFixed(1);
  const rankClass = getRankClass();
  const percentClass = getPercentClass(percentage);
  const isCurrentUser = result.code === userCode;

  return (
    <li className={classNames({ highlight: isCurrentUser })}>
      <span className={classNames('rank', rankClass)}>
        {isTopThree ? '' : index % originalLength + 1}
      </span>
      <span className="name">{result.name}</span>
      <span className="school">{result.school}</span>
      <span className="score">{result.score}</span>
      <span className={classNames('percentage', percentClass)}>
        {percentage}%
      </span>
      <span className="date">{dayjs(result.date).format('MMM D')}</span>
    </li>
  );
}

export default LeaderboardRow;