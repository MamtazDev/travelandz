import Breakfast from "./Breakfast"
import DinnerTime from "./dinnerTime"
import EveningTime from "./eveningTime"
import LaunchTime from "./launchTime"
import NightTime from "./nightTime"
import TimelineMorning from "./timelineMorning"

const NewVerticalTimeline = () => {
  return (
    <ol style={{borderLeft:"1px solid #B6C4E8"}} className="relative">
     <Breakfast/>
     <TimelineMorning/>
     <LaunchTime/>
     <EveningTime/>
     <DinnerTime/>
     <NightTime/>
  </ol>
  
  )
}

export default NewVerticalTimeline