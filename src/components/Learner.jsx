import styles from "./Learner.module.css"
import Score from "./Score";
function Learner({ name, bio, scores }) {
  return (
    <div className={styles.learner}>
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      <div className={styles.scoreHeader}>
        <p className={styles.headerNames}>Date</p>
        <p className={styles.headerNames}>Value</p>
      </div>
     
      {scores.length > 0 ? (
        scores.map((scoreObject, index) => (
          <Score key={index} {...scoreObject} />
        ))
      ) : (
        <p>No scores available.</p>
      )}
    </div>
  );
}

export default Learner;
