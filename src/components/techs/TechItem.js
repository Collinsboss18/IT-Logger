import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => {
  return (
    <li className={'collection-item'}>
      <div>
        {tech.firstname} {tech.lastname}
        <a href={'#!'} className={'secondary-content'}>
          <i className={'fa fa-trash fa-2x grey-text'} />
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
