import BlogDashboard from "./BlogDashboard";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import DashboardSidebar from "./DashboardSidebar";
import "./Dashboard.css";

function Drafts() {
  return (
    <div className="App" >
      <Sidebar />
      <BlogDashboard />
      <DashboardCard />
      <DashboardSidebar />

      <div className="drafts">
        <h2>Drafts (1)</h2>
        <div>
          <div>
            <h3>How to shorten url using Nodejs ,Express and url_shortener</h3>
            <p>Nov 10</p>
          </div>
          <div>
            <button>Continue Writing</button>
            <button>Delete</button>
          </div>
        </div>
        <hr className="border-sidebar" />
      </div>
    </div>
  );
}

export default Drafts;
