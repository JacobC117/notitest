import testmodule from "./components/testmodule";

function App() {

  return (
    <Router>
      <Route path="/testmodule" element={<testmodule />}/>
    </Router>

  );
}

export default App;
