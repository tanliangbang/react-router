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
        this.saveBtn = this.saveBtn.bind(this)
        this.state = {
            sex:1,
            addImg:false
        }
    }


    componentDidMount() {
        this.refs.changeUserDiv.style.display = "none"
    }


    componentDidUpdate(){
        console.log("tttttttttttt")
        if(this.props.showChangeUser){
            this.refs.mask.showMask();
            this.refs.changeUserDiv.style.display = "block"
        }else{
            this.refs.mask.closeMask();
            this.refs.changeUserDiv.style.display = "block"
        }
    }



    closeChangeUserBox(){
        this.props.actions.showChangeUser(false);
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
            nick:this.refs.nick.value,
            phone:this.refs.phone.value,
            job:this.refs.job.value,
            address:this.refs.address.value,
            userBreif:this.refs.userBreif.value,
            sex : this.state.sex,
            userAvar:this.props.userInfo.userAvar
        }
        if(this.state.addImg){
            Tool.uploadImg(function(data){
                user.userAvar = data
                _this.props.actions.changeUserInfo(user);
            });
        }else{
             _this.props.actions.changeUserInfo(user);
        }

    }



    render() {
        const {userInfo} = this.props
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
                              <img src={"./../../img/userImg.jpg"} />
                          </div>
                          <input id="resImg" type="file" onChange={(e)=>this.getImgDate(e)} ref="avarInput" name="resImg" className="none"/>
                      </div>
                       <div className="nomalInput">
                             昵称：
                           <Field  ref="nick"  name="nick" component="input" type="text"  maxlen="20"  />
                        </div>
                    <div className="nomalInput">
                        电话：
                        <input ref="phone"/* value={userInfo.phone}*/  type="text" placeholder="" maxlen="20"  />
                    </div>
                    <div className="nomalInput">
                        职业：
                        <input ref="job" /*value={userInfo.job}*/  type="text" placeholder="" maxlen="20"  />
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
                        <input ref="address" /*value={userInfo.address}*/  type="text" placeholder="" maxlen="20"  />
                    </div>

                    <div className="nomalInput">
                        简介：
                        <textarea ref="userBreif" /*value={userInfo.userBreif}*/ placeholder="300字以内" className="selfDesc" ></textarea>
                    </div>

                    <div  className="change_user" onClick={this.saveBtn}  >修&nbsp;&nbsp;&nbsp;&nbsp;改</div>

                </form>


            </div>
        );
    }

}


export default  connect((state)=>{
    return {
        showChangeUser:state.user.showChangeUser,
        path: state.routing.locationBeforeTransitions.pathname,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'loginForm'
})(ChangeUser))


/*export default  connect((state)=>{
    return {
        userInfo:state.user.userInfo,
        showChangeUser:state.user.showChangeUser,
        path: state.routing.locationBeforeTransitions.pathname,
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'changeForm'
})(ChangeUser))*/
