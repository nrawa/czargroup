import React, { useEffect, useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Demo() {
    const loader = {
        position:'relative',
        top : '106px',
        left : '450px'
    }
    const classes = useStyles();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    async function getData() {

        setLoading(true)
        const response = await fetch('https://api.covid19india.org/data.json');
        const actualData = await response.json();
        setData(actualData.statewise);
        setLoading(false)
    }


    useEffect(() => {
        getData();
    })

    return (
        <div>
            {
                data.length !== 0 ?
                    data.map((vo) => (
                        <div>
                            <Accordion>
                                <AccordionSummary
                                style ={{backgroundColor:"#0f999c" , color:"white"}}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{vo.state}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow style ={{backgroundColor:"#c7e6f2"}}>
                                                    <TableCell >Confirmed</TableCell>
                                                    <TableCell >Recovered</TableCell>
                                                    <TableCell >Deaths</TableCell>
                                                    <TableCell >Active</TableCell>
                                                    <TableCell >Updated</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                
                                                    <TableRow>
                                                        <TableCell component="th" scope="row" >{vo.confirmed}</TableCell>
                                                        <TableCell component="th" scope="row">{vo.recovered}</TableCell>
                                                        <TableCell component="th" scope="row">{vo.deaths}</TableCell>
                                                        <TableCell component="th" scope="row">{vo.active}</TableCell>
                                                        <TableCell component="th" scope="row">{vo.lastupdatedtime}</TableCell>
                                                    </TableRow>
                                                
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                    ) : loading && <div className="mt-4" style={loader}>
                        <Loader type="Oval" color="#fd7e14" height={100} width={100} />
                    </div>
            }
        </div>
    )
}




