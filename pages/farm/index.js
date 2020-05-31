import React from 'react';
import { connect } from 'react-redux';
import initialize from '../../utils/initialize';
import Layout from '../../components/Layout';
import { Container, Card, Row, Col, Media } from "react-bootstrap";
// import actions from '../../actions';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static async getInitialProps(ctx) {
        initialize(ctx);
    }
    
    async componentDidMount() {
        console.log(this.props)
        // await this.props.getUser(
        //     { token: this.props.authentication.token },
        //     'profile'
        // );
    }
    render() {
        return  (
            <Layout title="Farm">
                <Container className="mt-8 pb-5">
                    <Row>
                        <Col xs={3} md={3} sm={3}>
                            <Card className="bg-secondary shadow border-0">
                                <Media>
                                    <img
                                        width={64}
                                        height={64}
                                        className="rounded-left"
                                        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_172171b64df%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_172171b64df%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body className="p-2">
                                        <div className="d-flex align-content-center flex-wrap">
                                            <div className="bd-highlight">
                                                <h4 className="bd-highlight m-0">Media Heading</h4>
                                            </div>
                                        </div>
                                    </Media.Body>
                                </Media>
                            </Card>
                        </Col>                    </Row>

                </Container>
            </Layout >
        ) 
    }
}

// const Index = () => (
//     <Layout title="Farm">
//         {/* <div className="header bg-gradient-info py-7 py-lg-8">

//         </div> */}
//         <Container className="mt-8 pb-5">
//             <Row>
//                 <Col xs={3} md={3} sm={3}>
//                     <Card className="bg-secondary shadow border-0">
//                         <Media>
//                             <img
//                                 width={50}
//                                 height={50}
//                                 className="rounded-left"
//                                 src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_172171b64df%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_172171b64df%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.5625%22%20y%3D%2237.1%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
//                                 alt="Generic placeholder"
//                             />
//                             <Media.Body className="p-2">
//                                 <div className="d-flex align-content-center flex-wrap">
//                                     <div className="bd-highlight">
//                                         <h4 className="bd-highlight m-0">Media Heading</h4>
//                                         {/* <div class="p-2 ">Flex item</div> */}
//                                         {/* <div class="p-2 bd-highlight">Flex item</div> */}
//                                         {/* <div class="ml-auto bd-highlight">edit</div> */}
//                                     </div>
//                                 </div>
//                             </Media.Body>
//                         </Media>
//                     </Card>
//                 </Col>
//                 <Col xs={3} md={3} sm={3}>
//                     <Card className="bg-secondary shadow border-0">
//                         sss
//                     </Card>
//                 </Col>
//                 <Col xs={3} md={3} sm={3}>
//                     <Card className="bg-secondary shadow border-0">
//                         sss
//                     </Card>
//                 </Col>
//                 <Col xs={3} md={3} sm={3}>
//                     <Card className="bg-secondary shadow border-0">
//                         sss
//                     </Card>
//                 </Col>
//             </Row>

//         </Container>
//     </Layout>
// );

Index.getInitialProps = async ctx => {
    // console.log(ctx)
    initialize(ctx);
}

export default Index
// export default connect(state => state, actions)(Index);