import BlogDashboard from "./BlogDashboard";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import DashboardSidebar from "./DashboardSidebar";
import "./Dashboard.css";

function Posts() {
  return (
      <div className="App" >
          <Sidebar />
          <BlogDashboard />
          <DashboardCard />
          <DashboardSidebar />

          <div className="drafts">
              <h2>Posts (0)</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1584979547621/M4VtfCNSw.png?auto=compress"
                      alt="posts"
                      style={{ width: "30%" }}
                  />
                  <h2>You haven't created post yet.</h2>
              </div>
          </div>
      </div>
  );
}

export default Posts;
