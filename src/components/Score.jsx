
import styles from "./Score.module.css"
function Score({date,score})
{
    return(
        <div className={styles.scoreContainer}>
      
            <p className={styles.item}>{date}</p>
            <p className={styles.item}>{score}</p>
       
        </div>

    )

}

export default Score



