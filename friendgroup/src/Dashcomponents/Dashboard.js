import React from 'react';
import Studentdash from './studentdash';

const Dashboard = () => {
    // Example plan determination based on logged-in user or state
    const userPlan = 'premium'; // Example: fetched from state or context
    const studentProfile = {
        name: 'John Doe', // Example: fetched from logged-in user profile
        email: 'john.doe@example.com' // Example: fetched from logged-in user profile
    };

    return (
        <div>
            <Studentdash plan={userPlan} studentProfile={studentProfile} />
        </div>
    );
};

export default Dashboard;
