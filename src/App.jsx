import testmodule from "./components/testmodule";

function App() {

  return (
    <Router>
      <routes>
      <Route path="/testmodule" element={<testmodule />}/>
      </routes>
    </Router>

  );
}

export default App;
