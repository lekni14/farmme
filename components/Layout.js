// import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
// import actions from '../actions';
import AdminNavbarTop from './Navbars/AdminNavbarTop'
import { alertActions, userActions } from '../actions'
import Swal from 'sweetalert2'

// const Layout = ({ children, title }) => {
const Layout = (props) => {
  console.log(props)
  const { isLoggedIn, user } = props;
  const authenticated = { isLoggedIn, user }
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" /> */}
      </Head>
      <AdminNavbarTop authenticated={props}></AdminNavbarTop>
      {/* <div className="tabs is-centered">
      </div> */}

      <div className="has-text-centered">
        {props.children}
      </div>
    </>
  );
}

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
const connectedApp = connect(mapState, actionCreators)(Layout)
export default connectedApp;