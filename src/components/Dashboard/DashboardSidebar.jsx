import { Link } from "react-router-dom";
import "./Dashboard.css";

function DashboardSidebar() {
  return (
    <>
      <div className="DashboardSidebar">
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 000-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 00-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 00-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 000 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0042.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0042.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 01-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0187.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path>
          </svg>
          <span>
            <Link to="/dashboard">General</Link>
          </span>
        </div>
        <div>
          <svg viewBox="0 0 640 515">
            <path d="M112 264c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm32-112c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 0c-16.9 0-34.2 1.6-51.7 5C104.9 24.4 24.8 104.3 5.2 203.4-29.4 378.5 116.4 512 239.5 512c8.3 0 16.5-.6 24.6-1.9 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.6 113.9 397.1 0 256 0zm191.1 288h-79.7c-35.3 0-67.4 17.9-85.7 47.8-18.2 29.7-19.6 66-3.7 97.2 4.9 9.6 4.8 21.6-.1 31.3-2.4 4.6-7.9 12.6-18.7 14.3-6.3 1-12.9 1.5-19.7 1.5-54.6 0-114.1-31.3-155.5-81.6-44-53.6-60.9-120.6-47.4-188.7 17.1-86.6 87-156.2 173.9-173.2 15.2-3 30.5-4.5 45.5-4.5 123.1 0 223.6 99.9 224 222.6 0 18.3-14.8 33.3-32.9 33.3zM368 136c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM240 88c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"></path>
          </svg>
          <span>
            <Link to="/appearance">Appearance</Link>
          </span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M424 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zM264 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zM104 96H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64zm328 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm-152-96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm-152-96H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64z"></path>
          </svg>
          <span>Navbar</span>
        </div>
        <hr className="border-sidebar" />
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"></path>
          </svg>
          <span>
            <Link to="/posts">Posts</Link>
          </span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zM219.2 247.2l29.6 29.6c1.8 1.8 1.8 4.6 0 6.4L136.4 395.6l-30.1 4.3c-5.9.8-11-4.2-10.2-10.2l4.3-30.1 112.4-112.4c1.8-1.8 4.6-1.8 6.4 0zm64.4 1.2l-16.4 16.4c-1.8 1.8-4.6 1.8-6.4 0l-29.6-29.6c-1.8-1.8-1.8-4.6 0-6.4l16.4-16.4c5.9-5.9 15.4-5.9 21.2 0l14.8 14.8c5.9 5.8 5.9 15.3 0 21.2z"></path>
          </svg>
          <span>
            <Link to="/drafts">Drafts</Link>
          </span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M512 256.01c0-9.98-5.81-18.94-14.77-22.81l-99.74-43.27 99.7-43.26c9-3.89 14.81-12.84 14.81-22.81s-5.81-18.92-14.77-22.79L271.94 3.33c-10.1-4.44-21.71-4.45-31.87-.02L14.81 101.06C5.81 104.95 0 113.9 0 123.87s5.81 18.92 14.77 22.79l99.73 43.28-99.7 43.26C5.81 237.08 0 246.03 0 256.01c0 9.97 5.81 18.92 14.77 22.79l99.72 43.26-99.69 43.25C5.81 369.21 0 378.16 0 388.14c0 9.97 5.81 18.92 14.77 22.79l225.32 97.76a40.066 40.066 0 0015.9 3.31c5.42 0 10.84-1.1 15.9-3.31l225.29-97.74c9-3.89 14.81-12.84 14.81-22.81 0-9.98-5.81-18.94-14.77-22.81l-99.72-43.26 99.69-43.25c9-3.89 14.81-12.84 14.81-22.81zM45.23 123.87l208.03-90.26.03-.02c1.74-.71 3.65-.76 5.45.02l208.03 90.26-208.03 90.27c-1.81.77-3.74.77-5.48 0L45.23 123.87zm421.54 264.27L258.74 478.4c-1.81.77-3.74.77-5.48 0L45.23 388.13l110.76-48.06 84.11 36.49a40.066 40.066 0 0015.9 3.31c5.42 0 10.84-1.1 15.9-3.31l84.11-36.49 110.76 48.07zm-208.03-41.87c-1.81.77-3.74.77-5.48 0L45.23 256 156 207.94l84.1 36.5a40.066 40.066 0 0015.9 3.31c5.42 0 10.84-1.1 15.9-3.31l84.1-36.49 110.77 48.07-208.03 90.25z"></path>
          </svg>
          <span>Series</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z"></path>
          </svg>
          <span>Pages</span>
        </div>
        <hr className="border-sidebar" />
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M80 352H16c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V368c0-8.84-7.16-16-16-16zM64 480H32v-96h32v96zm496-288h-64c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm-16 288h-32V224h32v256zM502.77 88.68C510.12 93.24 518.71 96 528 96c26.51 0 48-21.49 48-48S554.51 0 528 0s-48 21.49-48 48c0 5.51 1.12 10.71 2.83 15.64l-89.6 71.68c-7.35-4.57-15.94-7.33-25.23-7.33s-17.88 2.76-25.23 7.33l-89.6-71.68C254.88 58.72 256 53.51 256 48c0-26.51-21.49-48-48-48s-48 21.49-48 48c0 7.4 1.81 14.32 4.8 20.58L68.58 164.8C62.32 161.81 55.4 160 48 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-7.4-1.81-14.32-4.8-20.58l96.22-96.22C193.68 94.19 200.6 96 208 96c9.29 0 17.88-2.76 25.23-7.33l89.6 71.68c-1.71 4.93-2.83 10.14-2.83 15.65 0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.51-1.12-10.72-2.83-15.65l89.6-71.67zM528 32c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 224c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zM208 64c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm160 128c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-128 0h-64c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm-16 288h-32V224h32v256zm176-160h-64c-8.84 0-16 7.16-16 16v160c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V336c0-8.84-7.16-16-16-16zm-16 160h-32V352h32v128z"></path>
          </svg>
          <span>Analytics</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V199.8c0-5.2-.8-10.3-2.5-15.2zM32 199.8c0-1.7.3-3.4.8-5.1L83.4 42.9C85.6 36.4 91.7 32 98.6 32H240v168H32v-.2zM480 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V232h448v232zm0-264H272V32h141.4c6.9 0 13 4.4 15.2 10.9l50.6 151.8c.5 1.6.8 3.3.8 5.1v.2z"></path>
          </svg>
          <span>Widgets</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
          </svg>
          <span>Newsletter</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M624 224H480V16c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v208H16c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-176 32h64v62.3l-32-10.7-32 10.7V256zM352 32v62.3l-32-10.7-32 10.7V32h64zm-160 0h64v106.7l64-21.3 64 21.3V32h64v192H192V32zm0 224v62.3l-32-10.7-32 10.7V256h64zm-160 0h64v106.7l64-21.3 64 21.3V256h80v224H32V256zm576 224H336V256h80v106.7l64-21.3 64 21.3V256h64v224z"></path>
          </svg>
          <span>Integrations</span>
        </div>
        <hr className="border-sidebar" />

        <div>
          <svg viewBox="0 0 640 512">
            <path d="M235.09 199.42l-45-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72 3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14-9.1-6.83-20.08-10.77-31.37-11.35V112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.62.63-42.67 20.55-42.67 45.07 0 19.97 12.98 37.81 31.58 43.39l45 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 13.19-11.8 13.19h-28.11c-4.56 0-8.96-1.29-12.82-3.72-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14 9.1 6.83 20.08 10.77 31.37 11.35V304c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16.12c23.62-.63 42.67-20.54 42.67-45.07 0-19.97-12.98-37.81-31.58-43.39zm273.38 282.16l-128.99-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3c34.3-37.1 55.3-86.6 55.3-141.09C415.98 93.1 322.88 0 207.99 0S0 93.1 0 207.99c0 114.89 93.1 207.99 207.99 207.99 54.5 0 103.99-21 141.09-55.2v10.2c0 3.2 1.3 6.2 3.5 8.5l128.99 128.99c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.71-4.69 4.71-12.29 0-16.99zm-300.48-97.6C110.7 383.98 32 305.29 32 207.99 32 110.69 110.7 32 207.99 32s175.99 78.7 175.99 175.99c0 97.3-78.69 175.99-175.99 175.99z"></path>
          </svg>
          <span>SEO</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z"></path>
          </svg>
          <span>Domain</span>
        </div>
        <hr className="border-sidebar" />

        <div>
          <svg viewBox="0 0 640 512">
            <path d="M492 8h-10c-6.627 0-12 5.373-12 12v110.627C426.929 57.261 347.224 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h10.016c6.353 0 11.646-4.949 11.977-11.293C48.157 132.216 141.097 42 256 42c82.862 0 154.737 47.077 190.289 116H332c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h160c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12zm-.301 248h-10.015c-6.352 0-11.647 4.949-11.977 11.293C463.841 380.158 370.546 470 256 470c-82.608 0-154.672-46.952-190.299-116H180c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H20c-6.627 0-12 5.373-12 12v160c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V381.373C85.071 454.739 164.777 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z"></path>
          </svg>
          <span>Backup</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"></path>
          </svg>
          <span>Import</span>
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M128 96v32h32V96zm65.9 169.6c-1.1-5.6-6-9.6-11.8-9.6H160v-32h-32v32l-19.4 97.2c-6.5 32.5 18.3 62.8 51.4 62.8s57.9-30.3 51.4-62.8zm-33.6 124.5c-17.9 0-32.4-12.1-32.4-27s14.5-27 32.4-27 32.4 12.1 32.4 27-14.5 27-32.4 27zM128 160v32h32v-32zm64-96h-32v32h32zm177.9 33.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.4 2.1 7.4 4.2l83.9 83.9c2 2 3.5 4.6 4.2 7.4H256zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h79.7v32h32V32H224v104c0 13.3 10.7 24 24 24h104zM192 192h-32v32h32zm0-64h-32v32h32z"></path>
          </svg>
          <span>Export</span>
        </div>
        <hr className="border-sidebar" />

        <div>
          <svg viewBox="0 0 640 512">
            <path d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"></path>
          </svg>
          <span>Advanced</span>
        </div>
      </div>
    </>
  );
}

export default DashboardSidebar;
