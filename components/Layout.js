import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import actions from '../actions';
import AdminNavbarTop from './Navbars/AdminNavbarTop'

const Layout = ({ children, title, isAuthenticated}) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" /> */}
    </Head>
    <AdminNavbarTop isAuthenticated={isAuthenticated}></AdminNavbarTop>
    <div className="tabs is-centered">
      <ul>
        {/* <Link href="/"><a>Home</a></Link>
        {!isAuthenticated && <Link href="/signin"><a>Sign In</a></Link>}
        {!isAuthenticated && <Link href="/signup"><a>Sign Up</a></Link>}
        {isAuthenticated && <Link href="/users"><a>Profile</a></Link>}
        {isAuthenticated && <li onClick={deauthenticate}><a>Sign Out</a></li>} */}
      </ul>
    </div>

    <div className="has-text-centered">
      { children }
    </div>
  </div>
);

// const mapStateToProps = (state) => (
//   // console.log(state)
//   {isAuthenticated: !!state.authentication.token}
// );
function mapState (state) {
  return {isAuthenticated: !!state.authentication.token}
}


// const actionCreators = {
//   login: userActions.login
// };
// const connectedLayout = connect(mapState)(Layout);
// export { connectedLayout as Layout }

export default connect(mapState, actions)(Layout);