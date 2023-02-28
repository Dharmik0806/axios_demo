import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { Checkbox, Chip, Divider, FormControlLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function MedicineCity(props) {
   
    // console.log("medicine city");

    // +++++++++++++++++++++++++++++++

    const [MedData, setMedData] = useState([]);
    const [did, setDid] = useState();
    const [eid, setEid] = useState();
    // dialog
    const [dopen, setDOpen] = React.useState(false);

    const handleDClickOpen = () => {
        setDOpen(true);
    };

    const handleDClose = () => {
        setDOpen(false);
    };
    // **

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        if (localData !== null) {
            setMedData(localData)
        }

    }, [])

    const hendelDelet = (did) => {
        console.log(did);
        // console.log(rData);
        // let localData = JSON.parse(localStorage.getItem("medicine"));

        // let dData = localData.filter((l) => l.id !== did);

        // localStorage.setItem("medicine", JSON.stringify(dData));
        // setMedData(dData)

        // handleDClose();
        // setDid();


        handleDClose();
        setDid();

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Medicine name', width: 130 },
        { field: 'price', headerName: 'Medicine price', width: 130 },
        { field: 'qua', headerName: 'Medicine quantity', width: 130 },
        { field: 'date', headerName: "Expiry-Date", width: 130 },
        {
            field: 'Action',
            headerName: 'Action',
            renderCell: (params) => {
                return (
                    <>
                        {/* <IconButton aria-label="delete" onClick={() => { hendelDelet(params.row) }}> */}
                        {/* <IconButton aria-label="delete" onClick={() => {handleDClickOpen() , setDid(params.row.id) }}> */}
                        <IconButton onClick={() => { setDid(params.row.id); setDOpen(true) }} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>

                        <IconButton
                            //  onClick={handleClickOpen}
                            onClick={() => { handleUpdate(params.row) }}

                            aria-label="delete">
                            <ModeEditIcon />
                        </IconButton>

                    </>
                )
            }
        }

    ];

    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        price: yup.number().required("please enter Price").positive().integer(),
        qua: yup.number().required("please enter quantity").positive().integer(),
        date: yup.number().required("date enter quantity")
    });

    const medicineData = (values) => {
        // let localData = JSON.parse(localStorage.getItem("medicine"));

        // console.log(values);

        // let idData = Math.round(Math.random() * 1000);
        // let Mdata = { ...values, id: idData }

        // if (localData !== null) {
        //     localData.push(Mdata)
        //     localStorage.setItem("medicine", JSON.stringify(localData))
        //     setMedData(localData)
        // } else {
        //     setMedData([Mdata])
        //     localStorage.setItem("medicine", JSON.stringify([Mdata]))
        // }
        // form ne reset karava imp
        // formikobj.resetForm()

        console.log(values);

        formikobj.resetForm()

    }
    const formikobj = useFormik({
        initialValues: {
            name: '',
            price: '',
            qua: '',
            date: ""
        },

        validationSchema: schema,
        onSubmit: values => {
            // console.log(values);

            if (eid) {
                handleUpdateData(values)
            } else {
                medicineData(values)
            }
            // medicineData(values)
            setOpen(false);
        },
    });


    const { handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched, setValues, values, setFieldValue } = formikobj
    // console.log(errors, touched);

    const handleUpdate = (values) => {
        console.log("handleupdate");
        setEid(values);
        setOpen(true);
        setValues(values);
    }

    // console.log("eid data");
    // console.log(eid);

    const handleUpdateData = (values) => {
        // console.log("MedData");
        // console.log(MedData);
        // console.log("update data 150");
        // console.log(values);

        // let localData = JSON.parse(localStorage.getItem("medicine"));
        // console.log(".. local data in update");
        // console.log(localData);

        // let updateData = localData.map((l) => {

        //     if (l.id === values.id) {
        //         // console.log("l id");
        //         // console.log(l.id);
        //         return values;
        //     } else {
        //         return l;
        //     }
        // })

        // console.log("UPDATE DATA");
        // console.log(updateData);

        // localStorage.setItem("medicine", JSON.stringify(updateData))

        // console.log(localData);
        // setMedData(updateData)
        // setEid("");
        // setValues();
        // formikobj.resetForm()

        console.log("update medicine");

        formikobj.resetForm()

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    // console.log(MedData);

    return (

        <div>
            <h1>Medision component city</h1>

            <div >
                <div>
                    <Button sx={{ variant: "outlined", border: "1px solid blue", left: "1100px" }} onClick={handleClickOpen}>
                        Add Medicine
                    </Button>
                </div>


                <Dialog open={open} onClose={handleClose} sx={{ border: "5px solid blue", width: "700px" }}>

                    {
                        (eid) ? <DialogTitle>Update Medicine Data</DialogTitle> :
                            <DialogTitle>Add medicine</DialogTitle>
                    }
                    <Divider>
                        <Chip label="Add medicine" />
                    </Divider>
                    <DialogContent>
                        <Formik values={formikobj}>
                            <Form onSubmit={handleSubmit}>

                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Medision Name"
                                    type="text"
                                    name='name'
                                    value={values.name}
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('name'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.name !== '' && touched.name ? <p className='form-error'>{errors.name}</p> : null}


                                <TextField
                                    margin="dense"
                                    id="qua"
                                    label="Qua"
                                    type="number"
                                    name='qua'
                                    value={values.qua}
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('qua'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.qua !== '' && touched.qua ? <p className='form-error'>{errors.qua}</p> : null}

                                <TextField
                                    margin="dense"
                                    id="price"
                                    label="price"
                                    type="number"
                                    name='price'
                                    value={values.price}
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('price'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.price !== '' && touched.price ? <p className='form-error'>{errors.price}</p> : null}

                                <TextField
                                    margin="dense"
                                    id="date"
                                    label="date"
                                    type="number"
                                    name='date'
                                    value={values.date}
                                    fullWidth
                                    variant="filled"
                                    onChange={e => { setFieldTouched('date'); handleChange(e) }}
                                    onBlur={handleBlur}
                                />
                                {errors.date !== '' && touched.date ? <p className='form-error'>{errors.date}</p> : null}

                                <DialogActions>
                                    <Button
                                        onClick={handleClose}
                                    >Cancel</Button>
                                    {/* <Button type="submit">Add</Button> */}
                                    {
                                        (eid) ? <Button type="submit">Update</Button> :
                                            <Button type="submit">Add</Button>
                                    }

                                </DialogActions>
                            </Form>
                        </Formik>
                    </DialogContent>


                </Dialog>
            </div>

            {/* dialog */}
            <Dialog
                open={dopen}
                onClose={handleDClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are sure to delete this medicine.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDClose()}>Disagree</Button>
                    <Button onClick={() => hendelDelet(did)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            {/* **** */}


            {/* <div style={{ height: 400, width: '80%', margin: '0px auto 0px auto' }}>
                <DataGrid
                    rows={}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div> */}

        </div >
    );
}

export default MedicineCity;

{/* <IconButton aria-label="delete" onClick={() => { hendelDelet(params.row) }}> */ }