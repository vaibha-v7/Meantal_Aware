import { useState, useEffect } from 'react';

const SurveyStats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    anxiety: 0,
    depression: 0,
    stress: 0,
    seeking: 0
  });

  const targetStats = {
    anxiety: 40,
    depression: 35,
    stress: 60,
    seeking: 25
  };

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 16; // ~60fps
    const totalFrames = animationDuration / frameDuration;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setAnimatedStats({
        anxiety: Math.floor(progress * targetStats.anxiety),
        depression: Math.floor(progress * targetStats.depression),
        stress: Math.floor(progress * targetStats.stress),
        seeking: Math.floor(progress * targetStats.seeking)
      });

      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mental Health Survey Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recent surveys reveal concerning statistics about mental health in our society.
            Understanding these numbers is the first step toward creating meaningful change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="text-purple-700 text-5xl font-bold mb-2">{animatedStats.anxiety}%</div>
            <div className="w-full bg-gray-200 h-2 mb-4 rounded-full">
              <div 
                className="bg-purple-700 h-2 rounded-full" 
                style={{ width: `${animatedStats.anxiety}%` }}
              ></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Anxiety Disorders</h3>
            <p className="text-gray-600">
              of adults reported experiencing symptoms of anxiety in the past year
            </p>
          </div>

          <div className="card text-center">
            <div className="text-indigo-600 text-5xl font-bold mb-2">{animatedStats.depression}%</div>
            <div className="w-full bg-gray-200 h-2 mb-4 rounded-full">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${animatedStats.depression}%` }}
              ></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Depression</h3>
            <p className="text-gray-600">
              of people have experienced major depressive episodes
            </p>
          </div>

          <div className="card text-center">
            <div className="text-violet-600 text-5xl font-bold mb-2">{animatedStats.stress}%</div>
            <div className="w-full bg-gray-200 h-2 mb-4 rounded-full">
              <div 
                className="bg-violet-600 h-2 rounded-full" 
                style={{ width: `${animatedStats.stress}%` }}
              ></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Work-Related Stress</h3>
            <p className="text-gray-600">
              of employees report work as a significant source of stress
            </p>
          </div>

          <div className="card text-center">
            <div className="text-purple-800 text-5xl font-bold mb-2">{animatedStats.seeking}%</div>
            <div className="w-full bg-gray-200 h-2 mb-4 rounded-full">
              <div 
                className="bg-purple-800 h-2 rounded-full" 
                style={{ width: `${animatedStats.seeking}%` }}
              ></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Seeking Help</h3>
            <p className="text-gray-600">
              of those with mental health conditions actually seek professional help
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic mb-4">
            Data based on national mental health surveys conducted between 2020-2023.
          </p>
          <a href="#" className="text-purple-700 font-medium hover:underline">
            View Complete Survey Results →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SurveyStats; 