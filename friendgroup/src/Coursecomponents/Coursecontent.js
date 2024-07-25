import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CourseContent = () => {
    const location = useLocation();
    const [articles, setArticles] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');

        // Example data for articles and videos based on type
        if (type === 'engineering') {
            setArticles([
                { id: 1,
                     title: 'Engineering Fundamentals',
                      description: 'Engineering Fundamentals introduces students to the foundational principles and practices of engineering disciplines.',
                       imageUrl: 'https://www.vaughn.edu/wp-content/uploads/2021/01/Mechanical-Engineering-Jobs_Feature.jpg', 
                       link: 'https://ftp.idu.ac.id/wp-content/uploads/ebook/tdg/DESIGN%20SISTEM%20DAYA%20GERAK/Engineering%20Fundamentals.pdf' },
                { id: 2, 
                    title: 'Engineering Design and Innovation', 
                    description: 'Engineering Design and Innovation focuses on the systematic process of designing solutions to engineering problems', 
                    imageUrl: 'https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11226_4.jpg', 
                    link: 'https://www.eng.it/resources/whitepaper/doc/innovation/innovation_white-paper_en.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'Engineering Fundermentals Video', 
                    description: 'Basic engineering concepts explained.', 
                    videoUrl: '/assets/Videos/ENGR 7 Introduction to Engineering.mp4', },

                { id: 2,
                     title: 'Advanced Engineering Design and Innovation Video', 
                     description: 'Advanced engineering topics.',
                      videoUrl: '/assets/Videos/Studying Electrical and Electronic Engineering.mp4', },
            ]);
            
        }else if (type === 'engineering2') {
            setArticles([
                { id: 1, title: 'Mechanical Engineering', 
                    description: 'Mechanical Engineering covers principles of mechanics, materials science, thermodynamics, fluid mechanics, and mechanical systems design.  ', 
                    imageUrl: 'https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11433_2.jpg', 
                    link: 'https://ftp.idu.ac.id/wp-content/uploads/ebook/tdg/DESIGN%20SISTEM%20DAYA%20GERAK/An%20Introduction%20to%20Mechanical%20Engineering.pdf' },

                { id: 2, title: 'Electrical Engineering', 
                    description: 'Electrical Engineering focuses on the study of electrical circuits, electronics, electromagnetism, and signal processing.', 
                    imageUrl: 'https://assets-global.website-files.com/626a352c728bdb2d02e14b1c/62bae8ed32f5d91ae3f120fb_electrical%20engineers%20.jpg',
                     link: 'https://www.opentextbooks.org.hk/system/files/export/9/9648/pdf/Fundamentals_of_Electrical_Engineering_I_9648.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'Mechanical Engineering',
                     description: 'Fundarmentals of Mechanical Engineering.',
                      videoUrl: '/assets/Videos/Studying Electrical and Electronic Engineering.mp4', },

                { id: 2, title: 'Electrical Engineering',
                     description: 'Fundarmentals of Electrical Engineering.',
                      videoUrl: '/assets/Videos/ENGR 7 Introduction to Engineering.mp4', },
            ]); 
        
        } else if (type === 'business') {
            setArticles([
                { id: 1, title: 'Market Analysis and Strategic Positioning', 
                    description: ' This unit focuses on analyzing market trends, customer behavior, and competitive landscape to develop strategic positioning strategies. ', 
                    imageUrl: 'https://weconnect.co/wp-content/uploads/2021/06/shutterstock_245423206-scaled.jpg', 
                    link: 'https://www.wipo.int/edocs/mdocs/aspac/en/wipo_ip_bkk_17/wipo_ip_bkk_17_15.pdf' },

                { id: 2, title: 'Strategic Management and Planning', 
                    description: 'This unit focuses on the fundamentals of starting and managing a new venture. Students learn to develop a comprehensive business plan that outlines the startups vision, mission, target market, competitive positioning, and financial projections.', 
                    imageUrl: 'https://online.york.ac.uk/wp-content/uploads/2023/05/Strategic-Management.jpg',
                     link: 'https://hr.un.org/sites/hr.un.org/files/4.5.1.6_Strategic%20Planning%20Guide_0.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'Startup Management Video',
                     description: 'Managing a startup effectively.',
                      videoUrl: '/assets/Videos/Introducing Business Management Course.mp4', },

                { id: 2, title: 'Strategic Planning Video',
                     description: 'Planning strategies for business success.',
                      videoUrl: '/assets/Videos/Production methods GCSE Business Revision.mp4', },
            ]);
        }else if (type === 'business2') {
            setArticles([
                { id: 1, title: 'Innovation and Product Development', 
                    description: ' This unit explores strategies and processes for fostering innovation and developing new products or services. ', 
                    imageUrl: 'https://thebrandhopper.com/wp-content/uploads/2021/10/Product-Innovation.jpg', 
                    link: 'https://www.diva-portal.org/smash/get/diva2:1088498/FULLTEXT01.pdf' },

                { id: 2, title: 'Startup Fundamentals and Business Planning', 
                    description: 'This unit focuses on the fundamentals of starting and managing a new venture. ', 
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-a-business-plan_04a793b9-ff7b-4523-af58-9becb8d1a766.jpg?v=1693931237',
                     link: 'https://www.uvm.edu/vtvegandberry/Pubs/SampleFoodBusinessPlanOklahomaState.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'innovation and Production Video',
                     description: 'how is production done .',
                      videoUrl: '/assets/Videos/Production methods GCSE Business Revision.mp4', },

                { id: 2, title: 'Startup Fundamentals Video',
                     description: 'Startup Fundermentals for business success.',
                      videoUrl: '/assets/Videos/Introducing Business Management Course.mp4', },
            ]); 
        }else if (type === 'mathematics') {
            setArticles([
                { id: 1, title: 'Basic Algebra', 
                    description: ' Basic Algebra covers fundamental concepts and techniques essential for understanding algebraic structures and equations.', 
                    imageUrl: 'https://img.wonderhowto.com/img/47/41/63475379406394/0/apply-exponent-rules-basic-algebra.1280x600.jpg', 
                    link: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf' },

                { id: 2, title: 'Linear Algebra', 
                    description: 'Linear Algebra focuses on the study of vector spaces, matrices, linear transformations, and systems of linear equations.', 
                    imageUrl: 'https://guzintamath.com/textsavvy/wp-content/uploads/2019/03/practice_image.png',
                     link: 'https://www.math.ucdavis.edu/~linear/linear-guest.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'Basic Algebra Video',
                     description: 'What is Algebra.',
                      videoUrl: '/assets/Videos/What is Algebra - Dont Memorise.mp4', },

                { id: 2, title: 'Linear Algebra',
                     description: 'Diffrent types of Equations.',
                      videoUrl: '/assets/Videos/Calculus Basics - Introduction - Infinity Learn.mp4', },
            ]);
        }
        else if (type === 'mathematics2') {
            setArticles([
                { id: 1, title: 'Differential Calculus',
                     description: 'Differential Calculus focuses on the study of rates of change and the concept of derivatives. ', 
                     imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/62009828001/5d53b20c-b734-4bf6-81e6-d58e096541b9/9ce9c1bc-ca64-40e4-8a69-dd303b20e987/1280x720/match/image.jpg', 
                     link: 'https://www.math.cmu.edu/~wn0g/noll/2ch6a.pdf' },

                { id: 2, title: 'Integral Calculus', 
                    description: ' Integral Calculus focuses on the study of accumulation and the concept of integrals', 
                    imageUrl: 'https://cdn.entrance360.com/media/uploads/2019/07/20/integration.jpg',
                     link: 'https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'Algebra Basics Video', 
                    description: 'Introduction to algebra basics.', 
                    videoUrl: '/assets/Videos/Calculus Basics - Introduction - Infinity Learn.mp4', },

                { id: 2, 
                    title: 'Advanced Calculus Video', 
                    description: 'Introductio to Advanced Calculus', 
                    videoUrl: '/assets/Videos/What is Algebra - Dont Memorise.mp4', },
            ]);

        }else if (type === 'science') {
            setArticles([
                { id: 1, title: 'Mechanics', 
                    description: 'Mechanics is the branch of physics that deals with the motion of objects and the forces acting on them. ', 
                    imageUrl: 'https://eduauraapublic.s3.ap-south-1.amazonaws.com/webassets/images/blogs/mechanics.jpg', 
                    link: 'https://people.maths.bris.ac.uk/~maxmr/Mechanics1/intro.pdf' },

                { id: 2, title: 'Electricity and Magnetism', 
                    description: 'This unit explores the fundamental principles of electricity and magnetism, which are essential to understanding the behavior of electrically charged particles and magnetic fields. ', 
                    imageUrl: 'https://images.newscientist.com/wp-content/uploads/2020/08/26150002/electromagnetsim-fyckc9_web.jpg',
                     link: 'https://web.njit.edu/~vitaly/121/notes121.pdf' },
            ]);
            setVideos([
                { id: 1, 
                    title: 'Mechanics 101 Video',
                     description: 'Managing a startup effectively.',
                      videoUrl: '/assets/Videos/What Is Chemistry (1).mp4', },

                { id: 2, title: 'Electricity and Magnetism 101',
                     description: 'Planning strategies for business success.',
                      videoUrl: '/assets/Videos/What is Physics.mp4', },
            ]);

        } else if (type === 'science2') {
            setArticles([
                { id: 1,
                     title: 'General Chemistry',
                      description: 'General Chemistry is an introductory course that covers fundamental principles and concepts of chemistry. ', 
                      imageUrl: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/04/15205317/basic-chemistry.png', 
                      link: 'https://ia800703.us.archive.org/18/items/GeneralChemistry9thEditionEbbingGammon/General_Chemistry_9th_Edition_Ebbing_Gammon.pdf' },

                { id: 2, title: 'Organic Chemistry', 
                    description: 'Organic Chemistry focuses on the study of carbon-containing compounds and their chemical properties, structures, reactions, and synthesis. ',
                     imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230503012948/Organic-Chemistry.png', 
                     link: 'https://www.siue.edu/~tpatric/Ch%2001%20Intro%20H%20T%20I.pdf' },
            ]);
            setVideos([
                { id: 1,
                     title: 'General Chemistry', 
                     description: 'Understanding the  basics.', 
                     videoUrl: '/assets/Videos/What is Physics.mp4', },

                { id: 2, 
                    title: ' Introduction to Organic Chemistry Video',
                     description: 'Introduction to  organic chemistry principles.', 
                     videoUrl: '/assets/Videos/What Is Chemistry (1).mp4', },
            ]);
        }
    }, [location.search]);

    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid page-header" style={{ marginBottom: '90px' }}>
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '300px' }}>
                        <h3 className="display-4 text-white text-uppercase"></h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link to="/" className="text-white">Home</Link></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">{}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="mb-4">Reading Articles</h2>
                    </div>
                    {articles.map(article => (
                        <div key={article.id} className="col-lg-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src={article.imageUrl} className="card-img-top" alt={article.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <Link to={article.link} className="btn btn-primary">Read Article</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="mb-4">Videos</h2>
                    </div>
                    {videos.map(video => (
                        <div key={video.id} className="col-lg-6 mb-4">
                            <div className="card border-0 shadow">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={video.videoUrl} title={video.title} allowFullScreen></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{video.title}</h5>
                                    <p className="card-text">{video.description}</p>
                                    <a href={video.videoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch Video</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseContent;
