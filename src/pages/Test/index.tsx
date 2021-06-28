import React from 'react';
import { Link } from 'react-router-dom'

function Test() {
  return (
    <div className="demo">
        Test page
        <p>
            <Link to='/'>Demo 页</Link>
        </p>
    </div>
  );
}

export default Test;
