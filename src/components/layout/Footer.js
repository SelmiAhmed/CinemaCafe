import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">

          <div className="footer p-3 mt-4 text-center bg-dark text-light">
   <p>&copy; 2019. Made with <i class="fab fa-gratipay"></i> and <i class="fas fa-coffee"></i>  Developed By:
  <span className="text-warning font-weight-normal">
              Selmi Ahmed
            </span>     <i class="fas fa-smile-wink"></i></p>, Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >&nbsp;&nbsp; 
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
