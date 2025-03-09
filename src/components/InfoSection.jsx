import { Link } from 'react-router-dom';

const InfoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Mental Health</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mental health affects how we think, feel, and act. It also helps determine how we handle stress, 
            relate to others, and make choices. Mental health is important at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Breaking the Stigma</h3>
            <p className="text-gray-600 mb-6">
              Despite the prevalence of mental health conditions, stigma and misconceptions persist. 
              Many people face discrimination, which can worsen their symptoms and prevent them from 
              seeking help. By educating ourselves and others, we can break down these barriers.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>1 in 5 adults experience mental illness each year</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>50% of all lifetime mental illness begins by age 14</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Suicide is the 2nd leading cause of death among people aged 10-34</span>
              </li>
            </ul>
            <Link to="/resources" className="text-purple-700 font-medium hover:underline">
              Learn more about mental health facts →
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/12/improving-mental-health-with-photography.jpg" 
              alt="Breaking the Mental Health Stigma" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '250px', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 md:flex-row-reverse">
          <div className="flex flex-col justify-center md:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Warning Signs to Watch For</h3>
            <p className="text-gray-600 mb-6">
              Recognizing the warning signs of mental health issues is crucial for early intervention. 
              These signs can vary depending on the condition, but there are some common indicators 
              that might suggest someone is struggling with their mental health.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-purple-700 mb-2">Emotional Signs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Persistent sadness or irritability</li>
                  <li>• Excessive fears or worries</li>
                  <li>• Extreme mood changes</li>
                  <li>• Feelings of guilt or worthlessness</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-purple-700 mb-2">Behavioral Signs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Withdrawal from social activities</li>
                  <li>• Changes in sleeping or eating patterns</li>
                  <li>• Difficulty concentrating</li>
                  <li>• Substance abuse</li>
                </ul>
              </div>
            </div>
            <Link to="/warning-signs" className="text-purple-700 font-medium hover:underline">
              View all warning signs →
            </Link>
          </div>
          <div className="flex justify-center items-center md:order-1">
            <img 
              src="https://thumbs.dreamstime.com/b/sad-man-face-reflex-mirror-hand-drawn-stroke-isolated-white-background-mental-health-illness-brain-development-medical-234269083.jpg" 
              alt="Mental Health Warning Signs" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: '250px', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Take Action for Mental Health</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              There are many ways to support mental health awareness and make a difference in your community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Educate Yourself</h4>
              <p className="text-gray-600">
                Learn about mental health conditions, their symptoms, and treatment options.
              </p>
            </div>
            <div className="card text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Start Conversations</h4>
              <p className="text-gray-600">
                Talk openly about mental health to reduce stigma and encourage others to seek help.
              </p>
            </div>
            <div className="card text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Support Others</h4>
              <p className="text-gray-600">
                Be there for friends and family who may be struggling with mental health issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 