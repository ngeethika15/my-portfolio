import './AboutPage.css';
import AboutSection from '../components/AboutSection/AboutSection';
import GitHubStats from '../components/GitHubStats/GitHubStats';
import SkillCard from '../components/SkillCard/SkillCard';

const SKILLS = [
  { name: 'HTML5', level: 'Advanced', icon: '🌐' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' },
  { name: 'GitHub', level: 'Intermediate', icon: '🐙' },
  { name: 'Python', level: 'Intermediate', icon: '🟢' },
  { name: 'C', level: 'Intermediate', icon: '🚂' },
  { name: 'AWS', level: 'Advanced', icon: '🚀' },
  { name: 'SQL', level: 'Intermediate', icon: '🗄️' },
  { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
  { name: 'Microsoft Azure', level: 'Intermediate', icon: '🚂' },
  { name: 'LAMP Stack', level: 'Intermediate', icon: '🍃' },
];

function About() {
  return (
    <div className='about-page container'>
      <AboutSection />

      <section id='skills' className='skills-section' style={{ marginTop: '40px' }}>
        <h2>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {SKILLS.map(s => <SkillCard key={s.name} name={s.name} level={s.level} icon={s.icon} />)}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>GitHub Activity</h2>
        <GitHubStats username='ngeethika15' />
      </section>
    </div>
  );
}
export default About;