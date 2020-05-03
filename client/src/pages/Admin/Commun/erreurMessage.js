import React from 'react'

function ErreurMessage({msg}) {


    if(msg!="")
    {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert">×</button>
        <div className="alert-icon">
          <i className="fa fa-times" />
        </div>
        <div className="alert-message">
    <span><strong>Error!</strong> {msg}</span>
        </div>
      </div>
    )}
    else {return <div></div>}
}

export default ErreurMessage
