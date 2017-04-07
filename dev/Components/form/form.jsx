import "./style.scss"
import React, { Component, PropTypes } from 'react'
import { Tool, merged } from '../../Tool';

export const nomalTextInput = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div className="form-control">
            <input {...input}  placeholder={label}  type={type}/>
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
            <input className="form-control"  {...input} placeholder={label} type={type}/>
        </div>
        <div className="col-sm-3 mrgin_25 reError">{touched && ((error && <span>{error}</span>))}</div>
    </div>
)




export class UpLoadImg extends Component {
    constructor(props) {
        super(props);
        this.getImgDate = this.getImgDate.bind(this);
        this.state = {
            btnShow:false,
            addIconShow:true
        }
    }


    getImgDate(e){
        var file =  e.target.files[0];
        var _this = this;
        if(file.type=="image/png"||file.type=="image/jpg"||file.type=="image/jpeg"){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(){
                _this.refs.imgPreview.innerHTML = "<img src="+this.result+">";
                _this.refs.uploadBtn.style.display="block";
                _this.setState({
                    btnShow:true
                })
            }
        }else{
            this.value = null;
            alert("请选择正确的图片");
        }
    }

    uploadImg(){
        var _this = this;
        Tool.uploadImg(function(data){
            _this.props.callback(data)
            _this.setState({
                btnShow:false
            })
        });
    }

    clickFile(){
       this.refs.fileInput.click();
    }

    render() {
        const {btnShow,addIconShow} = this.state;
        return(
            <div>
                <div className="imgPreview" ref="imgPreview" onClick={this.clickFile.bind(this)} >
                    <div>
                        <img ref="imgIcon"  className={addIconShow?"imgIcon":"imgIcon none"} src="./../../img/addImgIcon.jpg"/>
                    </div>
                </div>
                <input ref="fileInput" id="resImg"  name="resImg" accept="image/*" onChange={(e)=>this.getImgDate(e)} className="fileInput none" type="file"/>
                <div ref="uploadBtn" onClick={this.uploadImg.bind(this)} className={btnShow?"upLoadBtn":"upLoadBtn none"}>上&nbsp;传</div>
            </div>
        )
    }
}


