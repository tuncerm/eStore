import React from 'react';
import {Link} from 'react-router-dom';

import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <nav className="admin-nav">
      <p>The menu will be here.</p>

      <Link to="/admin">Home</Link>
      <Link to="/admin/categories">Categories</Link>
    </nav>
  )
};

export default AdminHeader;