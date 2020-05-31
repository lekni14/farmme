// import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
// import actions from '../actions';
import AdminNavbarTop from './Navbars/AdminNavbarTop'
// export default ({ component: C, props: cProps, ...rest }) =>
//   <Route {...rest} render={props => (
//     cProps.isAuthenticated === true ? <HomeLayout><C {...props} {...cProps} /></HomeLayout> : <Login {...props} {...cProps}/>
//     )} />;
// const Index = props => {
const Layout = ({ children, title, authenticated }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" /> */}
      </Head>
      <AdminNavbarTop authenticated={authenticated}></AdminNavbarTop>
      <div className="tabs is-centered">
      </div>

      <div className="has-text-centered">
        {children}
      </div>
    </>
  );
}

// const mapStateToProps = (state) => (
//   // console.log(state)
//   {isAuthenticated: !!state.authentication.token}
// );
function mapState(state) {
  return { isAuthenticated: !!state.authentication.token }
}


// const actionCreators = {
//   login: userActions.login
// };
// const connectedLayout = connect(mapState)(Layout);
// export { connectedLayout as Layout }

// export default connect(mapState, actions)(Layout);
export default Layout