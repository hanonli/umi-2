import yayJpg from "../assets/yay.jpg";
import TraceProvider from "./tracing.js";
import "./App.css";
import { useState } from "react";

export default function HomePage() {
  const [useValue, useValueFunction] = useState();
  const [toggle, setToggle] = useState(false);

  async function MyExpressGetFunction() {
    const response = await fetch(
      "http://otel-prisma-backend-dev4.ap-southeast-2.elasticbeanstalk.com/"
    );

    console.log(response);
  }

  async function MyExpressGetHelloFunction() {
    const response = await fetch(
      "http://otel-prisma-backend-dev4.ap-southeast-2.elasticbeanstalk.com/hello"
    );

    console.log(response);
  }

  async function MyExpressPostFunction() {
    const response = await fetch(
      "http://otel-prisma-backend-dev4.ap-southeast-2.elasticbeanstalk.com/test",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }

  async function MyExpressPostFailFunction() {
    const response = await fetch(
      "http://otel-prisma-backend-dev4.ap-southeast-2.elasticbeanstalk.com/test/fail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }
  return (
    <TraceProvider>
      <div>
        <h2>Yay! Welcome to umi!</h2>
        <p>
          <img src={yayJpg} width="388" />
        </p>
        <p>
          To get started, edit <code>pages/index.tsx</code> and save to reload.
        </p>
      </div>
      <div className="App">
        <div style={{ margin: "2% 30%", textAlign: "left" }}>
          <h1>Details of Employees GET</h1>
          <p>
            An employee information form ensures that you have current details
            on employees, including contact details and emergency contact
            information. Collecting and updating these forms periodically will
            allow you to keep track of your employees and reference details when
            you need them. Learn what to include on an employee information form
            and how to create one for your business.
          </p>
          <button
            id="btn"
            style={{ padding: "0.5% 3%", backgroundColor: "#E0E0E0" }}
            onClick={() => {
              setToggle(!toggle);
              MyExpressGetFunction();
            }}
          >
            Learn more{" "}
          </button>

          {toggle ? <p className="result">{useValue}</p> : ""}
        </div>
        <div style={{ margin: "2% 30%", textAlign: "left" }}>
          <h1>Details of Employees GET HELLO</h1>
          <p>
            An employee information form ensures that you have current details
            on employees, including contact details and emergency contact
            information. Collecting and updating these forms periodically will
            allow you to keep track of your employees and reference details when
            you need them. Learn what to include on an employee information form
            and how to create one for your business.
          </p>
          <button
            id="btn"
            style={{ padding: "0.5% 3%", backgroundColor: "#E0E0E0" }}
            onClick={() => {
              setToggle(!toggle);
              MyExpressGetHelloFunction();
            }}
          >
            Learn more{" "}
          </button>

          {toggle ? <p className="result">{useValue}</p> : ""}
        </div>
        <div style={{ margin: "2% 30%", textAlign: "left" }}>
          <h1>Details of Employees POST</h1>
          <p>
            An employee information form ensures that you have current details
            on employees, including contact details and emergency contact
            information. Collecting and updating these forms periodically will
            allow you to keep track of your employees and reference details when
            you need them. Learn what to include on an employee information form
            and how to create one for your business.
          </p>
          <button
            id="btn"
            style={{ padding: "0.5% 3%", backgroundColor: "#E0E0E0" }}
            onClick={() => {
              setToggle(!toggle);
              MyExpressPostFunction();
            }}
          >
            Learn more{" "}
          </button>

          {toggle ? <p className="result">{useValue}</p> : ""}
        </div>
        <div style={{ margin: "2% 30%", textAlign: "left" }}>
          <h1>Details of Employees POST FAIL </h1>
          <p>
            An employee information form ensures that you have current details
            on employees, including contact details and emergency contact
            information. Collecting and updating these forms periodically will
            allow you to keep track of your employees and reference details when
            you need them. Learn what to include on an employee information form
            and how to create one for your business.
          </p>
          <button
            id="btn"
            style={{ padding: "0.5% 3%", backgroundColor: "#E0E0E0" }}
            onClick={() => {
              setToggle(!toggle);
              MyExpressPostFailFunction();
            }}
          >
            Learn more{" "}
          </button>

          {toggle ? <p className="result">{useValue}</p> : ""}
        </div>
      </div>
    </TraceProvider>
  );
}
