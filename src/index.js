import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import reportWebVitals from './reportWebVitals';

import { Route, Routes, BrowserRouter } from "react-router-dom";

// page 폴더
import Main_page from "./page/All_Main_page/Main_page.js";
import My_page from "./page//My_page/My_page.js";
import My_info_page from "./page//My_page/My_info_page.js";
import Schedule_page from "./page/Schedule_page.js";

import SignUp_page from "./page/Login/SignUp_page.js";

import Play_infor_home_page from "./page/Performance/Play_infor_home_page";
import Sunny_Play_information_page from "./page/Performance/Sunnyten/Sunny_Play_information_page.js";
import Sunny_Actor_schedule_page from "./page/Performance/Sunnyten/Sunny_Actor_schedule_page.js";
import Sunny_Event_page from "./page/Performance/Sunnyten/Sunny_Event_page.js";
import Sunny_Venue_information_page from "./page/Performance/Sunnyten/Sunny_Venue_information_page.js";

import Gutenberg_Play_information_page from "./page/Performance/Gutenberg/Gutenberg_Play_information_page.js";
import Gutenberg_Actor_schedule_page from "./page/Performance/Gutenberg/Gutenberg_Actor_schedule_page.js";
import Gutenberg_Event_page from "./page/Performance/Gutenberg/Gutenberg_Event_page.js";
import Gutenberg_Venue_information_page from "./page/Performance/Gutenberg/Gutenberg_Venue_information_page.js";

import Extinction_Play_information_page from "./page/Performance/Extinction/Extinction_Play_information_page.js";
import Extinction_Actor_schedule_page from "./page/Performance/Extinction/Extinction_Actor_schedule_page.js";
import Extinction_Event_page from "./page/Performance/Extinction/Extinction_Event_page.js";
import Extinction_Venue_information_page from "./page/Performance/Extinction/Extinction_Venue_information_page.js";

import Count_Play_information_page from "./page/Performance/Count/Count_Play_information_page.js";
import Count_Actor_schedule_page from "./page/Performance/Count/Count_Actor_schedule_page.js";
import Count_Event_page from "./page/Performance/Count/Count_Event_page.js";
import Count_Venue_information_page from "./page/Performance/Count/Count_Venue_information_page.js";

import The_tale_Play_information_page from "./page/Performance/The_tale/The_tale_Play_information_page.js";
import The_tale_Actor_schedule_page from "./page/Performance/The_tale/The_tale_Actor_schedule_page.js";
import The_tale_Event_page from "./page/Performance/The_tale/The_tale_Event_page.js";
import The_tale_Venue_information_page from "./page/Performance/The_tale/The_tale_Venue_information_page.js";


import ConcertHall_page from "./page/All_ConcertHall_page/ConcertHall_page";
import Information from "./page/All_ConcertHall_page/Information_page";
import Seeya from "./page/All_ConcertHall_page/Seeya_page";
import NowPerformance from "./page/All_ConcertHall_page/NowPerformance_page";
import Location from "./page/All_ConcertHall_page/Location_page";
import WishList_page from "./page/WishList_page";
import TheaterPage from "./page/All_ConcertHall_page/TheaterPage";


import PmShowList_page from "./page/PmShowList_page";
import ActorList_page from "./page/ActorList_page";
import TheaterList_page from "./page/TheaterList_page";
import TheaterList from "./component/TheaterList";
import Actor_page from "./page/Actor_page";


// component 폴더
import Popular_playList from "./component/About_Performance/Popular_play";

import FixedBottomNavigation from "./component/About_Nav/BottomNav";
import Cjazit from "./seeya/Cjazit";
import JTN_1 from "./seeya/JTN_1";
import Ktg from "./seeya/Ktg";
import LGArt from "./seeya/LGArt";
import LG_sig from "./seeya/LG_signature_hall";
import Tom_1 from "./seeya/Tom_1";
import Tom_2 from "./seeya/Tom_2";
import KyemyungArt from "./seeya/KyemyungArt";
import SearchPage from "./component/About_Search/PickUp";

import ActorList from "./component/ActorList";
import ActorDetail from "./component/ActorDetail";

import PmShowList from "./component/PmShowList";
import PmShowDetail from "./component/PmShowDetail";

//seeya 폴더
import Jayu from "./seeya/Jayu";
import Test from "./seeya/test";
import TestJayu from "./seeya/Test_Jayu";

//component - test
import SeatMap from "./component/Seat_test"; 
import ConcertHall_SearchBar from "./component/About_Search/ConcertHall_SearchBar";
import Top_PerformanceList from "./component/About_Performance/TopPopular_play";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<FixedBottomNavigation />}>
        <Route path={"/C_H_Search"} element={
          <ConcertHall_SearchBar/>} />
        <Route path={"/TestJayu"} element={<TestJayu/>}/>
        
        <Route path={"/seatmap"} element={<SeatMap/>}/>
        <Route path={"/jayu"} element={<Jayu/>}/>
        <Route path={"/test"} element={<Test/>}/>
        <Route path={"/"} element={<Main_page />} />
        <Route path={"/Main_page"} element={<Main_page />} />
        {/* <Route path={"/SearchBar"} element={<SearchBar />} /> */}
        {/* <Route path={"/Pagination"} element={<PaginationSize />} /> */}
        <Route path={"/Popular_play"} element={<Popular_playList />} />
        <Route path={"/My_page"} element={<My_page />} />
        <Route path={"/My_info_page"} element={<My_info_page />} />
        <Route path={"/WishList_page"} element={<WishList_page />} />
        <Route path={"/Schedule_page"} element={<Schedule_page />} />

        <Route path={"/Play_infor_home_page"} element={<Play_infor_home_page />} />
        <Route path={"/Sunny_Play_information_page"} element={<Sunny_Play_information_page />} />
        <Route path={"/Sunny_Actor_schedule_page"} element={<Sunny_Actor_schedule_page />} />
        <Route path={"/Sunny_Event_page"} element={<Sunny_Event_page />} />
        <Route path={"/Sunny_Venue_information_page"} element={<Sunny_Venue_information_page />} />

        <Route path={"/Gutenberg_Play_information_page"} element={<Gutenberg_Play_information_page />} />
        <Route path={"/Gutenberg_Actor_schedule_page"} element={<Gutenberg_Actor_schedule_page />} />
        <Route path={"/Gutenberg_Event_page"} element={<Gutenberg_Event_page />} />
        <Route path={"/Gutenberg_Venue_information_page"} element={<Gutenberg_Venue_information_page />} />

        <Route path={"/Extinction_Play_information_page"} element={<Extinction_Play_information_page />} />
        <Route path={"/Extinction_Actor_schedule_page"} element={<Extinction_Actor_schedule_page />} />
        <Route path={"/Extinction_Event_page"} element={<Extinction_Event_page />} />
        <Route path={"/Extinction_Venue_information_page"} element={<Extinction_Venue_information_page />} />

        <Route path={"/Count_Play_information_page"} element={<Count_Play_information_page />} />
        <Route path={"/Count_Actor_schedule_page"} element={<Count_Actor_schedule_page />} />
        <Route path={"/Count_Event_page"} element={<Count_Event_page />} />
        <Route path={"/Count_Venue_information_page"} element={<Count_Venue_information_page />} />

        <Route path={"/The_tale_Play_information_page"} element={<The_tale_Play_information_page />} />
        <Route path={"/The_tale_Actor_schedule_page"} element={<The_tale_Actor_schedule_page />} />
        <Route path={"/The_tale_Event_page"} element={<The_tale_Event_page />} />
        <Route path={"/The_tale_Venue_information_page"} element={<The_tale_Venue_information_page />} />

        <Route path={"/PmShowList_page"} element={<PmShowList_page />} />
        <Route path={"/ActorList_page"} element={<ActorList_page />} />
        <Route path={"/TheaterList_page"} element={<TheaterList_page />} />
        <Route path={"/Actor_page"} element={<Actor_page />} />
        
        <Route path="/ConcertHall_page" element={<ConcertHall_page/>}/>
        
        <Route path="/theater/:theaterId" element={<TheaterPage/>} >
          <Route path={"Infomation_page"} element={<Information/>}/>
          <Route path={"Location_page"} element={<Location />} />
          <Route path={"Seeya_page"} element={<Seeya />} />
          <Route path={"NowPerformance_page"} element={<NowPerformance />} />
        </Route>

        <Route path={"/SignUp_page"} element={<SignUp_page />} />

        <Route path={"/Cjazit"} element={<Cjazit />} />
        <Route path={"/JTN_1"} element={<JTN_1 />} />
        <Route path={"/Ktg"} element={<Ktg />} />
        <Route path={"/LGArt"} element={<LGArt />} />
        <Route path={"/LG_sig"} element={<LG_sig />} />
        <Route path={"/Tom_1"} element={<Tom_1 />} />
        <Route path={"/Tom_2"} element={<Tom_2 />} />
        <Route path={"/KyemyungArt"} element={<KyemyungArt />} />
        <Route path={"/App"} element={<App />} />

        <Route path={"/SearchPage"} element={<SearchPage/>}/>
      </Route>
      
        <Route path="/ActorList" element={<ActorList />} />
        <Route path="/actor/:actorId" element={<ActorDetail />} /> 

        <Route path="/" element={<PmShowList />} /> 
        <Route path="/pmshow/:pmShowId" element={<PmShowDetail />} /> 
    </Routes>
  </BrowserRouter>
);
