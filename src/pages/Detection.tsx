import "../styles/detection.css"

const Detection = () => {
  return (
    <div>
      <form className="detection_form" action="">
        <input type="text" placeholder="URL" className="detection_url" />
        <input type="submit" value="Check" className="detection_submit" />
        <textarea name="" id="" cols={30} rows={10} placeholder="Write Up" className="detection_writeup"></textarea>
        <button type="submit" className="detection_submit">Check</button>
      </form>
    </div>
  )
}

export default Detection
