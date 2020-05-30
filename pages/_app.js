// import { Provider } from 'react-redux';
// import App from 'next/app';
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../store';


// export default withRedux(initStore, { debug: true })(
//   class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//       return {
//         pageProps: {
//           ...(Component.getInitialProps
//             ? await Component.getInitialProps(ctx)
//             : {})
//         }
//       };
//     }
//     render() {
//       console.log(this.props)
//       const { Component, pageProps, store } = this.props
//       return <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider> 
//     }
//   }
// );

import React from 'react'
import App from 'next/app';
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/scss/argon-dashboard-react.scss";

import "../assets/css/customs.css";

// const MyApp = props => {
//   console.log(props)
//   const { Component, pageProps, router, store } = props
//   // console.log(props)
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

// export default withRedux(initStore)(MyApp)

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
      return { pageProps };
    }
    render() {
      console.log(this.props)
      const { Component, pageProps, store } = this.props
      return <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    }
  }
);