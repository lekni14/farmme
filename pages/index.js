import React from 'react'
import { connect } from 'react-redux';
// import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import { alertActions, userActions } from '../actions'
import Swal from 'sweetalert2'


const Index = props => {
  function showAlert(msg) {
    Swal.fire({
      type: 'warning',
      title: msg,
      showConfirmButton: false,
      timer: 2000
    })
  }
  const { alert } = props;
  if (alert) {
    if (alert.message !== undefined && alert.message !== null) {
      showAlert(alert.message)
    }
    if (alert.isLoading) {
      this.setState({ loading: alert.isLoading })
    }

  }
  console.log(props)
  const { isLoggedIn, user } = props;
  const authenticated = { isLoggedIn, user }
  return (
    <Layout title="Home" authenticated={authenticated}>
      <h2 className="title is-2">Authentication with Next.js using JWT and Redux</h2>
      <img src="/static/nextjs.jpg" />
      <p>
        A demonstrating app of Next.js application using JWT with Redux.
          </p>
    </Layout>
  )
}

  // Index.getInitialProps = function(ctx) {
  //   initialize(ctx);
  // };

function mapState (state) {
  const { alert } = state
  const { isLoggedIn, isShowLogin, user } = state.authentication;
  return { alert, isLoggedIn, user, isShowLogin }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
  getUser: userActions.getUser,
  closeLogin: userActions.closeLogin,
  showLogin: userActions.showLogin
}
const connectedApp = connect(mapState, actionCreators)(Index)
export default connectedApp;

// export default connect(null, mapDispatchToProps)(Index)