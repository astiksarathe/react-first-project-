import { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import ReactTable from "react-table-6";
import { timeTracking } from "../data/timetracking";

import "./TimeTracking.css";

const TimeTracking = () => {
  const [status, setStatus] = useState([]);
  const [useDateRange, setUseDateRange] = useState(false);
  const [startFilterDate, setStartFilterDate] = useState("");
    const [endFilterDate, setEndFilterDate] = useState("");
    const [date, setDate]=useState("")
  const StatusOption = [
    { label: "Open", value: "Open" },
    { label: "In Flight", value: "In Flight" },
    { label: "Production", value: "Production" },
    { label: "On Hold", value: "On Hold" },
    { label: "Cancelled", value: "Cancelled" },
  ];
  const TimeTrackingColumns = [
    {
      Header: "Customer",
      accessor: "customer",
    },
    {
      Header: "Project ID",
      accessor: "projectID",
    },
    {
      Header: "Doc ID",
      accessor: "docID",
    },

    {
      Header: "Doc Type",
      accessor: "docType",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "Prod Date",
      accessor: "prodDate",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "10/17",
    },
    {
      Header: "10/18",
    },
    {
      Header: "10/19",
    },
  ];
  const removeSelecteDocumentHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form className="time__traking-container">
        <h4>My Time Tracking (DAIYLOK)</h4>
        <Form.Group className="d-flex ">
          <Form.Label className="status_label">Status: </Form.Label>
          <MultiSelect
            className="status_input"
            options={StatusOption}
            value={status}
            onChange={setStatus}
          />
        </Form.Group>
        <Form.Group className="d-flex">
          <Form.Label className="status_label">Filter by Date:</Form.Label>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu className="p-3">
              <Form.Check
                className="date-filter-checkbox"
                value={useDateRange}
                onChange={() => setUseDateRange(!useDateRange)}
                type="checkbox"
                label="Use Date Range ?"
              />
              {useDateRange ? (
                <>
                  <Form.Control
                    className="mt-2"
                    type="date"
                    value={startFilterDate}
                    onChange={(e)=>setStartFilterDate(e.target.value)}
                  />
                  <Form.Control
                    className="mt-2"
                    type="date"
                    value={endFilterDate}
                    onChange={(e)=>setEndFilterDate(e.target.value)}
                  />
                </>
              ) : (
                ""
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button
          variant="secondary"
          type="button"
          onClick={removeSelecteDocumentHandler}
        >
          Remove Selected Document
        </Button>
        <Form.Control type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
      </Form>
      <ReactTable
        className="mt-5"
        defaultPageSize={5}
        data={timeTracking}
        columns={TimeTrackingColumns}
      />
      <Total />
      <ChangeHours />
      <SearchProject />
    </>
  );
};
const Total = () => {
  return (
    <div className="mt-5 border border-dark p-2">
      <h6>Totals :</h6>
      <Form className="total_container">
        <Form.Group>
          <Form.Label>Sun(09/19) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mon (09/20) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tue(09/21) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Wed(09/22) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thu(09/23) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fri(09/23) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sat(09/24) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Label>Week : 0.00</Form.Label>
      </Form>
    </div>
  );
};

const ChangeHours = () => {
  return (
    <div className="mt-5 border border-dark p-2">
      <h6>Change Hours :</h6>
      <div className="change_hour_small_container">
        <div className="strong">Customer: </div>
        <span>Holiday</span>
        <div className="strong">Project: </div>
        <span>0</span>
        <div className="strong">Document: </div>
        <span>0</span>
      </div>
      <Form className="total_container">
        <Form.Group>
          <Form.Label>Sun(09/19) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mon (09/20) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tue(09/21) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Wed(09/22) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thu(09/23) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fri(09/23) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sat(09/24) :</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Form>
    </div>
  );
};
const SearchProject = () => {
  const [employee, setEmployee] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [partnerNumber, setPartnerNumber] = useState("");
  const [projectID, setProjectID] = useState("");
  const [docID, setDocID] = useState("");
  const [documentStatus, setDocumentStatus] = useState("");

  const documentOption = [
    { label: "Open", value: "Open" },
    { label: "In Flight", value: "In Flight" },
    { label: "Production", value: "Production" },
    { label: "On Hold", value: "On Hold" },
    { label: "Cancelled", value: "Cancelled" },
  ];
  const tableColumns = [
    {
      Header: "Customer Name",
      accessor: "customerName",
    },
    {
      Header: "Alt. Project Name",
      accessor: "altProjectName",
    },
    {
      Header: "Project ID",
      accessor: "projectID",
    },
    {
      Header: "Doc ID",
      accessor: "docID",
    },
    {
      Header: "Doc Type",
      accessor: "docType",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ];

  const searchHandler = (e) => {
    e.preventDefault();
    const data = {
      employee,
      partnerName,
      partnerNumber,
      projectID,
      docID,
      documentStatus,
    };
    console.log(data);
  };
  return (
    <div className="mt-5 border border-dark p-2">
      <h6 className="mb-3">Search for Project :</h6>
      <Form className="search_project_container">
        <Form.Group className="input__container">
          <Form.Label>Employee:</Form.Label>
          <Select
            value={employee}
            labelledBy="Select"
            onChange={(e) => setEmployee(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="input__container">
          <Form.Label>Partner Name:</Form.Label>
          <Form.Control
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="input__container">
          <Form.Label>Partner Number:</Form.Label>
          <Form.Control
            value={partnerNumber}
            onChange={(e) => setPartnerNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="input__container">
          <Form.Label>Project ID:</Form.Label>
          <Form.Control
            value={projectID}
            onChange={(e) => setProjectID(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="input__container">
          <Form.Label>Doc ID:</Form.Label>
          <Form.Control
            value={docID}
            onChange={(e) => setDocID(e.target.value)}
          />
        </Form.Group>
        <div className="input__container">
          <div></div>
          <Button
            variant="secondary"
            type="button"
            className="w-50 search-btn"
            onClick={searchHandler}
          >
            Search
          </Button>
        </div>
        <Form.Group className="input__container">
          <Form.Label>Document Status:</Form.Label>
          <Select
            value={documentStatus}
            onChange={setDocumentStatus}
            labelledBy="Select"
            options={documentOption}
          />
        </Form.Group>
      </Form>
      <ReactTable
        className="mt-5"
        defaultPageSize={5}
        data={timeTracking}
        columns={tableColumns}
      />
      <div className="search-bottom">
        <Form.Group className="search__input__container">
          <Form.Label>Document Status:</Form.Label>
          <div>19209</div>
        </Form.Group>
        <Form.Group className="search__input__container">
          <Form.Label>Document Status:</Form.Label>
          <div>8928</div>
        </Form.Group>
        <Button variant="secondary" type="button" className="w-50">
          Add Project to Time Tracking
        </Button>
      </div>
    </div>
  );
};
export default TimeTracking;
