import SkillBadge from './SkillBadge';

function SkillsList({ skills }) {
  return (
    <div className="skills-section">
      <span className="skills-label">Skills</span>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsList;