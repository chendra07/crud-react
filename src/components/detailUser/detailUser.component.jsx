import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

const DetailUser = (props) => {
  return (
    <div>
      <Table striped>
        <tbody>
          <tr>
            <td width="100">id</td>
            <td width="10">:</td>
            <td>{props.userDetail.id}</td>
          </tr>
          <tr>
            <td width="100">Nama</td>
            <td width="10">:</td>
            <td>{props.userDetail.nama}</td>
          </tr>
          <tr>
            <td width="100">Nilai IPA</td>
            <td width="10">:</td>
            <td>{props.userDetail.ipa}</td>
          </tr>
          <tr>
            <td width="100">Nilai IPS</td>
            <td width="10">:</td>
            <td>{props.userDetail.ips}</td>
          </tr>
          <tr>
            <td width="100">Nilai MTK</td>
            <td width="10">:</td>
            <td>{props.userDetail.mtk}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: state.user.userDetail,
    errorUserDetail: state.user.errorUserDetail,
  };
};

export default connect(mapStateToProps)(DetailUser);
