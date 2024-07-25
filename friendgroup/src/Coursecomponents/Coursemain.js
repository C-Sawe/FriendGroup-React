import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CoursesMain = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [courseType, setCourseType] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');
        setCourseType(type);

        if (type === 'engineering') {
            setCourses([
                { id: 1, name: 'Introduction to Engineering', description: 'This course covers fundamental principles of engineering.', imageUrl: 'https://www.clarkson.edu/sites/default/files/2023-06/Mechanical-Engineering-MS-Professionals-Hero-1600x900.jpg', link: '/Coursecontent?type=engineering' },
                { id: 2, name: 'Advanced Engineering Topics', description: 'Explore advanced topics in engineering.', imageUrl: 'https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_WUtEkyGMVAW4ci9a-2141-NOC.jpg?itok=ok-_rvYC', link: '/Coursecontent?type=engineering2' },
            ]);
        } else if (type === 'business') {
            setCourses([
                { id: 1, name: 'Business Strategy', description: 'Learn strategic management and business planning.', imageUrl: 'https://www.imd.org/wp-content/uploads/2022/08/20220805-MBG-TOPBANNER-1440x560-2x-b-scaled.jpg', link: '/Coursecontent?type=business' },
                { id: 2, name: 'Entrepreneurship Essentials', description: 'Explore entrepreneurship and startup management.', imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/types_20of_20entrepreneurship_58405385-682b-4fc4-ad58-5cd383f7a1a1.jpg?v=1686867270', link: '/Coursecontent?type=business2' },
            ]);
        } else if (type === 'mathematics') {
            setCourses([
                { id: 1, name: 'Algebra Basics', description: 'Learn the basics of algebra.', imageUrl: 'https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/house-politics-edu-film-alaska/ca-math/@@images/rectangular_image/page-header?v=1696880822.35', link: '/Coursecontent?type=mathematics' },
                { id: 2, name: 'Integral Calculus', description: 'Explore advanced calculus topics.', imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230914145731/Integral-Calculus.png', link: '/Coursecontent?type=mathematics2' },
            ]);
        } else if (type === 'science') {
            setCourses([
                { id: 1, name: 'Physics Fundamentals', description: 'Learn the fundamentals of physics.', imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_22/2451826/180601-atomi-mn-1540.jpg', link: '/Coursecontent?type=science' },
                { id: 2, name: 'Chemistry Basics', description: 'Explore the basics of chemistry.', imageUrl: 'https://www.clarkson.edu/sites/default/files/2023-06/Physics-Hero-1600x900.jpg', link: '/Coursecontent?type=science2' },
            ]);
        }
    }, [location.search]);

    // Function to get the course name for display in the header
    const getCourseName = () => {
        switch (courseType) {
            case 'engineering':
                return 'Engineering';
            case 'business':
                return 'Business';
            case 'mathematics':
                return 'Mathematics';
            case 'science':
                return 'Science';
            default:
                return 'Courses';
        }
    };

    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
                        <h3 className="display-4 text-white text-uppercase">{getCourseName()}</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Courses</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}

            {/* Courses List */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="mb-4">Explore Courses</h2>
                    </div>
                    {courses.map(course => (
                        <div key={course.id} className="col-lg-6 mb-4">
                            <div className="card border-0 shadow">
                                <div style={{ maxWidth: '100%', maxHeight: '300px', overflow: 'hidden' }}>
                                    <img src={course.imageUrl} className="card-img-top" alt={course.name} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.description}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => navigate(course.link)}
                                    >
                                        Explore Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesMain;
