"use server"
import styles from './page.module.css'
import fs from 'fs';
// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
//
import {Box, Button, Grid, Typography} from '@mui/material';
import Table from "../../components/Table"
import path from "path";


export default async function Home() {
    const filePath = path.join(process.cwd(), 'data', 'MOCK_DATA.json');
    const rawData = await fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(rawData);

    
    return (
        <main className={styles.main}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: "50px"
            }}>
                <Grid container display={"flex"} flexDirection={"column"} spacing={3}>
                    <Box display="flex" alignItems="center" marginTop={"10px"}>
                        <HomeOutlinedIcon color={"disabled"}/>
                        <PlayArrowOutlinedIcon color={"info"}/>
                        <Typography variant="body1" color={"#999999"}>Wishlist</Typography>
                    </Box>


                    <Typography marginTop={"10px"} variant="h4" component="h3" style={{fontWeight: 'bold'}}>
                        Wishlist
                    </Typography>
                    <Typography marginTop={"10px"} variant={"body2"}
                                color={"#999999"}>{products.length} products</Typography>

                </Grid>

            </div>
            <div
                style={{width: '100%', display: 'flex', flexDirection: 'row', marginTop: "20px", marginBottom: '30px'}}>
                <Grid container display={"flex"} flexDirection={"row"} spacing={2}>
                    <Box bgcolor={"#B2BAC7"} padding={"15px"} mx={"4px"} borderRadius={"5px"} display="flex"
                         alignItems="center"
                         flexDirection={"row"} justifyContent={"center"}>
                        <Typography variant="h6" style={{fontWeight: 'bold'}} color={"#fff"} mr={"10px"}>All
                            Products</Typography>
                        <DeleteIcon style={{color: 'white'}} color={"primary"}/>

                    </Box>

                    <Box bgcolor={"#E9EBEF"} padding={"15px"} mx={"4px"} borderRadius={"5px"} display="flex"
                         alignItems="center"
                         flexDirection={"row"} justifyContent={"center"}>
                        <Typography variant="h6" style={{fontWeight: 'bold'}} mr={"10px"}>Phones</Typography>
                        <DeleteIcon color={"disabled"}/>

                    </Box>

                    <Box bgcolor={"#E9EBEF"} padding={"15px"} mx={"4px"} borderRadius={"5px"} display="flex"
                         alignItems="center"
                         flexDirection={"row"} justifyContent={"center"}>
                        <Typography variant="h6" style={{fontWeight: 'bold'}} mr={"10px"}>Accessories</Typography>
                        <DeleteIcon color={"disabled"}/>

                    </Box>

                </Grid>
                <Button variant="outlined" style={{minWidth: '200px'}}>
                    New Category
                </Button>
            </div>
            <Table products={products}/>
        </main>
    )
}

