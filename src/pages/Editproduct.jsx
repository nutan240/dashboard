import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik, Form, Field, useFormikContext } from "formik";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db } from "../firebase/Firebase";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { cleanDigitSectionValue } from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";

const currencies = [
  {
    value: "MOBILE",
    label: "MOBILE",
  },
  {
    value: "LAPTOP",
    label: "LAPTOP",
  },
  {
    value: "ELECTRONIC",
    label: "ELECTRONIC",
  },
];
function EditProduct({ closeEvent, fid }) {
  const formik = useFormikContext();

  console.log(fid, "fidfidfid");

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values, "values");
    try {
      const docRef = doc(db, "products", fid.id);
      const documentData = {
        name: values.name,
        price: values.price,
        category: values.category,
        date: values.date,

        // name: fid.name || values.name,
        // price: fid.price || values.price,
        // date: fid.date ||  values.date ,
        // category: fid.category ||  values.category,
      };

      await setDoc(docRef, documentData);

      Swal.fire("Updated!", "Your product has been updated.", "success");
      closeEvent();
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: fid.name || "",
        price: fid.price || "",
        date: fid.date || "",
        category: fid.category || "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box sx={{ m: 2 }}>
            <Typography variant="h5" align="center">
              Edit Product
            </Typography>

            <IconButton
              sx={{ position: "absolute", top: 0, right: "0" }}
              onClick={closeEvent}
            >
              <CloseIcon />
            </IconButton>

            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ m: 1 }}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  variant="outlined"
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ display: "flex", m: 1, gap: 2 }}>
                <Field
                  as={TextField}
                  type="number"
                  name="price"
                  label="Price"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupeeIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Field
                  as={TextField}
                  name="date"
                  value={fid.date && values.date}
                  label="Date"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ display: "flex", m: 1, gap: 2 }}>
                <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Field
                    as={Select}
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={fid.category}
                    onChange={handleChange}
                    label="Category"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained">
              update
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default EditProduct;
