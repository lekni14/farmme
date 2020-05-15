import Link from 'next/Link'
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Button,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";
import MdLogin from '../../pages/auth/mdMain'

function AdminNavbarTop(props) {
    const {isAuthenticated} = props
    console.log(isAuthenticated)
    return (
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
            <Container>
                <Link href="/"
                ><a className="h4 mb-0 text-uppercase d-none d-lg-inline-block">
                        Farmme
                    </a>
                </Link>
                {/* <Nav className="align-items-center d-none d-md-flex" navbar> */}
                    <Nav className="align-items-center d-none d-md-flex" navbar>
                        {!isAuthenticated ? (
                            <Form className="form-inline my-2 my-lg-0">
                                {/* <Link href="/auth/regiter">
                                    <Button color="primary" className="my-2 my-sm-0">เริ่มต้นใช้งาน</Button>
                                </Link> */}
                                <MdLogin/>
                                {/* <Link href="/auth/login">
                                    <Button outline color="primary" className="my-2 my-sm-0">เข้าสู่ระบบ</Button>
                                </Link> */}
                                
                                
                            </Form>
                        ) : (
                                <>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle className="pl-2 pr-0" nav>
                                            <Media className="align-items-center avatar avatar-sm rounded-circle">
                                                <i className="ni ni-bell-55"></i>
                                            </Media>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow">
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Welcome1!</h6>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle className="pl-2 pr-0" nav>
                                            <Media className="align-items-center">
                                                <span className="avatar avatar-sm rounded-circle">
                                                    <img
                                                        alt="..."
                                                        src="https://demos.creative-tim.com/argon-dashboard-react/static/media/team-4-800x800.23007132.jpg"
                                                    />
                                                </span>
                                                <span className="ml-2 d-none d-lg-block"><span className="text-default">Jane Pearson</span><small className="text-muted d-block">Administrator</small></span>

                                            </Media>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" tag="div">
                                                <h6 className="text-overflow m-0">Welcome2!</h6>
                                            </DropdownItem>

                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </>
                            )}
                    </Nav>
                {/* </Nav> */}
            </Container>
        </Navbar>
    )
}
export default AdminNavbarTop