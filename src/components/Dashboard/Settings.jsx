import BlogDashboard from "./BlogDashboard";
import Sidebar from "../Sidebar";
import DashboardCard from "./DashboardCard";
import DashboardSidebar from "./DashboardSidebar";
import { GeneralSetting } from "./GeneralSetting";
import "./Dashboard.css";
import { FormContainer } from "../UserForm/FormContianer";
import styled from "styled-components";
const Divdiv = styled.div`
    position: absolute;
    top: 520px;
    left: 480px;
    & > div {
      width: 149%;
    }
`;

function Settings() {
    return (
        <div >
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
            <Divdiv>
                <FormContainer />
            </Divdiv>
        </div>
    );
}

export default Settings;
