import React, { useEffect, useState } from "react";

import axios from "axios";


import Footer from "../../Commun/footer"
import Menu from "../../Commun/menu"
import Header from "../../Commun/header"
import DatatablePage from "./table"


 
function ListeHopitale() {
 


  return (
    <div id="wrapper"  className="in  " >
    
      <Header/><Menu/>
  
      <div>
    
    <div>
      <div className="clearfix" />
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumb*/}
          
          {/* End Breadcrumb*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header"> <h4>Liste des hopitales </h4></div>
                <div className="card-body">
                  <div className="table-responsive">
                    <DatatablePage/>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* End Row*/}
        
        </div>

    <a type="button" className="btn btn-outline-success waves-effect waves-light m-1"
    href="/ajoutHopital" > 
  <i className="icon-plus icons " /> 
  <span>Ajouter un hopital</span> 
</a>

        {/* End container-fluid*/}
      </div>{/*End content-wrapper*/}
    </div>
    </div>
  
  </div>
  );
}

export default ListeHopitale;
