import React from "react";
import ReactTable from "react-table-6";
import "./History.css";
import { upcoming, completed } from "../data/deployment";
const History = () => {

  const upComingTableColumns = [
    {
      Header: "Scheduled Date",
      accessor: "scheduled_date",
    },
    {
      Header: "Deploy ID",
      accessor: "deploy_ID",
    },
    {
      Header: "Project ID",
      accessor: "project_ID",
    },
    {
      Header: "Doc Type",
      accessor: "doc_type",
    },
    {
      Header: "partner Name",
      accessor: "parnter_name",
    },
    {
      Header: "Change Type",
      accessor: "change_type",
    },
    {
      Header: "Change Description",
      accessor: "change_description",
    },
  ];

  const completedTableColumns = [
    {
      Header: "Completed Date",
      accessor: "completed_date",
    },
    {
      Header: "Scheduled Date",
      accessor: "scheduled_date",
    },
    {
      Header: "Deploy ID",
      accessor: "deploy_ID",
    },
    {
      Header: "Project ID",
      accessor: "project_ID",
    },
    {
      Header: "Doc Type",
      accessor: "doc_type",
    },
    {
      Header: "Partner Name",
      accessor: "parnter_name",
    },
    {
      Header: "Change Type",
      accessor: "change_type",
    },
    {
      Header: "Change Description",
      accessor: "change_description",
    },
  ];

  return (
    <>
      <h4 className="main_heading-deployment">Deployment</h4>
      <div className="link_container">
        <div className="deployment_history__link" >Table_Entry_Request_Form.xlsx</div>
        <div className="deployment_history__link" >Code_List_Request_Form.xlsx</div>
      </div>
      <h5 className="mt-2 mb-2">Upcoming</h5>
      <ReactTable defaultPageSize={5} data={upcoming} columns={upComingTableColumns} />
      <h5 className="mt-2 mb-2">Completed</h5>
      <ReactTable defaultPageSize={5} data={completed} columns={completedTableColumns} />
    </>
  );
};

export default History;
