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
        this.changeUser = this.changeUser.bind(this)
        this.state = {
            sex:1,
            addImg:false
        }
    }


    componentDidMount() {
        this.refs.changeUserDiv.style.display = "none"
    }


    componentDidUpdate(){
        if(this.props.showChangeUser){
            this.refs.mask.showMask();
            this.refs.changeUserDiv.style.display = "block"
        }else{
            this.refs.mask.closeMask();
            this.refs.changeUserDiv.style.display = "none"
        }
    }



    closeChangeUserBox(){
        this.props.actions.showChangeUser(false);
    }

    openFile(){
        this.refs.imgPreview.nextElementSibling.click();
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


    changeUser(formProps){
        var _this = this;
        if(this.state.addImg){
            Tool.uploadImg(function(data){
                formProps.userAavar = data
                _this.props.actions.changeUserInfo(formProps);
                _this.state.addImg = false;
            });
        }else{
             _this.props.actions.changeUserInfo(formProps);
        }

    }



    render() {
        const {userInfo,handleSubmit} = this.props;
        return (
            <div ref="changeUserDiv"  className="changeUser">
                <Mask ref="mask"/>
                <div className="maskCommonTop">
                    <label className="loginTitle">修改资料</label>
                    <a onClick={this.closeChangeUserBox.bind(this)}></a>
                </div>
                <hr className="loginLine" />
                <form onSubmit={handleSubmit(this.changeUser)}>
                      <div>
                          <div className="avarHeard" ref="imgPreview" onClick={this.openFile.bind(this)}>
                              <img src={userInfo&&userInfo.userAavar?userInfo.userAavar:"./../../img/userImg.jpg"} />
                          </div>

                          <Field id="resImg" type="file" onChange={(e)=>this.getImgDate(e)}  name="resImg" className="none" component="input"    />

                      </div>
                       <div className="nomalInput">
                             昵称：
                           <Field ref="nick" name="nick" component="input" type="text"   />

                       </div>
                    <div className="nomalInput">
                        电话：
                        <Field ref="phone" name="phone" component="input" type="text"   />

                    </div>
                    <div className="nomalInput">
                        职业：
                        <Field ref="job" name="job" component="input" type="text"   />
                    </div>

                    <div className="sexSelect">
                          性别：
                           <div>
                               男:&nbsp; &nbsp;
                               <Field  name="sex" value="1" component="input" type="radio"   />
                               &nbsp; &nbsp; &nbsp; &nbsp;
                               女:&nbsp; &nbsp;
                               <Field  name="sex" value="2" component="input" type="radio"   />


                           </div>
                          <br className="clear" />
                    </div>

                    <div className="nomalInput">
                         地区：
                        <Field ref="address" name="address" component="input" type="text"   />
                    </div>

                    <div className="nomalInput">
                        简介：
                        <Field ref="userBreif" name="userBreif"  placeholder="300字以内" className="selfDesc"  component="textarea" type="text"   />
                    </div>

                    <button type="submit" className="change_user">修&nbsp;&nbsp;&nbsp;&nbsp;改</button>

                </form>


            </div>
        );
    }

}

export default  connect((state)=>{

    return {
        showChangeUser:state.user.showChangeUser,
        userInfo:state.user.userInfo,
        initialValues: state.user.userInfo,
        path: state.routing.locationBeforeTransitions.pathname
    }
}, (dispatch)=>{
    const allAction =Object.assign({},userAction);
    return {
        actions: bindActionCreators(allAction, dispatch)
    }
})(reduxForm({
    form: 'changeForm',
})(ChangeUser))



