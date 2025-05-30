import { useState, useEffect } from 'react';
import { API_ROUTES } from '../constants/api';

interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${API_ROUTES.base}${API_ROUTES.skills}`);
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }
        const data = await response.json();
        setSkillCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">Skills</h2>
          <div className="text-center dark:text-white">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">Skills</h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-sm shadow-sm dark:shadow-gray-900">
              <h3 className="text-xl font-bold mb-4 dark:text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="text-secondary dark:text-gray-300 relative w-fit cursor-pointer group"
                  >
                    {skill}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 