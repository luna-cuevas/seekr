import JobCard from "./components/JobCard";

function App() {


  return (
    <div className="job-list-container">
      <img className="header" src="./images/bg-header-desktop.svg" alt="" />
      <section className="job-list">
        <JobCard  />
      </section>
    </div>

  );
}

export default App;
