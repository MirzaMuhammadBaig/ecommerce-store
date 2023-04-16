import FilterNavbar from "newCompounts/filter/filternavbar";
import SideFilter from "newCompounts/filter/sidefilter";
import Newfooter from "newCompounts/newfooter";
import  Button  from "../newCompounts/filter/button";
import Navbar from "../newCompounts/navbar"
function mainFilter() {
    return (
      <>
        <Navbar />
        <FilterNavbar />
        <br />
        <div >

        <Button/>
        </div>
        <br />
        <hr />
        <div className="">
          
          <SideFilter />
          <br />
          <br />
        
         
</div>

   
        {/* <Newfooter /> */}
      </>
    );
}

export default mainFilter;