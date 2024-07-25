import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Studentdash = ({ plan = 'free', studentProfile = {} }) => {
    const [meetingTime, setMeetingTime] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [scheduledMeetings, setScheduledMeetings] = useState([]);
    const [isMeetingScheduled, setIsMeetingScheduled] = useState(false); // State to track if a meeting is successfully scheduled

    const handleScheduleMeeting = (e) => {
        e.preventDefault();
        // For simplicity, assume meetingTime and selectedSubject are validated
        const newMeeting = {
            time: meetingTime,
            subject: selectedSubject,
            tutor: selectedTutor // Assuming you set the tutor somewhere in your app
        };
        setScheduledMeetings([...scheduledMeetings, newMeeting]);
        setMeetingTime('');
        setSelectedSubject('');
        setSelectedTutor(null);
        setIsMeetingScheduled(true); // Set state to indicate meeting is successfully scheduled
    };

    const handleSelectTutor = (tutor) => {
        setSelectedTutor(tutor);
    };

    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
                        <h3 className="display-4 text-white text-uppercase">Student Dash</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Student</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        {/* Display plan and perks */}
                        <div className="card border-0 shadow mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Your Plan: {plan}</h5>
                                {plan === 'premium' && (
                                    <div>
                                        <h6>Perks:</h6>
                                        <ul>
                                            <li>Schedule meetings with tutors</li>
                                            <li>Access to premium video content</li>
                                        </ul>
                                    </div>
                                )}
                                {plan === 'free' && (
                                    <div>
                                        <h6>Perks:</h6>
                                        <ul>
                                            <li>View free video content (ads supported)</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Schedule Meeting Form */}
                        {plan === 'premium' && (
                            <div className="card border-0 shadow mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Schedule a Meeting</h5>
                                    {isMeetingScheduled && (
                                        <div className="alert alert-success" role="alert">
                                            Meeting successfully scheduled!
                                        </div>
                                    )}
                                    <form onSubmit={handleScheduleMeeting}>
                                        <div className="form-group">
                                            <label htmlFor="subject">Select Subject:</label>
                                            <select
                                                id="subject"
                                                className="form-control"
                                                value={selectedSubject}
                                                onChange={(e) => setSelectedSubject(e.target.value)}
                                                required
                                            >
                                                <option value="">Select Subject</option>
                                                <option value="Math">Math</option>
                                                <option value="Science">Science</option>
                                                <option value="History">History</option>
                                                {/* Add more subjects as needed */}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="time">Select Time:</label>
                                            <input
                                                type="datetime-local"
                                                id="time"
                                                className="form-control"
                                                value={meetingTime}
                                                onChange={(e) => setMeetingTime(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Schedule Meeting
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* Display Scheduled Meetings */}
                        {scheduledMeetings.length > 0 && (
                            <div className="card border-0 shadow mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Scheduled Meetings</h5>
                                    <ul className="list-unstyled">
                                        {scheduledMeetings.map((meeting, index) => (
                                            <li key={index}>
                                                <strong>{meeting.subject}</strong> - {meeting.time} with {meeting.tutor}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-4">
                        {/* Student Profile */}
                        <div className="card border-0 shadow mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Your Profile</h5>
                                <p className="card-text">Name: {studentProfile.name || 'Not Available'}</p>
                                <p className="card-text">Email: {studentProfile.email || 'Not Available'}</p>
                                {/* Add more profile information as needed */}
                                <Link to="/courses" className="btn btn-primary">
                                    View Available Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studentdash;
