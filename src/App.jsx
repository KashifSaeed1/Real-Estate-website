import "./App.css"
import Pages from "./components/pages/Pages"
import { AuthProvider } from "./components/context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Pages />
    </AuthProvider>
  );
}

export default App

