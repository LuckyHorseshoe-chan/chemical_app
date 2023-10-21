import { useTable, usePagination } from "react-table";
import {
    Center,
    Box,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";


function Table(){
    const [getArray, setArray] = useState([]);

    useEffect(() => {
        axios({
        method: "GET",
        baseURL: "https://63f46dec3f99f5855daf40a5.mockapi.io/api/pk/pkdatas"
        }).then((res) => {
        setArray(res.data);
        });
    }, []);

    const products = getArray;

    const columns = [
        { dataField: "id", text: "Id" },
        { dataField: "no", text: "Name" },
        { dataField: "createdAt", text: "Animal" },
        { dataField: "cost", text: "Animal" },
        { dataField: "quantity", text: "Animal" },
        { dataField: "reason", text: "Animal" },
        { dataField: "status", text: "Animal" }
    ];
    console.log(getArray);

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 2,
        lastPageText: ">>",
        firstPageText: "<<",
        nextPageText: ">",
        prePageText: "<",
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
        console.log("page", page);
        console.log("sizePerPage", sizePerPage);
        }
    });
    return(
        <Center>
            <Box fontStyle='Roboto'>
                <Text>Data Tables</Text>
                <Box>
                    <Text>
                        Nanoparticles Data Table
                    </Text>
                    <BootstrapTable
                        bootstrap4
                        keyField="id"
                        data={products}
                        columns={columns}
                        // defaultSorted={defaultSorted}
                        pagination={pagination}
                    />
                </Box>
            </Box>
        </Center>
    )
}

export default Table;