import Header from "../../../component/About_Logo/Header";
import Btn from "../../../component/About_Nav/Btn";
import '../../../styles/Btn.css';
import { useNavigate } from "react-router-dom";

function Venue_information_page() {
  const navigate = useNavigate();

  const navigateToPlay = () => {
    navigate("/Gutenberg_Play_information_page");
  };
  const navigateToSchedule = () => {
    navigate("/Gutenberg_Actor_schedule_page");
  };
  const navigateToEvent = () => {
    navigate("/Gutenberg_Event_page");
  };
  const navigateToVenue = () => {
    navigate("/Gutenberg_Venue_information_page");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {/* Header */}
    <Header />
  
    <Btn
        navigateToPlay={navigateToPlay}
        navigateToSchedule={navigateToSchedule}
        navigateToEvent={navigateToEvent}
        navigateToVenue={navigateToVenue}
      />

    {/* Main Content */}
    <div style={{ flex: 1 }}>
        <img src='https://ticketimage.interpark.com/230086792023/06/21/7b5ca869.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/Play/ITM/Data/Modify/2023/8/2023080413182059.jpg'
        style={{ width: '100%', height: 'auto'}} />
        </div>

  </div>
  );
}

export default Venue_information_page;