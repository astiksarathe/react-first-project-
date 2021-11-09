import { useState } from "react";
import { Form, Button, Tab, Tabs, Table, Modal } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import "./Overview.css";
// import ReactTable from "react-table-6";
import DatePicker from 'react-date-picker';

const Overview = () => {
  const [addDocument, setAddDocument] = useState("");
  const [requestDocument, setRequestDocument] = useState("");
  const [document, setDocument] = useState("");
  const [estProdDate, setEstProdDate] = useState("");
  const [chrApplication, setChrApplication] = useState([]);
  const [mode, setMode] = useState([]);
  const [bookTypes, setBookTypes] = useState("");
  const [otherMode, setOtherMode] = useState("");
  const [businessGroup, setBusinessGroup] = useState("");
  const [SA, setSA] = useState("");
  const [CCode, setCCode] = useState("");
  const [name, setName] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [optionsFor204, setoptionsFor204] = useState([]);
  const [SAAlternateName, setSAAlternateName] = useState("");
  const [sampleLoads, setSampleLoads] = useState([]);
  const [requestDescription, setRequestDescription] = useState("");
  const [requestNotes, setRequestNotes] = useState("");
  const [addInternal, setAddInternal] = useState(false);
  const [involesThirdParty, setInvolesThirdParty] = useState(false);
  const [integerationNotes, setIntegerationNotes] = useState("");
  const [attachFile, setAttachFile] = useState("");
  const [cloneRequestAttachment, setCloneRequestAttachment] = useState("");
  const [IBInt, setIBInt] = useState("");
  const [IBProd, setIBProd] = useState("");
  const [OBInt, setOBInt] = useState("");
  const [OBProd, setOBProd] = useState("");
  const [loadNumber, setLoadNumber] = useState("");
  const [TNumber, setTNumber] = useState("");

  const [status, setStatus] = useState([]);

  // modal for sample load
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);

  const [requestDescriptionArray, setRequestDescriptionArray] = useState([]);
  const [requestNotesArray, setRequestNotesArray] = useState([]);
  const [integrationNotesArray, setIntegrationNotesArray] = useState([]);
  const [programmingRequestToggle, setProgrammingRequestToggle] =
    useState(false);

  const addToSampleLoad = (e) => {
    e.preventDefault();
    let sampleLoad = {
      loadNumber,
      TNumber,
    };
    setSampleLoads([...sampleLoads, sampleLoad]);
  };

  const requestNoteHandler = (e) => {
    e.preventDefault();
    let date = new Date();
    setRequestNotesArray([
      ...requestNotesArray,
      {
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        addInternal,
        requestNotes,
      },
    ]);
    setRequestNotes("");
  };
  const addInegrationNote = (e) => {
    e.preventDefault();
    let date = new Date();
    setIntegrationNotesArray([
      ...integrationNotesArray,
      {
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        integerationNotes,
      },
    ]);
    setIntegerationNotes("");
  };
  const sampleLoadEditHandler = (index, value, key) => {
    const SL = sampleLoads.map(element => element)
    SL[index][key] = value
    setSampleLoads([...SL])
  }
  const StatusOption = [
    { label: "Open", value: "Open" },
    { label: "In Flight", value: "In Flight" },
    { label: "Production", value: "Production" },
    { label: "On Hold", value: "On Hold" },
    { label: "Cancelled", value: "Cancelled" },
  ];
  const prgrammingRequestTableColumns = [
    {
      Header: "Prog Req ID",
    },
    {
      Header: "Doc  IDs",
    },
    {
      Header: "Title",
    },
    {
      Header: "Status",
    },
    {
      Header: "Target INT Date",
    },
    {
      Header: "Target Prod Date",
    },
    {
      Header: "Prod Date",
    },
    {
      Header: "Request Date",
    },
    {
      Header: "Programming",
    },
  ];
  const addDescription = (e) => {
    e.preventDefault();
    let date = new Date();
    setRequestDescriptionArray([
      ...requestDescriptionArray,
      {
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        requestDescription,
      },
    ]);
    setRequestDescription("");
  };
  return (
    <>
      <div className="row" id="top">
        <div className="col-md-8">
          <div className="row">
            <Form.Group className="col-md-6">
              <Form.Label>Requests Documents:</Form.Label>
              <Form.Control
                value={requestDocument}
                onChange={(e) => setRequestDocument(e.target.value)}
                as="textarea"
                rows={6}
              />
            </Form.Group>
            <Form.Group className="col-md-6">
              <Form.Label>Add Document:</Form.Label>
              <Select
                value={addDocument}
                labelledBy="Select"
                onChange={(e) => setAddDocument(e.target.value)}
              />
              <Form.Control
                className="mt-2"
                value={document}
                placeholder="Enter Document"
                onChange={(e) => setDocument(e.target.value)}
              />
              <Button
                className="mt-2"
                variant="secondary"
                type="button"
                data-testid="add-btn"
              >
                Add
              </Button>
            </Form.Group>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Primary Contact: </Form.Label>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Request Date: </Form.Label>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Start Date: </Form.Label>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Ready Date: </Form.Label>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Rank: </Form.Label>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">On Hold Date: </Form.Label>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Cancelled Date: </Form.Label>{" "}
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="d-block">Est Prod Date: </Form.Label>{" "}
            </div>
            <div className="col-md-6">
              <DatePicker
                value={estProdDate}
                onChange={
                  setEstProdDate
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>CHR Application(s):</Form.Label>
            <MultiSelect
              options={StatusOption}
              value={chrApplication}
              onChange={setChrApplication}
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>Mode (From request form):</Form.Label>
            <MultiSelect
              options={StatusOption}
              value={mode}
              onChange={setMode}
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>Book Types: (One year loads):</Form.Label>
            <Select
              value={bookTypes}
              labelledBy="Select"
              onChange={(e) => setBookTypes(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>Other Mode:</Form.Label>
            <Form.Control
              value={otherMode}
              onChange={(e) => {
                setOtherMode(e.target.value);
              }}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>Business Group:</Form.Label>
            <Select
              value={businessGroup}
              labelledBy="Select"
              onChange={(e) => setBusinessGroup(e.target.value)}
            />
          </Form.Group>
          {/*  */}
          <div className="row mt-3">
            <div className="col-md-2">
              <Form.Check
                type="checkbox"
                label="SA"
                value={SA}
                onChange={(e) => {
                  setSA(e.target.value);
                }}
              />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <Form.Label>CCode:</Form.Label>
                </div>
                <div className="col-md-9">
                  <Form.Control
                    value={CCode}
                    onChange={(e) => {
                      setCCode(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">Comms:</div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>204 Time Out:</Form.Label>
            <div className="row">
              <div className="col-md-6">
                <Form.Control
                  value={timeOut}
                  onChange={(e) => setTimeOut(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <span>Minutes</span>
              </div>
            </div>
          </Form.Group>
          {/*  */}
          <div className="row mt-3">
            <div className="col-md-6">Name:</div>
            <div className="col-md-6">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">SA Alternate Name:</div>
            <div className="col-md-6">
              <Form.Control
                value={SAAlternateName}
                onChange={(e) => setSAAlternateName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">Partners Test IDs:</div>
            <div className="col-md-6"></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">Partners Prod IDs:</div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>204 Options:</Form.Label>
            <MultiSelect
              options={StatusOption}
              value={optionsFor204}
              onChange={setoptionsFor204}
            />
          </Form.Group>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="mt-2">Sample Loads: </Form.Label>
            </div>
            <div className="col-md-6 ">
              <Button
                className=" float-right p-1 mt-1 mb-1"
                variant="secondary"
              >
                X
              </Button>
            </div>
          </div>

          <div className="sample-loads">
            <table>
              <tbody>
                {sampleLoads.map((obj, index) => {
                  return (
                    <tr>
                      <td>
                        <Form.Control
                          value={obj.loadNumber}
                          onChange={(e) =>
                            sampleLoadEditHandler(
                              index,
                              e.target.value,
                              "loadNumber"
                            )
                          }
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          value={obj.TNumber}
                          onChange={(e) =>
                            sampleLoadEditHandler(
                              index,
                              e.target.value,
                              "TNumber"
                            )
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Button
                className="mt-2"
                variant="secondary"
                data-testid="copy-all-btn"
              >
                Copy All
              </Button>
            </div>
            <div className="col-md-6 ">
              <Button
                className="mt-2 float-right"
                variant="secondary"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for sample load*/}
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Load Number:</Form.Label>
            <Form.Control
              value={loadNumber}
              onChange={(e) => {
                setLoadNumber(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>T Number:</Form.Label>
            <Form.Control
              value={TNumber}
              onChange={(e) => {
                setTNumber(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(e) => { addToSampleLoad(e); handleHide();}}
            data-testid="sample-add-btn"
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mt-4">
        <Tabs
          defaultActiveKey="RequestDescription"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="RequestDescription" title="Request Description">
            <div className="block">
              <table>
                <tbody>
                  {requestDescriptionArray.map((obj, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{obj.date}</td>
                        <td>{obj.requestDescription}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Form.Control
              className="mt-1"
              as="textarea"
              row={10}
              value={requestDescription}
              onChange={(e) => setRequestDescription(e.target.value)}
            />
            <Button
              className="mt-2"
              variant="secondary"
              type="button"
              onClick={addDescription}
            >
              Add Description
            </Button>
          </Tab>
          <Tab eventKey="RequestNotes" title="Request Notes">
            <div className="block">
              <table>
                <tbody>
                  {requestNotesArray.map((obj, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{obj.date}</td>
                        <td>{obj.addInternal ? "Internal" : "External"}</td>
                        <td>{obj.requestNotes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Form.Control
              className="mt-1"
              as="textarea"
              row={10}
              value={requestNotes}
              onChange={(e) => setRequestNotes(e.target.value)}
            />
            <div className="d-flex">
              <Button
                className="mt-2"
                variant="secondary"
                type="button"
                onClick={requestNoteHandler}
              >
                Add Note
              </Button>
              <Form.Check
                className="request-notes"
                type="checkbox"
                label="Add to Internal"
                value={addInternal}
                onChange={(e) => setAddInternal(!addInternal)}
              />
            </div>
          </Tab>
          <Tab eventKey="IntegrationNotes" title="Integration Notes">
            <div className="block">
              <table>
                <tbody>
                  {integrationNotesArray.map((obj, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{obj.date}</td>
                        <td>Note Type: Carrier Integration</td>
                        <td>{obj.integerationNotes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Form.Control
              className="mt-1"
              as="textarea"
              row={10}
              value={integerationNotes}
              onChange={(e) => setIntegerationNotes(e.target.value)}
            />
            <Button
              className="mt-2"
              variant="secondary"
              type="button"
              onClick={addInegrationNote}
            >
              Add Integration Note
            </Button>
          </Tab>
        </Tabs>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h6>Volumne Information:</h6>
          <p>Historical Load Count ( last 365 days):960</p>
          <p>Estimated Load Count (per month): [Est Load Cnt]</p>
        </div>
        <div className="col-md-6">
          <Form.Check
            className="request-notes"
            type="checkbox"
            label="Involves third party"
            value={involesThirdParty}
            onChange={(e) => setInvolesThirdParty(!involesThirdParty)}
          />
        </div>
      </div>
      <h6 className="mt-4">Request Complexity Score: 1</h6>
      <h6 className="mt-4">Request-Level Documentation:</h6>
      <div className="request_level_container">
        <Table>
          <tbody>
            <tr>
              <td>SMith</td>
              <td>other</td>
              <td>02-12-2013</td>
              <td>
                <Button
                  variant="secondary"
                  type="button"
                  data-testid="request-level-delete-btn"
                >
                  Delete
                </Button>
                <Button
                  className="margin-left"
                  variant="secondary"
                  type="button"
                  data-testid="request-level-download-btn"
                >
                  Download
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="row  mt-2">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">Clone Request Attachments (ProjId):</div>
            <div className="col-md-3">
              <Form.Control
                value={cloneRequestAttachment}
                onChange={(e) => setCloneRequestAttachment(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <Button variant="secondary" type="button" data-testid="clone-btn">
                Clone
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row  justify-content-end">
            <div className="col-md-2">
              <Form.Label>Attach File:</Form.Label>
            </div>
            <div className="col-md-6">
              <Select
                labelledBy="Select"
                value={attachFile}
                onChange={(e) => setAttachFile(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6>IB Archive Paths:</h6>
        <div className="row">
          <div className="col-md-3">INT:</div>
          <div className="col-md-9">
            <Form.Control
              value={IBInt}
              onChange={(e) => setIBInt(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">PROD:</div>
          <div className="col-md-9">
            <Form.Control
              value={IBProd}
              onChange={(e) => setIBProd(e.target.value)}
            />
          </div>
        </div>
        <h6>OB Archive Paths:</h6>
        <div className="row">
          <div className="col-md-3">INT:</div>
          <div className="col-md-9">
            <Form.Control
              value={OBInt}
              onChange={(e) => setOBInt(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">PROD:</div>
          <div className="col-md-9">
            <Form.Control
              value={OBProd}
              onChange={(e) => setOBProd(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Time Tracking Section */}
      <h5 className="mt-4">Time Tracking:</h5>
      <div className="row">
        <div className="col-md-3">
          <h6>Hours By Document:</h6>
          <div className="time-tracking-section-container"></div>
        </div>
        <div className="col-md-3">
          <h6>Request Level:</h6>
          <div className="time-tracking-section-container"></div>
        </div>
        <div className="col-md-4">
          <h6>Related Projects:</h6>
          <div className="time-tracking-section-container"></div>
        </div>
        <div className="col-md-2">
          <div className="mt-4">
            <Button
              className="w-100"
              variant="secondary"
              type="button"
              data-testid="add-proj-btn"
            >
              Add Proj#
            </Button>
            <Form.Control className="mt-2" />
            <Button
              className="mt-2 w-100"
              variant="secondary"
              type="button"
              data-testid="remove-proj-btn"
            >
              Remove Proj#
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h6>Total Hours: 0</h6>
            </div>
            <a href="#top" className="col-md-6 color-pink">
              Back to Top
            </a>
          </div>
        </div>
      </div>
      {/* Programming Request */}
      <div>
        <h5 className="mt-4">
          <Button
            className="mr-2"
            variant="secondary"
            type="button"
            onClick={() => {
              setProgrammingRequestToggle(!programmingRequestToggle);
            }}
          >
            {programmingRequestToggle ? (
              <MdKeyboardArrowUp size="20" />
            ) : (
              <MdKeyboardArrowDown size="20" />
            )}
          </Button>
          Programming Requests
        </h5>
        {programmingRequestToggle ? (
          <div>
            {/* <div className="row">
              <div className="col-md-6">
                <Form.Label>
                  Select the documents that apply to your new request:
                </Form.Label>
                <MultiSelect
                  options={StatusOption}
                  value={status}
                  onChange={setStatus}
                />
              </div>
              <div className="col-md-6">
                <Button
                  className="create-new-request"
                  variant="secondary"
                  type="button"
                >
                  Create New Request
                </Button>
              </div>
            </div> */}
            {/* <div className="mt-3">
              <Form.Label>
                Select the documents that apply to your new request:
              </Form.Label>
              <ReactTable
                defaultPageSize={5}
                columns={prgrammingRequestTableColumns}
              />
            </div> */}
            <a href="#top" className="color-pink">
              Back to Top
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Overview;
