import React from "react";
function Myfooter() {
    return(
        <footer className="footer">
        <div className="social">
            <a href="#">
                <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
                <i className="bx bxl-github"></i>
            </a>
            <a href="#">
                <i className="bx bxl-instagram-alt"></i>
            </a>
        </div>

        <ul className="list">
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">skills</a>
            </li>
            <li>
                <a href="#">About me</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
            <li>
                <a href="#">projects</a>
            </li>
        </ul>
        <p className="copyright">
            
        &copy; Anandakrishnan | All Rights Reserved
        </p>
    </footer>
    );
   
}
export default Myfooter;
