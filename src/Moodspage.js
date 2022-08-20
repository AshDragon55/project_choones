import './Moodspage.css';

function Moods() {

  return (
<>
    <h1>What is Your Mood Today?</h1>
    <h4>Select three icons which describe your mood today.</h4>
  </>  
    <div className="container1">
        <div className="search-box">
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search for Mood">
        </div>
    </div>
<br>
<div className="wrapper">
    <div className="container">
      <input type="checkbox" id="happy" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
      <label for="Happy">
        <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM226.5 231.6C229.8 230.5 232 227.4 232 224C232 206.1 225.3 188.4 215.4 175.2C205.6 162.2 191.5 152 176 152C160.5 152 146.4 162.2 136.6 175.2C126.7 188.4 120 206.1 120 224C120 227.4 122.2 230.5 125.5 231.6C128.7 232.7 132.3 231.6 134.4 228.8L134.4 228.8L134.6 228.5C134.8 228.3 134.1 228 135.3 227.6C135.1 226.8 136.9 225.7 138.1 224.3C140.6 221.4 144.1 217.7 148.3 213.1C157.1 206.2 167.2 200 176 200C184.8 200 194.9 206.2 203.7 213.1C207.9 217.7 211.4 221.4 213.9 224.3C215.1 225.7 216 226.8 216.7 227.6C217 228 217.2 228.3 217.4 228.5L217.6 228.8L217.6 228.8C219.7 231.6 223.3 232.7 226.5 231.6V231.6zM377.6 228.8C379.7 231.6 383.3 232.7 386.5 231.6C389.8 230.5 392 227.4 392 224C392 206.1 385.3 188.4 375.4 175.2C365.6 162.2 351.5 152 336 152C320.5 152 306.4 162.2 296.6 175.2C286.7 188.4 280 206.1 280 224C280 227.4 282.2 230.5 285.5 231.6C288.7 232.7 292.3 231.6 294.4 228.8L294.4 228.8L294.6 228.5C294.8 228.3 294.1 228 295.3 227.6C295.1 226.8 296.9 225.7 298.1 224.3C300.6 221.4 304.1 217.7 308.3 213.1C317.1 206.2 327.2 200 336 200C344.8 200 354.9 206.2 363.7 213.1C367.9 217.7 371.4 221.4 373.9 224.3C375.1 225.7 376 226.8 376.7 227.6C377 228 377.2 228.3 377.4 228.5L377.6 228.8L377.6 228.8z"/></svg>
      <h5>Happy</h5>
    </label>
      
    </div>
    <div className="container">
      <input type="checkbox" id="sad" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
      <label for="Sad">
        <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM159.3 388.7C171.5 349.4 209.9 320 256 320C302.1 320 340.5 349.4 352.7 388.7C355.3 397.2 364.3 401.9 372.7 399.3C381.2 396.7 385.9 387.7 383.3 379.3C366.8 326.1 315.8 287.1 256 287.1C196.3 287.1 145.2 326.1 128.7 379.3C126.1 387.7 130.8 396.7 139.3 399.3C147.7 401.9 156.7 397.2 159.3 388.7H159.3zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
        <h5>Sad</h5>
    </label>
    </div>
    <div className="container">
      <input type="checkbox" id="angry" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
      <label for="Angry">
        <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM339.9 373.3C323.8 355.4 295.7 336 256 336C216.3 336 188.2 355.4 172.1 373.3C166.2 379.9 166.7 389.1 173.3 395.9C179.9 401.8 189.1 401.3 195.9 394.7C207.6 381.7 227.5 368 255.1 368C284.5 368 304.4 381.7 316.1 394.7C322 401.3 332.1 401.8 338.7 395.9C345.3 389.1 345.8 379.9 339.9 373.3H339.9zM176.4 272C194 272 208.4 257.7 208.4 240C208.4 238.5 208.3 237 208.1 235.6L218.9 239.2C227.3 241.1 236.4 237.4 239.2 229.1C241.1 220.7 237.4 211.6 229.1 208.8L133.1 176.8C124.7 174 115.6 178.6 112.8 186.9C110 195.3 114.6 204.4 122.9 207.2L153.7 217.4C147.9 223.2 144.4 231.2 144.4 240C144.4 257.7 158.7 272 176.4 272zM358.9 217.2L389.1 207.2C397.4 204.4 401.1 195.3 399.2 186.9C396.4 178.6 387.3 174 378.9 176.8L282.9 208.8C274.6 211.6 270 220.7 272.8 229.1C275.6 237.4 284.7 241.1 293.1 239.2L304.7 235.3C304.5 236.8 304.4 238.4 304.4 240C304.4 257.7 318.7 272 336.4 272C354 272 368.4 257.7 368.4 240C368.4 231.1 364.7 223 358.9 217.2H358.9z"/></svg>
        <h5>Angry</h5>  
    </label>
    </div>
    <br><br><br>
    <div className="wrapper">
        <div className="container">
          <input type="checkbox" id="love" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Love">
            <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8H256.3zM199.3 129.1C181.5 124.4 163.2 134.9 158.4 152.7L154.1 168.8L137.1 164.5C120.2 159.7 101.9 170.3 97.14 188.1C92.38 205.8 102.9 224.1 120.7 228.9L185.8 246.3C194.4 248.6 203.1 243.6 205.4 235L222.9 169.1C227.6 152.2 217.1 133.9 199.3 129.1H199.3zM353.6 152.7C348.8 134.9 330.5 124.4 312.7 129.1C294.9 133.9 284.4 152.2 289.1 169.1L306.6 235C308.9 243.6 317.6 248.6 326.2 246.3L391.3 228.9C409.1 224.1 419.6 205.8 414.9 188.1C410.1 170.3 391.8 159.7 374 164.5L357.9 168.8L353.6 152.7z"/></svg>
            <h5>In Love</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="heartbroken" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Heartbroken">
            <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M119.4 44.1C142.7 40.22 166.2 42.2 187.1 49.43L237.8 126.9L162.3 202.3C160.8 203.9 159.1 205.1 160 208.2C160 210.3 160.1 212.4 162.6 213.9L274.6 317.9C277.5 320.6 281.1 320.7 285.1 318.2C288.2 315.6 288.9 311.2 286.8 307.8L226.4 209.7L317.1 134.1C319.7 131.1 320.7 128.5 319.5 125.3L296.8 61.74C325.4 45.03 359.2 38.53 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.09V44.1z"/></svg>
            <h5>Heartbroken</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="fear" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Fear">
            <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240zM336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176zM256 416C291.3 416 320 387.3 320 352C320 316.7 291.3 288 256 288C220.7 288 192 316.7 192 352C192 387.3 220.7 416 256 416z"/></svg>
            <h5>Fearful</h5>
        </label>
        </div>
        <br><br><br>
      <div className="wrapper">
        <div className="container">
          <input type="checkbox" id="peace" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Peace">
            <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
            <h5>Peaceful</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="grieved" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Grieved">
            <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 493.4C322.4 505.4 289.9 512 256 512C222.1 512 189.6 505.4 160 493.4V288C160 279.2 152.8 272 144 272C135.2 272 128 279.2 128 288V477.8C51.48 433.5 0 350.8 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 350.8 460.5 433.5 384 477.8V288C384 279.2 376.8 272 368 272C359.2 272 352 279.2 352 288V493.4zM217.6 236.8C224.7 231.5 226.1 221.5 220.8 214.4C190.4 173.9 129.6 173.9 99.2 214.4C93.9 221.5 95.33 231.5 102.4 236.8C109.5 242.1 119.5 240.7 124.8 233.6C142.4 210.1 177.6 210.1 195.2 233.6C200.5 240.7 210.5 242.1 217.6 236.8zM316.8 233.6C334.4 210.1 369.6 210.1 387.2 233.6C392.5 240.7 402.5 242.1 409.6 236.8C416.7 231.5 418.1 221.5 412.8 214.4C382.4 173.9 321.6 173.9 291.2 214.4C285.9 221.5 287.3 231.5 294.4 236.8C301.5 242.1 311.5 240.7 316.8 233.6zM208 368C208 394.5 229.5 416 256 416C282.5 416 304 394.5 304 368V336C304 309.5 282.5 288 256 288C229.5 288 208 309.5 208 336V368z"/></svg>
            <h5>Grieved</h5>
        </label>
        </div>
        <div className="container">
          <input type="checkbox" id="disgust" onclick="CountChecks('listone',3,this)" onclick="isChecked()"/>
          <label for="Disgust">
            <svg xmlns="http://www.w3.org/2000/svg" width="111px" height="111px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM138.3 364.1C132.2 375.8 128 388.4 128 400C128 405.2 130.6 410.2 134.9 413.2C139.2 416.1 144.7 416.8 149.6 414.1L170.2 407.3C197.1 397.2 225.6 392 254.4 392H257.6C286.4 392 314.9 397.2 341.8 407.3L362.4 414.1C367.3 416.8 372.8 416.1 377.1 413.2C381.4 410.2 384 405.2 384 400C384 388.4 379.8 375.8 373.7 364.1C367.4 352.1 358.4 339.8 347.3 328.7C325.3 306.7 293.4 287.1 256 287.1C218.6 287.1 186.7 306.7 164.7 328.7C153.6 339.8 144.6 352.1 138.3 364.1H138.3zM133.5 146.7C125.6 142.4 116 148.2 116 157.1C116 159.9 116.1 162.6 118.8 164.8L154.8 208L118.8 251.2C116.1 253.4 116 256.1 116 258.9C116 267.8 125.6 273.6 133.5 269.3L223.4 221.4C234.1 215.7 234.1 200.3 223.4 194.6L133.5 146.7zM396 157.1C396 148.2 386.4 142.4 378.5 146.7L288.6 194.6C277.9 200.3 277.9 215.7 288.6 221.4L378.5 269.3C386.4 273.6 396 267.8 396 258.9C396 256.1 395 253.4 393.2 251.2L357.2 208L393.2 164.8C395 162.6 396 159.9 396 157.1V157.1z"/></svg>
            <h5>Disgusted</h5>
        </label>
        </div>
      </div>
    </div>
</div>
</div>
   
        <input type="submit" className="btn" value="Submit" id="btnSubmit">
  
    
 {/*        
 function CountChecks(whichlist,maxchecked,latestcheck) {
   var listone = new Array("happy", "sad", "angry", "love", "heartbroken", "fear", "peace", "greived","disgust");

   var iterationlist;
   return(
   
eval("iterationlist="+whichlist);
var count = 0;
for( var i=0; i<iterationlist.length; i++ ) {
   if( document.getElementById(iterationlist[i]).checked == true) { count++; }
   if( count > maxchecked ) { latestcheck.checked = false; }
   }
if( count > maxchecked ) {
   alert("Sorry, only ' + maxchecked + ' may be checked.");
   }
   )
        function isChecked(count, btnSubmit) {
    var button = document.getElementById(btnSubmit);
  
    if (count==maxchecked) {
        button.disabled = false;
    } else {
        button.disabled = true;
        alert("Sorry, 3 options must be selected.");
    }
}
 */}        
 }

  export default Moods;

