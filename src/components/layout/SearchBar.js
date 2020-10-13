import React from 'react';

const SearchBar = () => {
  return (
    <nav className={'blue mb4'}>
      <div className={'nav-wrapper'}>
        <form>
          <div className={'input-field'}>
            <input type={'search'} id={'search'} />
            <label className={'label-icon'} htmlFor={'search'}>
              {/* <i className={'material-icon'}>search</i> */}
              <i className={'fa fa-search'} />
            </label>
            <i className={'fa fa-close fa-2x'} />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
