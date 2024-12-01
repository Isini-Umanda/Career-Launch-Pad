import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AllCourseDetails from '../components/AllCourseDetails';
import { useAuthContext } from '../hooks/useAuthContext';

const careerCategories = {
  "Accounting": ["Accountant"],
  "Computing" : ["Data Analyst", "Data Scientist", "Database Administrator", "Database Analyst", "Video Game Tester", "Web Developer", "Game Tester", "Graphic Designer", 
    "IT Project Manager", "UI/UX Designer", "IT Support Specialist", "Software Developer", "Software Quality Assurance Tester", "Game Designer", "Game Developer"],
  "Engineering" : ["Financial Advisor", "Financial Analyst", "Financial Auditor", "Financial Planner", "Insurance Underwriter", "Marketing Copywriter", "Marketing Manager", 
    "Investment Banker", "Teachnical Project Manager", "HR Recruiter", "Human Resources Manager", "Salesperson", "Social Media Manager", "Market Researcher", "Marketing Analyst",
    "Marketing Researcher", "Product Manager", "Administrative Officer", "Corporate Communications Manager", "Event Planner", "Public Relations Manager", "Quality Control Inspector", 
    "Tax Accountant", "Tax Collector", "Market Research Analyst", "Real Estate Agent", "Advertising Executive"],
  "Medicine" : ["Pediatric Doctor", "Physician", "Chiropractor", "Clinical Research Coordinator", "Pediatrician", "Physical Therapist", "Public Health Analyst", "Radiologic Technologist", "Occupational Therapist"], 
  "Nursing" : ["Nurse", "Pediatric Nurse"], 
  "Speech and Language" :["Speech Pathologist", "Speech Therapist"],
  "Veterinarian" : ["Zoologist"], 
  "Pharmacist" : ["Pharmacist"],
  "Architecture" : ["Interior Designer", "Architect"],
  "Education" : ["Teacher", "Elementary School Teacher", "Special Needs Education Teacher", "Sports Coach"],
  "Strategic Studies" : ["Public Relations Specialist", "Diplomat", "Foreign Service Officer", "Transportation Planner"],
  "Psychology" : ["Psychologist", "Conservation Therapist", "Rehabilitation Counselor", "Behavior Therapist", "Counsellor", "Forensic Psychologist", "Marriage Counselor", "Family Therapist"],
  "Criminology": ["Police Detective", "Police Officer", "Customs and Border Protection Officer"], 
  "Environmental Science": ["Wildlife Biologist", "Wildlife Conservationist", "Hydrologist", "Sustainability Consultant", "Environmental Engineer", "Environmental Scientist", "Ecologist", "Forensic Scientist", "Forestry Technician", "Park Ranger"], 
  "Environmental Management": ["Urban Planner"], 
  "Law": ["Lawyer", "Human Rights Lawyer"], 
  "Media": ["Journalist"],
  "industrial design": ["Industrial Designer"], 
  "Civil Engineer": ["Civil Engineer", "Construction Engineer"],
  "Mechanical Engineer": ["Mechanical Engineer", "Mechanical Designer"],
  "Electrical and Electronics": ["Electrical Engineer", "Electronics Design Engineer"],
  "Biotechnology": ["Biologist", "Biomedical Engineer", "Biomedical Researcher", "Biotechnologist", "Genetic Counselor"],
  "Arts" : ["Chef", "Technical Writer", "Artist", "Event Photographer", "Film Director", "Furniture Designer"], 
  "Music": ["Musician"],
  "Textile and Apperal": ["Fashion Designer", "Fashion Stylist"],
  "Science": ["Marine Biologist", "Research Scientist", "Geologist"],  
  "Social Science": ["Social Worker"], 
  "Aviation": ["Air Traffic Controller", "Airline Pilot", "Flight Instructor", "Aviation Safety Inspector"],  
  "Astrophysics": ["Aerospace Engineer", "Astronomer"] 
};


// Function to get the category for a given career path
const getCategoryByCareerPath = (careerPath) => {
  console.log("Looking for category of career path:", careerPath);
  const normalizedCareerPath = careerPath.toLowerCase();
  for (const [category, careerPaths] of Object.entries(careerCategories)) {
    if (careerPaths.map(path => path.toLowerCase()).includes(normalizedCareerPath)) {
      console.log(`Match found: ${careerPath} -> ${category}`);
      return category;
    }
  }
  console.log("No match found for career path:", careerPath);
  return "Unknown";
};

const ModelAnswer = () => {
  const [activePath, setActivePath] = useState('students');
  const location = useLocation();
  const careerPath = location.state?.careerPath || "Unknown Career Path";
  const { user } = useAuthContext(); 
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const category = getCategoryByCareerPath(careerPath);

  useEffect(() => {
    const fetchCourses = async () => {
      if (!user) {
        setError("User not logged in. Please log in to view courses.");
        setLoading(false);
        return;
      }

      if (category === "Unknown") {
        setError("No category found for the predicted career path.");
        setLoading(false);
        return;
      }

      try {
        console.log('Fetching courses for category:', category);
        const response = await axios.get(`/api/courses/subject/${category}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });

        console.log('Response received:', response);
        if (response.status === 200) {
          if (response.data && response.data.length === 0) {
            console.log('No courses found for this category');
            setCourses([]);
          } else {
            console.log('Courses found:', response.data);
            setCourses(response.data);
          }
          setError(null);
        } else {
          setError("Failed to fetch courses. Please try again.");
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
        const errorMessage = err.response?.data?.error || "Failed to fetch courses. Please try again.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category, user]);

  if (category === "Unknown") {
    return (
      <div>
        <Navbar activePath={activePath} onNavClick={setActivePath} />
        <div className="model-answer p-8">
          <h1 className="text-3xl font-bold text-teal-600">Your Recommended Career Path</h1>
          <h2 className="text-lg font-bold">Predicted Career Path: {careerPath}</h2>
          <p className="text-red-500">No category found for the predicted career path.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar activePath={activePath} onNavClick={setActivePath} />
      <div className="model-answer p-8"> 
        <h1 className="text-3xl text-center font-bold text-teal-600">Your Recommended Career Path</h1>
        <h2 className="text-lg text-gray-700 mt-4 text-center ">Based on your answers, We recommend 
        <span className='font-bold'> {careerPath} </span> for you.</h2>
        {loading && (
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && courses.length === 0 && <p>No courses found for this category.</p>}
        {!loading && courses.length > 0 && (
          <>
            <h3 className="text-lg text-gray-700 mt-4">Recommended Courses </h3>
            <div className="grid grid-cols-4 gap-8 p-8">
                {courses.map((course) => (
                  <AllCourseDetails key={course._id} course={course} />
                ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ModelAnswer;