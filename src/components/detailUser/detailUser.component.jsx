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
            <td>
              {props && props.userDetail && props.userDetail.length > 0 ? (
                props.userDetail[0].id
              ) : (
                <p>none</p>
              )}
            </td>
          </tr>
          <tr>
            <td width="100">Nama</td>
            <td width="10">:</td>
            <td>
              {props && props.userDetail && props.userDetail.length > 0 ? (
                props.userDetail[0].nama
              ) : (
                <p>none</p>
              )}
            </td>
          </tr>
          <tr>
            <td width="100">Nilai IPA</td>
            <td width="10">:</td>
            <td>
              {props && props.userDetail && props.userDetail.length > 0 ? (
                props.userDetail[0].ipa
              ) : (
                <p>none</p>
              )}
            </td>
          </tr>
          <tr>
            <td width="100">Nilai IPS</td>
            <td width="10">:</td>
            <td>
              {props && props.userDetail && props.userDetail.length > 0 ? (
                props.userDetail[0].ips
              ) : (
                <p>none</p>
              )}
            </td>
          </tr>
          <tr>
            <td width="100">Nilai MTK</td>
            <td width="10">:</td>
            <td>
              {props && props.userDetail && props.userDetail.length > 0 ? (
                props.userDetail[0].mtk
              ) : (
                <p>none</p>
              )}
            </td>
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
