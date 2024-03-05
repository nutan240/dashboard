import * as React from "react";
import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { db } from "../firebase/Firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

import Swal from "sweetalert2";
import AddProduct from "./AddProduct";
import Editproduct from "./Editproduct";
import { NavLink } from "react-router-dom";
export default function Products() {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [open, setOpen] = useState(false);
  const [editopen, setEditopen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [filteredRows, setFilteredRows] = useState([]);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditopen(false);
  const handleEditOpen = () => setEditopen(true);
  const [formid, setFormid] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      setRows(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          date: doc.data().date,
          category: doc.data().category,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      const filtered = rows.filter((row) => row.category === v);
      setFilteredRows(filtered);
    } else {
      setFilteredRows([]);
    }
  };
  

  const editData = (id, name, price, category, date) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category: category,
      date: date,
    };
    console.log(data, "data");
    setFormid(data);
    handleEditOpen(true);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Box >
      <Box sx={{ fontSize: "20px", textDecoration: "none" }}>
        <NavLink style={{ textDecoration: "none" }} to={"/home"}>
          Go back
        </NavLink>
      </Box>
      <div>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct closeEvent={handleClose} />
          </Box>
        </Modal>

        <Modal
          open={editopen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Editproduct closeEvent={handleEditClose} fid={formid} />
          </Box>
        </Modal>
      </div>

      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          padding: "20px",
          fontSize: "40px",
          textAlign: "center",
          fontStyle: "italic",
          color: "darkblue",
          fontWeight: "bold",
        }}
      >
        Products List
      </Typography>
      <Divider />
      <Box height={10} />
      <Stack sx={{width:'90%' , margin:'auto'}} direction="row" spacing={2} className="my-2 mb-2">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button
          sx={{
            background: "white",
            borderRadius: "20px",
            height: "55px",
            width: "47px",
          }}
          onClick={handleOpen}
          variant="contained"
        >
          <AddCircleIcon
            sx={{ height: "50px", width: "40px", color: "green" }}
          />
        </Button>
      </Stack>
      {rows.length > 0 && (
        <Paper sx={{ width: "89%", overflow: "hidden", padding: "12px" , margin:'auto' , boxShadow:10 }}>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
          </Stack>
          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" , color:'darkgreen' , fontWeight:'bold' , fontSize:'18px' , fontStyle:'italic' , textDecoration:'underline'}}>
                    NAME
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px"
                  , color:'darkgreen' , fontWeight:'bold' , fontSize:'18px' , fontStyle:'italic' , textDecoration:'underline' }}>
                    PRICE
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px"
                  , color:'darkgreen' , fontWeight:'bold' , fontSize:'18px' , fontStyle:'italic' , textDecoration:'underline'
                   }}>
                   
                    CATEGORY
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" 
                  , color:'darkgreen' , fontWeight:'bold' , fontSize:'18px' , fontStyle:'italic' ,textDecoration:'underline'
                  }}>
                    DATE
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" 
                  , color:'darkgreen' , fontWeight:'bold' , fontSize:'18px' , fontStyle:'italic', textDecoration:'underline'
                  }}>
                    ACTION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">  
                        <CurrencyRupeeIcon sx={{fontSize:'13px'}} />
                     {row.price}</TableCell>
                        <TableCell align="left">{row.category}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={() =>
                                editData(
                                  row.id,
                                  row.name,
                                  row.price,
                                  row.category,
                                  row.date
                                )
                              }
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "red",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      </Box>
    </>
  );
}
