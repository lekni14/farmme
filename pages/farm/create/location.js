import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Row, Col } from 'react-bootstrap'


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

export default function Location(props) {
  const classes = useStyles();

  return (
    // <Container>
      <Row>
        <Col xs={12} md={4}>
          <h2>ข้อมูลของฟาร์ม</h2>
          <p>ระบุข้อมูลการสถานที่ตั้งฟาร์ม</p>
        </Col>
        <Col xs={12} md={8}>
        </Col>
      </Row>
    //</Container> 
  );
}
