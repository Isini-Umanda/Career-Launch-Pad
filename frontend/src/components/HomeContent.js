import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const HomeContent = () => {
  const navigate = useNavigate();
  const { ref: whoWeAreRef, inView: whoWeAreInView } = useInView({ triggerOnce: true });
  const { ref: forStudentsRef, inView: forStudentsInView } = useInView({ triggerOnce: true });
  const { ref: whyJoinUsStudentRef, inView: whyJoinUsStudentInView } = useInView({ triggerOnce: true });
  const { ref: forUniversitiesRef, inView: forUniversitiesInView } = useInView({ triggerOnce: true });
  const { ref: whyJoinUsUniversityRef, inView: whyJoinUsUniversityInView } = useInView({ triggerOnce: true });

  const handleUniSignupClick = () => {
    navigate('/StuSignup');
  };

  const handleStuSignupClick = () => {
    navigate('/CareerQuiz');
  };

  return (
    <div className="max-w-5xl mx-auto lg:w-full">
      {/* Who We Are Section */}
      <div ref={whoWeAreRef} className={`mb-12 lg:pl-0 ${whoWeAreInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>        
        <h2 className="text-2xl font-bold mb-4 underline decoration-teal-400 text-teal-800">Who We Are</h2>
        <p className="text-gray-700">
          At CareerLaunchPad, we bridge the gap between students seeking quality education and universities offering a diverse range of courses. Our platform empowers students to find, apply, and explore courses aligned with their goals, while universities can showcase their offerings to the right audience.
        </p>
      </div>

      {/* For Students Section */}
      <div ref={forStudentsRef} className={`flex items-start mb-12 lg:pl-0 ${forStudentsInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>        
        <div>
          <h3 className="text-2xl font-bold mb-4 underline decoration-teal-400 text-teal-800">For Students</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Discover courses that match your goals and interests.</li>
            <li>Take our personalized Career Quiz to reveal your ideal career path and find recommended courses.</li>
            <li>Stay informed with updates about new and updated courses in your desired field.</li>
            <li>Apply to courses with ease, rate programs you've completed, and share your feedback!</li>
          </ul>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div ref={whyJoinUsStudentRef} className={`flex items-start mb-12 lg:pl-0 ${whyJoinUsStudentInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>        
        <div>
          <h3 className="text-2xl mb-4 underline decoration-teal-400 text-teal-800">Why Join Us?</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Based on our quiz and your profile, we help you explore career options and suggest courses that align with your future.</li>
            <li>Apply to the courses you're interested in without any hassle.</li>
            <li>Get real-time updates on courses that match your interests so you never miss an opportunity.</li>
          </ul>
        </div>
      </div>

      {/* Get Started Section */}
      <div ref={whyJoinUsStudentRef} className={`${whyJoinUsStudentInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>
      <p className="mb-4 text-lg font-medium">Get Started:</p>
      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white shadow" onClick={handleStuSignupClick}>
        <div className="absolute inset-0 w-3 bg-teal-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-gray-700 group-hover:text-white">Register as a Student</span>
      </button>
    </div>

      {/* For Universities Section */}
      <div ref={forUniversitiesRef} className={`flex items-start mb-12 lg:pl-0 ${forUniversitiesInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>        
        <div>
          <h3 className="text-2xl font-bold mb-4 underline decoration-teal-400 text-teal-800 pt-10">For Universities</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Register to promote your programs and reach a targeted student base interested in your subjects.</li>
            <li>Easily update course details and instantly notify students looking for programs in your subject areas.</li>
            <li>Benefit from student feedback to refine and promote your courses.</li>
          </ul>
        </div>
      </div>
      {/* Why Join Us Section */}
      <div ref={whyJoinUsUniversityRef} className={`flex items-start mb-12 lg:pl-0 ${whyJoinUsUniversityInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>        
        <div>
          <h3 className="text-2xl mb-4 underline decoration-teal-400 text-teal-800">Why Join Us?</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Based on our quiz and your profile, we help you explore career options and suggest courses that align with your future.</li>
            <li>Apply to the courses you're interested in without any hassle.</li>
            <li>Get real-time updates on courses that match your interests so you never miss an opportunity.</li>
          </ul>
        </div>
      </div>

      {/* Get Started Section */}
      <div ref={whyJoinUsUniversityRef} className={`${whyJoinUsUniversityInView ? 'translate-x-0 opacity-100 transition-transform duration-1000 ease-in-out' : '-translate-x-10 opacity-0 transition-transform duration-1000 ease-in-out'}`}>        
        <p className="mb-4 text-lg font-medium">Get Started:</p>
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white shadow" onClick={handleUniSignupClick}>
        <div className="absolute inset-0 w-3 bg-teal-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-gray-700 group-hover:text-white">Register as a University</span>
      </button>
      </div>
    </div>
  );
};

export default HomeContent;
