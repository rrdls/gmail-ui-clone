import Layout from "../components/Layout";
import TopBar from "../components/TopBar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Main from "../components/Main";
function IndexPage() {
  return (
    <Layout>
      <TopBar />
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </Layout>
  );
}

export default IndexPage;
