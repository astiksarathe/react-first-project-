import React, { useState } from "react";
import "./Audit.css";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";
import ReactTable from "react-table-6";
import { completed } from "../data/deployment";
import { MultiSelect } from "react-multi-select-component";

const Audit = () => {
  const [businessAnalyst, setBusinessAnalyst] = useState([]);
  const [developer, setDeveloper] = useState([]);
  const [artifacts, setArtifacts] = useState([]);
  const [RFCNumber, setRFCNumber] = useState("");
  const [partnerCode, setPartnerCode] = useState("");
  const [mapName, setMapName] = useState("");
  const [projectID, setProjectID] = useState("");
  const [between, setBetween] = useState("");
  const [and, setAnd] = useState("");
  const [changeType, setChangeType] = useState("");
  const [dateType, setDateType] = useState("");

  const artifactsOptions = [
    { label: "Map", value: "Map" },
    { label: "Mailboxes", value: "Mailboxes" },
    { label: "Routing rules", value: "Routing rules" },
    { label: "Envelops", value: "Envelops" },
    { label: " Codelist", value: "Codelist" },
    { label: "DB entries", value: "DB entries" },
  ];
  const autditTableColumns = [
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
  const developerOptions = [
    { label: "Trony Anderson", value: "Trony Anderson" },
  ];
  const businessAnalystOptions = [
    { label: "Trony Anderson", value: "Trony Anderson" },
  ];
  const changeTypeOptions = [
    { label: "Carrier Project - New", value: "Carrier Project - New" },
    {
      label: "Carrier Project - Enhancement",
      value: "Carrier Project - Enhancement",
    },
    {
      label: "Carrier Project - Migration",
      value: "Carrier Project - Migration",
    },
    { label: "New Carrier Setup", value: "New Carrier Setup" },
    { label: "Carrier t Number Rollup", value: "Carrier t Number Rollup" },
    {
      label: "Existing Carrier Comms Change",
      value: "Existing Carrier Comms Change",
    },
    { label: "Carrier Retest", value: "Carrier Retest" },
    { label: "New", value: "New" },
    { label: "Enhancement", value: "Enhancement" },
    { label: "Mix", value: "Mix" },
    { label: "Migration", value: "Migration" },
  ];
  const dataTypeOptions = [
    { label: "Submitted", value: "Submitted" },
    { label: "Scheduled", value: "Scheduled" },
    { label: "Completed", value: "Completed" },
  ];
  const defaultHandler = (e) => {
    e.preventDefault();
    setBusinessAnalyst([]);
    setDeveloper([]);
    setArtifacts([]);
    setRFCNumber("");
    setPartnerCode("");
    setMapName("");
    setProjectID("");
    setBetween("");
    setAnd("");
    setChangeType("");
    setDateType("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      RFCNumber,
      partnerCode,
      mapName,
      projectID,
      between,
      and,
      changeType,
      dateType,
      businessAnalyst,
      developer,
      artifacts,
    };
    console.log(data);
  }
  return (
    <div>
      <h4 className="main_heading-deployment">Implementation Audit</h4>
      <div className="audit__grid">
        <section>
          <Form.Group>
            <Form.Label>Business Analyst:</Form.Label>
            <MultiSelect
              options={businessAnalystOptions}
              value={businessAnalyst}
              labelledBy="Select"
              onChange={setBusinessAnalyst}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Developer:</Form.Label>
            <MultiSelect
              options={developerOptions}
              value={developer}
              labelledBy="Select"
              onChange={setDeveloper}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Artifacts:</Form.Label>
            <MultiSelect
              options={artifactsOptions}
              value={artifacts}
              labelledBy="Select"
              onChange={setArtifacts}
            />
          </Form.Group>
        </section>
        <section>
          <Form.Group>
            <Form.Label>RFC Number:</Form.Label>
            <Form.Control
              value={RFCNumber}
              onChange={(e) => setRFCNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Partner Code:</Form.Label>
            <Form.Control
              value={partnerCode}
              onChange={(e) => setPartnerCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Map Name:</Form.Label>
            <Form.Control
              value={mapName}
              onChange={(e) => setMapName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project ID:</Form.Label>
            <Form.Control
              value={projectID}
              onChange={(e) => setProjectID(e.target.value)}
            />
          </Form.Group>
        </section>
        <section>
          <Form.Group>
            <Form.Label>Change Type:</Form.Label>
            <Select
              value={changeType}
              options={changeTypeOptions}
              onChange={setChangeType}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date Type:</Form.Label>
            <Select
              value={dateType}
              options={dataTypeOptions}
              onChange={ setDateType}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Between: </Form.Label>
            <br />
            <Form.Control
              type="date"
              value={between}
              onChange={(e) => setBetween(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>And:</Form.Label> <br />
            <Form.Control
              type="date"
              value={and}
              onChange={(e) => setAnd(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="secondary"
            type="button"
            className="audit_btn"
            onClick={submitHandler}
          >
            Get Data
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="audit_btn"
            onClick={defaultHandler}
          >
            Back to Defaults
          </Button>
        </section>
      </div>
      <ReactTable
        className="mt-5"
        defaultPageSize={5}
        data={completed}
        columns={autditTableColumns}
      />
    </div>
  );
};

export default Audit;
