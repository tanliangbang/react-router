import './style.scss'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import LoadingBox from '../../MTUI/LoadingBox'
import { Tool, merged } from '../../Tool';
import * as userAction from '../../actions/user';
import Mask from '../../BUI/Mask';
import {nomalTextInput} from '../../Components/form/form';

export  class ChangeUser extends Component {
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.saveBtn = this.saveBtn.bind(this)
        this.state = {
            sex:1,
            addImg:false
        }
    }


    componentDidMount() {
        console.log(this)
        this.refs.changeUserDiv.style.display = "none"
    }
    show(){
        this.refs.mask.showMask();
        this.refs.changeUserDiv.style.display = "block"
    }
    closeChangeUserBox(){
        this.refs.mask.closeMask();
        this.refs.changeUserDiv.style.display = "none"
    }

    openFile(){
        this.refs.avarInput.click();
    }

    getImgDate(e){
        var file =  e.target.files[0];
        var _this = this;
        if(file.type=="image/png"||file.type=="image/jpg"||file.type=="image/jpeg"){
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(){
                _this.refs.imgPreview.innerHTML = "<img src="+this.result+">";
                _this.setState({
                    addImg:true
                })
            }
        }else{
            this.value = null;
            alert("请选择正确的图片");
        }
    }
    handleGender(e){
        var sex = e.target.value;
        this.setState({
           male: sex
        });
    }

    saveBtn(){
        var _this = this;
        var user = {
            nickname:this.refs.nickname.value,
            phone:this.refs.phone.value,
            job:this.refs.job.value,
            address:this.refs.address.value,
            selfdesc:this.refs.selfdesc.value,
            sex : this.state.sex,
            userAavar:null
        }
        if(this.state.addImg){
            Tool.uploadImg(function(data){
                user.userAavar = data
                this.props.actions.changeUserInfo(user);
            });
        }else{
            this.props.actions.changeUserInfo(user);
        }

    }



    render() {

        return (
            <div ref="changeUserDiv"  className="changeUser">
                <Mask ref="mask"/>
                <div className="maskCommonTop">
                    <label className="loginTitle">修改资料</label>
                    <a onClick={this.closeChangeUserBox.bind(this)}></a>
                </div>
                <hr className="loginLine" />
                <form>
                      <div>
                          <div className="avarHeard" ref="imgPreview" onClick={this.openFile.bind(this)}>
                              <img src="./../../img/userImg.jpg" />
                          </div>
                          <input id="resImg" type="file" onChange={(e)=>this.getImgDate(e)} ref="avarInput" name="resImg" className="none"/>
                      </div>
                       <div className="nomalInput">
                             昵称：
                           <input  ref="nickname"  type="text" placeholder="" maxlen="20"  />
                        </div>
                    <div className="nomalInput">
                        电话：
                        <input ref="phone"  type="text" placeholder="" maxlen="20"  />
                    </div>
                    <div className="nomalInput">
                        职业：
                        <input ref="job"  type="text" placeholder="" maxlen="20"  />
                    </div>

                    <div className="sexSelect">
                          性别：
                           <div>
                               男:&nbsp; &nbsp; <input   name="sex" value="1"   type="radio"   checked={this.state.sex=='1'} onChange={this.handleGender.bind(this)} />
                               &nbsp; &nbsp; &nbsp; &nbsp;
                               女:&nbsp; &nbsp;<input checked={this.state.sex=='2'} onChange={this.handleGender.bind(this)} value="2"  name="sex"  type="radio"    />
                           </div>
                          <br className="clear" />
                    </div>

                    <div className="nomalInput">
                         地区：
                        <input ref="address"  type="text" placeholder="" maxlen="20"  />
                    </div>

                    <div className="nomalInput">
                        简介：
                        <textarea ref="selfdesc"  placeholder="300字以内" className="selfDesc" ></textarea>
                    </div>

                    <div  className="change_user" onClick={this.saveBtn}  >修&nbsp;&nbsp;&nbsp;&nbsp;改</div>

                </form>


            </div>
        );
    }

}



export default  connect((state)=>{
    return {
        path: state.routing.locationBeforeTransitions.pathname,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'changeForm'
})(ChangeUser))

