import React from "react";
import swal from "sweetalert";
import { Button, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/user/users.action";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah anda ingin menghapus data ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Data user telah dihapus!", {
        icon: "success",
      }).then(window.location.reload());
    } else {
      swal("Data gagal dihapus!", {
        icon: "error",
      });
    }
  });
};

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
          <Button
            color="white"
            className="mr-2"
            onClick={() => handleClick(row.id)}
          >
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
            <Button
              color="white"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              &#10060; delete
            </Button>
          </div>
        );
      },
    },
  ];

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
        <div className="text-center">
          {props.errorUsersDataset ? (
            <h1>{props.errorUsersDataset}</h1>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
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
