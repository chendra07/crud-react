import React from "react";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

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
          <Button color="white" className="mr-2">
            &#10060; delete
          </Button>
          <Button color="white" className="mr-2">
            &#10067; detail
          </Button>
          <Button color="white" className="mr-2">
            &#9998; edit
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
    <Container>
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
            <div className="float-right">
              <SearchBar {...props.searchProps} placeholder="Search..." />
            </div>

            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.usersData,
  };
};

export default connect(mapStateToProps)(TableComponent);
