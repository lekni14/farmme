import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Row, Col } from 'react-bootstrap'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonLayout: {
    marginLeft: '7rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0'
    }
  }
}));

export default function User(props) {
  const classes = useStyles();

  return (
    // <Container>
    <Row>
      <Col xs={12} md={4}>
        <h2>ข้อมูลของฟาร์ม</h2>
        <p>ระบุข้อมูลการติดต่อเบื้องต้นสำหรับเจ้าของฟาร์ม</p>
      </Col>
      <Col xs={12} md={8}>
        <Fragment>
          <h4>ข้อมูล</h4>
        </Fragment>

        <Fab variant="extended"
          color="primary"
          aria-label="add" className="mt--6">
          <AddIcon />
                            สร้างฟาร์ม
           </Fab>
      </Col>
    </Row>
    // </Container>
  );
}
