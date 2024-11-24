import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Survey = () => {
  const [activePath, setActivePath] = useState('students');
  const [currentPart, setCurrentPart] = useState(1);

  const handleNext = () => {
    setCurrentPart((prev) => Math.min(prev + 1, 10));
  };

  const handleBack = () => {
    setCurrentPart((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  // Define questions for each part
  const part1 = [
    'I enjoy exploring new ideas and perspectives.',
    'I like visiting new places and trying new experiences.',
    'I am interested in learning about different cultures and lifestyles.',
    'I enjoy thinking about abstract concepts and theories.',
    'I am open to changing my views when presented with new evidence.',
    'I have a vivid imagination and often think creatively.',
    'I enjoy arts and creative expressions like music, art, or literature.',
    'I prefer variety and dislike routines.',
    'I am comfortable with uncertainty and ambiguity.',
    'I am curious and love to learn about topics outside my field of study.'
  ];

  const part2 = [
    'I pay attention to details and work thoroughly on tasks.',
    'I often plan my tasks and goals well in advance.',
    'I am reliable in completing the responsibilities assigned to me.',
    'I am disciplined and can stay focused on long-term goals.',
    'I rarely make impulsive decisions; I think things through first.',
    'I set high standards for myself in work or study.',
    'I like to keep my workspace organized and tidy.',
    'I am careful about time management and being punctual.',
    'I am dedicated to finishing tasks on time, even when it\'s challenging.',
    'I double-check my work to avoid errors and mistakes.'
  ];

  const part3 = [
    'I feel energized when I spend time around other people.',
    'I enjoy meeting new people and making friends.',
    'I often take the lead in social situations or group projects.',
    'I like sharing my thoughts and opinions with others.',
    'I am comfortable in large groups or crowded spaces.',
    'I find it easy to start conversations with strangers.',
    'I enjoy working in teams and collaborating with others.',
    'I am outgoing and like to be the center of attention.',
    'I tend to speak up and express my opinions.',
    'I enjoy attending social gatherings and parties.'
  ];

  const part4 = [
    'I enjoy helping others and making them feel comfortable.',
    'I am empathetic and can understand others\' emotions.',
    'I work to resolve conflicts peacefully and avoid arguments.',
    'I am willing to compromise to maintain harmony in a group.',
    'I am forgiving and give people second chances.',
    'I like cooperating with others rather than competing.',
    'I am trustworthy and people can rely on me.',
    'I am polite and considerate toward others.',
    'I am patient and tolerant, even in challenging situations.',
    'I feel happy when I can support or encourage others.'
  ];

  const part5 = [
    'I feel calm and relaxed in stressful situations.',
    'I handle criticism without feeling overly upset.',
    'I am able to manage my emotions effectively.',
    'I can stay calm even when things don\'t go as planned.',
    'I rarely feel anxious or worried about the future.',
    'I am resilient and can bounce back quickly after setbacks.',
    'I am able to handle negative feedback without taking it personally.',
    'I am less likely to feel overwhelmed by work or responsibilities.',
    'I do not dwell on past mistakes or failures.',
    'I feel optimistic and don\'t get easily discouraged.'
  ];

  const part6 = [
    'I enjoy solving math problems and calculations.',
    'I find it easy to work with numbers and understand quantitative data.',
    'I can quickly calculate in my head without a calculator.',
    'I enjoy analyzing statistics and graphs.',
    'I feel confident interpreting data in spreadsheets or tables.',
    'I am comfortable with tasks that involve budgeting or financial planning.',
    'I am good at spotting patterns and trends in numerical data.',
    'I enjoy logical puzzles that involve numbers.',
    'I can easily understand mathematical formulas and equations.',
    'I find it interesting to make predictions or estimates based on data.'
  ];

  const part7 = [
    'I find it easy to visualize objects in three dimensions.',
    'I can imagine how an object would look if it were rotated.',
    'I am good at solving puzzles that involve shapes and space.',
    'I enjoy working on tasks that require understanding maps or layouts.',
    'I find it easy to assemble furniture or items following visual instructions.',
    'I can mentally rearrange objects to see how they might fit together.',
    'I can understand diagrams and technical drawings without difficulty.',
    'I enjoy activities like drawing, building, or designing structures.',
    'I can easily interpret floor plans or blueprints.',
    'I feel confident in tasks that involve estimating distances or dimensions.'
  ];

  const part8 = [
    'I am quick to notice small details that others might miss.',
    'I am accurate and careful when working on tasks that require precision.',
    'I find it easy to detect differences between similar objects.',
    'I am good at tasks that require attention to fine details.',
    'I am quick at spotting errors or inconsistencies in written or visual materials.',
    'I can identify patterns quickly in visual information.',
    'I am comfortable with tasks that require focusing for extended periods.',
    'I enjoy puzzles or games that require a sharp eye for detail.',
    'I can recall specific details even after a quick glance.',
    'I am precise and methodical when checking work or assignments.'
  ];

  const part9 = [
    'I can easily understand complex ideas and concepts.',
    'I enjoy solving puzzles that require logical thinking and deduction.',
    'I can identify the underlying principles in unfamiliar situations.',
    'I find it easy to connect abstract concepts to real-world examples.',
    'I can think outside the box and approach problems creatively.',
    'I am good at recognizing relationships between different ideas.',
    'I enjoy tasks that require identifying patterns or logical sequences.',
    'I am quick at solving riddles or logic puzzles.',
    'I am comfortable dealing with hypothetical scenarios.',
    'I can easily interpret symbols or abstract representations.'
  ];

 
  const partQuestions = {
    1: part1,
    2: part2,
    3: part3, 
    4: part4,
    5: part5,
    6: part6,
    7: part7,
    8: part8,
    9: part9,
  };

  return (
    <div>
      <Navbar
      activePath={activePath} 
      onNavClick={setActivePath}/>
    <div className="bg-gray-100 flex flex-col items-center min-h-screen">
      <h1 className="text-3xl font-bold mt-8 mb-4 text-teal-600">Discover Your Future: Take the Career Quiz!</h1>
      <p className="text-center text-lg mt-2 mb-6 text-gray-700">Answer a few simple questions and uncover the career path that's perfect for you.<br/>Be honest in your responses for accurate results and personalized course recommendations.<br/>Your dream future starts here!</p>
      <div className="bg-white shadow-md rounded p-8 max-w-3xl min-h-[800px]">
        <form onSubmit={handleSubmit}>
          {currentPart <= 9 && (
            <div>
              {/* Questions for current part */}
              {(partQuestions[currentPart] || []).map((question, index) => (
                <div key={`part${currentPart}-question${index + 1}`} className="mb-8">
                  <div className="border-2 border-emerald-400 p-2 rounded-full">
                    <p className="font-medium text-lg text-gray-700">{index + 1}. {question}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={`part${currentPart}-question${index + 1}-option${value}`} className="flex flex-col items-center">
                        <div className='text-center mb-1'>{value}</div>
                        <input type="radio" name={`part${currentPart}-question${index + 1}`} value={value} className="mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                {currentPart > 1 && (
                  <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded mt-4">Back</button>
                )}
                <button type="button" onClick={handleNext} className="bg-teal-500 text-white py-2 px-4 rounded mt-4">Next</button>
              </div>
            </div>
          )}

          {currentPart === 10 && (
            <div>
              {/* Part 10 Questions */}
              {[...Array(10)].map((_, index) => (
                <div key={`part10-question${index + 1}`} className="mb-8">
                  <p className="font-medium text-lg text-gray-700">
                    {index + 1}. 
                    {index === 0 && "I can easily understand complex written materials."}
                    {index === 1 && "I am confident in expressing ideas clearly in words."}
                    {index === 2 && "I can summarize information accurately in my own words."}
                    {index === 3 && "I enjoy reading and understanding diverse types of content."}
                    {index === 4 && "I am good at understanding the deeper meaning behind what others say."}
                    {index === 5 && "I can quickly grasp the main points of written or spoken material."}
                    {index === 6 && "I am comfortable with vocabulary and word usage."}
                    {index === 7 && "I enjoy discussions that require logical arguments and persuasion."}
                    {index === 8 && "I can easily interpret information from written instructions."}
                    {index === 9 && "I find it easy to pick up on implied meanings in conversations or texts."}</p>
                  <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <div key={`part10-question${index + 1}-option${value}`} className="flex flex-col items-center">
                        <div className='text-center mb-1'>{value}</div>
                        <input type="radio" name={`part10-question${index + 1}`} value={value} className="mt-1" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded mt-4">Back</button>
                <button type="submit" className="bg-teal-700 text-white py-2 px-4 rounded mt-4">Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Survey;
