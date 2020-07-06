import React from 'react'
import { connect } from 'react-redux';
import Head from 'next/head'
import Layout from '../components/Layout';
import { alertActions, userActions } from '../actions'
import Swal from 'sweetalert2'
import { Container, Row, Card, Button } from 'react-bootstrap'

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
  const { isLoggedIn, user } = props;
  const authenticated = { isLoggedIn, user }
  return (
    <Layout title="Home" authenticated={authenticated}>
      <Container className="md-container">
        <Container>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p>
            Get started by editing <code>pages/index.js</code>
          </p>
          <Container>
            <Row className="justify-content-md-between">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Documentation</Card.Title>
                  <Card.Text>
                    Find in-depth information about Next.js features and API.
                </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/docs">
                    More &rarr;
                </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Learn</Card.Title>
                  <Card.Text>
                    Learn about Next.js in an interactive course with quizzes!
                </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/learn">
                    More &rarr;
                </Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="justify-content-md-between">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Examples</Card.Title>
                  <Card.Text>
                    Discover and deploy boilerplate example Next.js projects.
                </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/vercel/next.js/tree/master/examples"
                  >
                    More &rarr;
                </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Deploy</Card.Title>
                  <Card.Text>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                </Card.Text>
                  <Button
                    variant="primary"
                    href="https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                  >
                    More &rarr;
                </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </Container>

        <footer className="cntr-footer">
          <a
            href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
          </a>
        </footer>
      </Container>
     </Layout>
  )
}

// Index.getInitialProps = function(ctx) {
//   initialize(ctx);
// };

function mapState(state) {
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