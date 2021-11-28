import BlogDashboard from "./BlogDashboard";
import Sidebar from "../Sidebar";
import DashboardCard from "./DashboardCard";
import DashboardSidebar from "./DashboardSidebar";
import "./Dashboard.css";
function Appearance() {
  return (
      <div className="App">
          <div
              style={{
                  paddingLeft: "30px",
                  position: "fixed",
                  zIndex: "5",
                  marginTop: "20px",
              }}
          >
              <Sidebar />
          </div>
          <BlogDashboard />
          <DashboardCard />
          <DashboardSidebar />
          <div className="general-setting">
              <div>
                  <h2>Appearance</h2>
              </div>
              <div>
                  <label for="">Header color</label>
                  <input type="text" placeholder="#6200ea" value="" />
              </div>
              <div>
                  <label for="">Publication Logo</label>
                  <br />
                  <small>
                      Publication logo will replace the blog title on Homepage
                      and Post pages. Recommended dimension: 500px X 125px
                  </small>
                  <div className="select-image">
                      <svg viewBox="0 0 640 512">
                          <path d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"></path>
                      </svg>
                      <span>Select an image</span>
                  </div>
              </div>
              <div>
                  <label for="">Publication Logo for Dark Mode</label>
                  <br />
                  <small>
                      Publication logo that should appear in dark mode.
                      Recommended dimension: 500px X 125px
                  </small>
                  <div className="select-image">
                      <svg viewBox="0 0 640 512">
                          <path d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"></path>
                      </svg>
                      <span>Select an image</span>
                  </div>
              </div>
              <div>
                  <label for="">Publication Thumbnail / Favicon</label>
                  <br />
                  <small>
                      Upload a square logo. It will be shown as the blog's logo
                      on smaller (mobile) screens and used as your blog's
                      favicon. For best results, upload PNG file with dimension
                      500 X 500
                  </small>
                  <div className="select-image" style={{ width: "25%" }}>
                      <svg viewBox="0 0 640 512">
                          <path d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"></path>
                      </svg>
                      <span>Select an image</span>
                  </div>
              </div>
              <div>
                  <label for="">Homepage layout</label>
                  <div style={{ display: "flex", width: "65%" }}>
                      <input type="radio" name="layout" />
                      <div>
                          <img
                              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1552900614350/7NEULrlus.jpeg"
                              alt="images"
                          />
                          <h4 style={{ textAlign: "center" }}>
                              Stacked Layout (Default)
                          </h4>
                      </div>
                      <input type="radio" name="layout" />
                      <div>
                          <img
                              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1552900646822/ZhhPNNwla.jpeg"
                              alt="images"
                          />
                          <h4 style={{ textAlign: "center" }}>Grid Layout</h4>
                      </div>
                  </div>
              </div>
              <div className="checkbox">
                  <p>Do you want your blog to open in dark mode by default?</p>
                  <input type="checkbox" name="layout" />
              </div>
              <div className="checkbox">
                  <p>
                      Do you want to display article view count on the homepage?
                  </p>
                  <input type="checkbox" name="layout" />
              </div>
              <div className="checkbox">
                  <p>Do you want to display article read time?</p>
                  <input type="checkbox" name="layout" />
              </div>
              <div className="update">
                  <button>
                      <svg viewBox="0 0 512 512">
                          <path d="M433.941 129.941l-83.882-83.882A48 48 0 00316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 00-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 017.432 4.195l83.882 83.882A15.895 15.895 0 01416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z"></path>
                      </svg>
                      <span>UPDATE</span>
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Appearance;
