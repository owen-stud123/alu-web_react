import React from 'react';
import PropTypes from 'prop-types';
import '../CourseList/CourseList.css';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader && !textSecondCell ? (
        <th colSpan={2}>{textFirstCell}</th>
      ) : isHeader ? (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: 'Holberton',
  textSecondCell: null,
};

export default CourseListRow;