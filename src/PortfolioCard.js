// PortfolioCard.js
import { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileBio from './components/ProfileBio';
import SkillsList from './components/SkillsList';
import CardFooter from './components/CardFooter';
import { PROFILES } from './data/profiles';

export default function PortfolioCard() {

  const [dark, setDark] = useState(false);
  const [profileIndex, setProfileIndex] = useState(0);
  const [likes, setLikes] = useState(128);
  const [liked, setLiked] = useState(false);


  const profile = PROFILES[profileIndex];
  const total = PROFILES.length;

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((n) => n - 1);
    } else {
      setLiked(true);
      setLikes((n) => n + 1);
    }
  };

  return (
    <div className={`page ${dark ? 'dark' : 'light'}`}>
        <div className="top-bar">
            <button
                type="button"
                className="btn-theme-toggle"
                onClick={() => setDark((d) => !d)}
                >
                {dark ? '☀' : '🌙'} {dark ? 'Light' : 'Dark'}
            </button>
        </div>

      <div className="card">
        <ProfileHeader
          name={profile.name}
          title={profile.title}
          avatar={profile.avatar}
        />
        <ProfileBio bio={profile.bio} />
        <SkillsList skills={profile.skills} />
        <CardFooter
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
          onPrev={() => setProfileIndex((i) => (i - 1 + total) % total)}
          onNext={() => setProfileIndex((i) => (i + 1) % total)}
          current={profileIndex + 1}
          total={total}
          likes={likes}
          liked={liked}
          onLike={handleLike}
          onContact={() => alert(`Contact ${profile.name}`)}
        />
      </div>
    </div>
  );
}
