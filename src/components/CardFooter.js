function CardFooter({ dark, onToggleDark, onPrev, onNext, current, total, likes, liked, onLike, onContact }) {
  return (
    <div className="card-footer">
      <button className="btn-ghost" onClick={onToggleDark} aria-label="Toggle dark mode">
        {dark ? '☀' : '◑'} {dark ? 'Light' : 'Dark'}
      </button>
      <div className="nav-group">
        <button className="btn-icon" 
        onClick={onPrev} 
        aria-label="Previous profile">‹</button>
        <button className="btn-icon" onClick={onNext} aria-label="Next profile">›</button>
        <span className="nav-counter">{current} / {total}</span>
      </div>
      <button className={`btn-like ${liked ? 'liked' : ''}`} onClick={onLike} aria-label="Like">
        ♥ {likes}
      </button>
      <button className="btn-primary" onClick={onContact}>
        ✉ Contact
      </button>
    </div>
  );
}

export default CardFooter;