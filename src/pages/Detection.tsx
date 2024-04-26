import style from "../styles/detection.module.css"

const Detection = () => {
  return (
    <div>
      <form className={style.form} action="">
        <input type="text" placeholder="URL" className={style.url} />
        <input type="submit" value="Check" className={style.submit} />
        <textarea name="" id="" cols={30} rows={10} placeholder="Write Up" className={style.writeup}></textarea>
        <button type="submit" className={style.submit}>Check</button>
      </form>
    </div>
  )
}

export default Detection
