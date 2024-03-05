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

import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

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
function AddProduct({ closeEvent }) {
  const formik = useFormikContext();

  const [userPostsCollection, setUserPostsCollection] = useState(null);

  useEffect(() => {
    const fetchUserPostsCollection = async () => {
      try {
        const userPostsCol = collection(db, "products");
        setUserPostsCollection(userPostsCol);
      } catch (error) {
        console.error("Error fetching user posts collection:", error);
      }
    };

    fetchUserPostsCollection();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Form Values:", values);

    try {
      if (userPostsCollection) {
        await addDoc(userPostsCollection, {
          name: values.name,
          price: values.price,
          date: values.date,
          category: values.category,
        });
        resetForm();
        closeEvent();
        Swal.fire("Submitted", "your file has been submitted .", "success");
      } else {
        console.error("User posts collection not initialized");
      }
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        date: "",
        category: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box sx={{ m: 2 }}>
            <Typography variant="h5" align="center">
              Add Product
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
                    value={values.category}
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
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default AddProduct;
