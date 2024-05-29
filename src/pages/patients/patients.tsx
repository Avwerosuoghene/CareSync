import React from "react";

import classes from "./patients.module.scss";
import BloodPressureChart from "../../components/UI/blood_pressure_chart";



const Patients: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <section >
                <h1>Patients Components</h1>
                <BloodPressureChart />
            </section>
        </React.Fragment>
    );
};

export default Patients;