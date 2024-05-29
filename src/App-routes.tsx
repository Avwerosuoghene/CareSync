
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/error_page/error_page";
import Message from "./pages/message/message";
import Overview from "./pages/overview/overview";
import Schedule from "./pages/schedule/schedule";
import Transactions from "./pages/transactions/transactions";
import Patients from "./pages/patients/patients";


const AppRoutes = () => {

  
  
    return (
      <section>
        <Routes>
          <Route path="/" element={<Navigate to="/patients" />} />
        </Routes>
        <Routes>
          <Route path="/patients" element={<Patients />}/>
            <Route path="/overview" element={<Overview />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="message" element={<Message />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="*" element={<ErrorPage />} />
     
        </Routes>
      </section>
    );
  };


  export default AppRoutes;