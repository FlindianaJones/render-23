import React from 'react';
import './BasicCSS.css';

function BasicCSS() {
  return (
    <div className="background">
      <div className="header">
        <div>
          Item 1
        </div>
        <div>
          Item 2
        </div>
        <div>
          Item 3
        </div>
      </div>
      <div className='main-content'>
        <div className='left-menu'>
          <div>
            Sub Item 1
          </div>
          <div>
            Sub Item 2
          </div>
          <div>
            Sub Item 3
          </div>
        </div>
        <div className='content-container'>
          <div className='indicator'>
            Indicator
            </div>
            <div className='interactive-stuff'>
              <textarea />
            </div>
        </div>
      </div>
    </div>
  );
}

export default BasicCSS;
