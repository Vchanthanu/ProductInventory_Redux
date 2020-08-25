import React from 'react';
import {connect} from 'react-redux'

class Notification extends React.Component {
    render() {
        return (
            <div>
                <h3>Notification</h3>
                {this.props.notificationName && <h6>Successfully added {this.props.notificationName} !!!</h6>}
            </div>
        );
    }
}
const notificationStoreToProps=(store)=>{
    return{
        notificationName:store.notification
    }
}
export default connect(notificationStoreToProps)(Notification);