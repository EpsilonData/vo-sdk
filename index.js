"use strict";

const url = require("url");
const rdc = require("vo-rdc");

const getQueryString = () => {
  return url.parse(window.location.href, true).query;
};

const SDK = {
  "getRDC": () => {
    const r = getQueryString().r || null;
    const rdcInstance = new rdc(1);
    rdcInstance.fromString(r);
    return rdcInstance;
  }
};

if (window) window.SDK = SDK;
if (module) module.exports = SDK;