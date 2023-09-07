import * as yup from "yup";

let ImportID = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //contains AlphaNumberic with min of 8

export let ImportvalidationSchema = yup.object().shape({
  ImportID: yup
    .string()
    .matches(ImportID, "Must be 8 Characters with AlphaNumberic")
    .required("ImportID is Required"),
  ImporterName: yup
    .string()
    .required("Fill the Field for Accepting the Invoice"),
  ImporterAddress: yup.string().min(10).max(20).required(),
  InvoiceNumber: yup.string()
});






export let InvoiceSrNoValidationSchema = yup.object().shape({
  InvoiceSrNo: yup.number().positive().integer().max(5)
    .trim()
    .required("Invoice Sr. No. is required"),
    ItemSrNo: yup.number().positive().integer().max(4)
    .integer()
    .trim()
    .required("Item Sr. No. is required"),
    PGACode: yup.string().max(5)
    .trim(),
    InfoType: yup.string().max(3)
    .trim()
    .required("Info Type is required"),
    InfoQfr: yup.string().max(100)
    .trim()
    .required("Info Qfr is required"),
    InfoCode: yup.string().max(100)
    .trim(),
    InfoText: yup.string().max(100)
    .trim(),
    InfoMSR: yup.number().max(16.6)
    .trim(),
    InfoUQC: yup.number().max(16.6)
    .trim()
});







