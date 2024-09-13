import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Comments from "./pages/Comments";
import ErrorSpace from "./pages/ErrorSpace";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Harness from "./harness/Harness";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Harness />}>
            <Route path="comments" element={<Comments />} />
            <Route path="error" element={<ErrorSpace />} />
            <Route path="/" element={<Navigate to="/comments" />} />
            <Route path="*" element={<Navigate to="/comments" />} key={"*"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
