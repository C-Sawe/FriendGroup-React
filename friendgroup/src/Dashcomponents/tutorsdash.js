import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tutorsdash = () => {
    // Sample data and states
    const [meetingRequests, setMeetingRequests] = useState([]);

    // Fetch meeting requests and other data
    useEffect(() => {
        fetchMeetingRequests();
    }, []);

    // Simulated API call to fetch meeting requests
    const fetchMeetingRequests = () => {
        setTimeout(() => {
            setMeetingRequests([
                { id: 1, subject: 'Math', time: '2024-07-20 10:00 AM', status: 'pending' },
                { id: 2, subject: 'Science', time: '2024-07-21 2:00 PM', status: 'pending' },
            ]);
        }, 1000); // Simulated delay
    };

    // Function to accept a meeting request
    const acceptMeeting = (id) => {
        // Update status to accepted
        const updatedRequests = meetingRequests.map(request => {
            if (request.id === id) {
                return { ...request, status: 'accepted' };
            }
            return request;
        });
        setMeetingRequests(updatedRequests);
        // Additional logic (e.g., send API request to update backend)
    };

    // Function to refuse a meeting request
    const refuseMeeting = (id) => {
        // Update status to refused
        const updatedRequests = meetingRequests.map(request => {
            if (request.id === id) {
                return { ...request, status: 'refused' };
            }
            return request;
        });
        setMeetingRequests(updatedRequests);
        // Additional logic (e.g., send API request to update backend)
    };

    // Drag and Drop handling (content upload)
    const handleDrop = (e) => {
        e.preventDefault();
        const files = [...e.dataTransfer.files];
        // Handle file upload logic here
        console.log(files);
    };

    // Prevent default behavior for drag and drop
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            {/* Main Content */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        {/* Tutor Profile */}
                        <div className="card border-0 shadow mb-8">
                            <img src="img/team-1.jpg" className="card-img-top" alt="Tutor Profile Picture" />
                            <div className="card-body">
                                <h5 className="card-title" id="tutorName">Tutor Name</h5>
                                <p className="card-text" id="tutorEmail">tutor@example.com</p>
                                <p className="card-text"><strong>Scheduled Meetings:</strong></p>
                                <ul id="scheduledMeetings" className="list-unstyled">
                                    {meetingRequests.map(request => (
                                        <li key={request.id}>
                                            <strong>{request.subject}</strong> - {request.time}
                                            {request.status === 'pending' && (
                                                <div>
                                                    <button className="btn btn-success ml-2" onClick={() => acceptMeeting(request.id)}>Accept</button>
                                                    <button className="btn btn-danger ml-2" onClick={() => refuseMeeting(request.id)}>Refuse</button>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                    {meetingRequests.length === 0 && <li>No scheduled meetings</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/* Tutor Dashboard (Content Uploaded, Students Tutored, Commission Earned) */}
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="container py-5">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            {/* Content Uploaded */}
                                            <div className="card border-0 shadow">
                                                <div className="card-body">
                                                    <h5 className="card-title">Content Uploaded</h5>
                                                    <p className="card-text" id="contentUploaded">Loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            {/* Students Tutored */}
                                            <div className="card border-0 shadow">
                                                <div className="card-body">
                                                    <h5 className="card-title">Students Tutored</h5>
                                                    <p className="card-text" id="studentsTutored">Loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            {/* Commission Earned */}
                                            <div className="card border-0 shadow">
                                                <div className="card-body">
                                                    <h5 className="card-title">Commission Earned</h5>
                                                    <p className="card-text" id="commissionEarned">Loading...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Drag and Drop Content Upload */}
                        <div
                            className="card border-0 shadow mt-4"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-body text-center">
                                <h5 className="card-title">Drag and Drop to Upload Content</h5>
                                <p className="card-text">Drop files here or click to upload</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content End */}
        </div>
    );
};

export default Tutorsdash;
