import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Mental Health Matters: <span className="text-purple-700">Understanding, Awareness, Action</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join our community dedicated to raising awareness about mental health issues, 
            breaking stigmas, and providing resources for those in need. Together, we can 
            make a difference in mental health awareness.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/surveys" className="btn">
              Take Our Survey
            </Link>
            <Link to="/resources" className="btn bg-white text-purple-700 border border-purple-700 hover:bg-purple-50">
              Explore Resources
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs=" 
            alt="Mental Health Awareness" 
            className="rounded-lg shadow-xl max-w-full h-auto"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 