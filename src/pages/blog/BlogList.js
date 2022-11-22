import { Link } from 'react-router-dom';
import React from 'react';
const BlogList = () => {
  return (
    <div>
      <div className="center">
        <h1>BLOG LIST</h1>
      </div>
      <div style={{ width: '100%' }}>
        <div className="blog-list">
          <img
            src="https://vtv1.mediacdn.vn/thumb_w/1000/2022/10/27/lichwc-1-16668871327101375335294.png"
            alt=""
            className="blog-list-img"
          />
          <div className="container-blog">
            <Link to="/blog-detail">
              <h3>GIRLS PINK T SHIRT ARRIVED IN STORE</h3>
            </Link>
            <span
              className="material-symbols-outlined"
              style={{ marginRight: '5px', fontSize: '20px' }}>
              sell
            </span>
            <Link style={{ fontSize: '16px', color: '#333' }}>Vocabulary</Link>
            <br />
            <span className="content-blog-list">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div className="blog-list">
          <img
            src="https://vtv1.mediacdn.vn/thumb_w/1000/2022/10/27/lichwc-1-16668871327101375335294.png"
            alt=""
            className="blog-list-img"
          />
          <div className="container-blog">
            <Link to="/blog-detail">
              <h3>GIRLS PINK T SHIRT ARRIVED IN STORE</h3>
            </Link>

            <span
              className="material-symbols-outlined"
              style={{ marginRight: '5px', fontSize: '20px' }}>
              sell
            </span>
            <Link style={{ fontSize: '16px', color: '#333' }}>Vocabulary</Link>
            <br />
            <span className="content-blog-list">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          </div>
        </div>
      </div>
      <div className="center">
        <nav aria-label="...">
          <ul class="pagination pagination-lg">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default BlogList;
