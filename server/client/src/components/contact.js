import React, { Component } from "react";

const Contact = () => {
  return (
    <div className="grey darken-1">
      <div className="container" style={{marginTop:300}}>
        <form action="https://formspree.io/caesarshia@gmail.com">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="email" />
          <label>Message</label>
          <input type="text" name="body" />
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
