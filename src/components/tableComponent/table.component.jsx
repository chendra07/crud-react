import React from "react";
import { Button, Row, Col, Spinner } from "reactstrap";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return {
        width: "10%",
      };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "ipa",
    text: "ipa",
    sort: true,
  },
  {
    dataField: "ips",
    text: "ips",
    sort: true,
  },
  {
    dataField: "mtk",
    text: "mtk",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="white" className="mr-2">
              &#10067; detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="white" className="mr-2">
              &#9998; edit
            </Button>
          </Link>
          <Button color="white" className="mr-2">
            &#10060; delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <div>
      {props.users ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.users}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Link to="/create">
                  <Button color="primary" className="mr-2">
                    Create User
                  </Button>
                </Link>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>
              </Row>

              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <Spinner type="grow" color="primary" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.usersDataset,
    errorUsersDataset: state.user.errorUsersDataset,
  };
};

export default connect(mapStateToProps)(TableComponent);
