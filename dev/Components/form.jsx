import React, { Component, PropTypes } from 'react'

export const nomalTextInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div className="form-control">
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
        </div>
        <div className="error">
            {touched && ((error && <span>{error}</span>))}
        </div>

    </div>
)


export const registerTextInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="row t-align">
        <label className="col-md-4 label-right">{label}</label>
        <div className="col-sm-5">
            <input className="form-control" {...input} placeholder={label} type={type}/>
        </div>
        <div className="col-sm-3 mrgin_25 reError">{touched && ((error && <span>{error}</span>))}</div>
    </div>
)