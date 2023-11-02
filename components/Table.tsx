"use client"
import React, {useEffect, useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import Image from "next/image";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

interface Product {
    name: string;
    productCode: number;
    price: number;
    image: string;
    currency: string;
    qty: number;
}

const label = {inputProps: {'aria-label': 'Switch demo'}};
const TableC = ({products: any}) => {
    const [productsState, setProductsState] = useState(products);
    const [query, setQuery] = useState("");

    const names = productsState && productsState.map(el => el.name);
    const selectedValues = React.useMemo(
        () => names.filter((v) => v),
        [names],
    );
    useEffect(() => {
        if (query === "") {
            setProductsState(products);
        } else {
            const filteredProducts = productsState && productsState.filter(el => query === el.name);
            setProductsState(filteredProducts);
        }

    }, [query])
    return (
        <>
            <Autocomplete
                value={query}
                onInputChange={(event, newInputValue) => {
                    setQuery(newInputValue);
                }}
                disablePortal
                id="combo-box-demo"
                options={selectedValues}
                sx={{width: 300, marginTop: "20px", marginBottom: "20px"}}
                renderInput={(params) => <TextField {...params} label="Product name"/>}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Photo</TableCell>
                            <TableCell>Product Code</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>QTY</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell></TableCell>
                            <TableCell> <Switch {...label} defaultChecked/> Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsState.map((product: any) => (
                            <TableRow key={product.productCode}>

                                <TableCell>
                                    <div><Image src={product.image} width={150} height={150}
                                                alt={"Image"}/></div>
                                </TableCell>

                                <TableCell>{product.productCode}</TableCell>
                                <TableCell><Typography variant="body2"
                                                       style={{fontWeight: 'bold'}}>{product.name}</Typography></TableCell>
                                <TableCell><Typography variant="body2"
                                                       style={{fontWeight: 'bold'}}>{product.qty}</Typography></TableCell>
                                <TableCell><Typography variant="body2"
                                                       style={{fontWeight: 'bold'}}>{product.price + "" + product.currency}</Typography></TableCell>
                                <TableCell> <Button variant="outlined"
                                                    style={{paddingTop: "4px", paddingBottom: "4px"}}>
                                    Add To Cart
                                </Button></TableCell>
                                <TableCell>
                                    <div
                                        style={{display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly"}}>

                                        <Box
                                            sx={{
                                                borderRadius: "50%",
                                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                                display: 'inline-block',
                                                p: 1,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FavoriteIcon color={"info"}/>
                                        </Box>
                                        <div style={{cursor: "pointer"}}>
                                            <CloseIcon/>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TableC;