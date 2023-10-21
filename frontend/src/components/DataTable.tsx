import {
    Center,
    Box,
    Flex,
    Spacer,
    Text,
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td,
    Input,
    Tooltip,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    IconButton
} from "@chakra-ui/react";
import {
    ArrowRightIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
    ChevronLeftIcon
  } from "@chakra-ui/icons";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
    createColumnHelper
  } from '@tanstack/react-table'
import { useAppSelector } from '../hooks';
import { selectDatabase } from '../features/databaseSlice';
import nanoparticleColumns from "../columnHelpers/nanoparticleColumns";
import materialColumns from "../columnHelpers/materialColums";
import synthesisColumns from "../columnHelpers/synthesisColums";
import novaColumns from "../columnHelpers/novaColumns";


function DataTable(){
    const database = useAppSelector(selectDatabase);
    const data: any  =  
    database.column === "Nanoparticle" ? database.data.nanoparticle : 
    database.column === "Material" ? database.data.material :
    database.column === "Synthesis" ? database.data.synthesis : database.data.nova
    
    const columns: any = database.column === "Nanoparticle" ? nanoparticleColumns : 
    database.column === "Material" ? materialColumns : 
    database.column === "Synthesis" ? synthesisColumns : novaColumns
      
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
      })
    console.log(data)
    return(
        <Center>
            <Box fontStyle='Roboto' mt='3vh' w='81vw'>
                <Text as='b' fontSize='xl'>
                    Data Tables
                </Text>
                <Box 
                    mt='5vh' 
                    border='1px' 
                    borderColor='gray.200'
                    bg='white'>
                        <Center>
                            <Box w='78vw' mt='2vh'>
                                <Text as='b' fontSize='xl'>
                                    {database.column} Data Table
                                </Text>
                                <Flex mt='2vh'>
                                    <Center mr='10px'>Show</Center>
                                    <Select
                                        w={20}
                                        value={table.getState().pagination.pageSize}
                                        onChange={(e: any) => {
                                            table.setPageSize(Number(e.target.value));
                                        }}
                                    >
                                        {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize}
                                        </option>
                                        ))}
                                    </Select>
                                    <Center ml='10px'>entries</Center>
                                    <Spacer />
                                    <Center>Search:</Center>
                                    <Input w='200px' ml='10px'></Input>
                                </Flex>
                                <Table border='1px' borderColor='gray.200' size='sm' variant='striped' colorScheme='teal'>
                                    <Thead>
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <Tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => {
                                            return (
                                            <Th key={header.id} colSpan={header.colSpan}>
                                                {header.isPlaceholder ? null : (
                                                <div>
                                                    {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                    )}
                                                </div>
                                                )}
                                            </Th>
                                            )
                                        })}
                                        </Tr>
                                    ))}
                                    </Thead>
                                    <Tbody>
                                    {table.getRowModel().rows.map(row => {
                                        return (
                                        <Tr key={row.id}>
                                            {row.getVisibleCells().map(cell => {
                                            return (
                                                <Td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                                </Td>
                                            )
                                            })}
                                        </Tr>
                                        )
                                    })}
                                    </Tbody>
                                </Table>
                                <Flex 
                                    mt='4vh' 
                                    mb='2vh' 
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Flex>
                                        <Tooltip label="First Page">
                                            <IconButton
                                            onClick={() => table.setPageIndex(0)}
                                            aria-label="First Page"
                                            isDisabled={!table.getCanPreviousPage()}
                                            icon={<ArrowLeftIcon h={3} w={3} />}
                                            mr={4}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Previous Page">
                                            <IconButton
                                            onClick={() => table.previousPage()}
                                            aria-label="Previous Page"
                                            isDisabled={!table.getCanPreviousPage()}
                                            icon={<ChevronLeftIcon h={6} w={6} />}
                                            />
                                        </Tooltip>
                                    </Flex>
                                    <Flex alignItems="center">
                                        <Text flexShrink="0" mr={8}>
                                            Page{" "}
                                            <Text fontWeight="bold" as="span">
                                                {table.getState().pagination.pageIndex + 1}
                                            </Text>{" "}
                                            of{" "}
                                            <Text fontWeight="bold" as="span">
                                                {table.getPageCount()}
                                            </Text>
                                        </Text>
                                        <Text flexShrink="0">Go to page:</Text>{" "}
                                        <NumberInput
                                            ml={2}
                                            mr={8}
                                            w={28}
                                            min={1}
                                            max={table.getPageCount()}
                                            onChange={(e: any) => {
                                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                                table.setPageIndex(page)
                                            }}
                                            defaultValue={table.getState().pagination.pageIndex + 1}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                        </Flex>

                                        <Flex>
                                        <Tooltip label="Next Page">
                                            <IconButton
                                            onClick={() => table.nextPage()}
                                            aria-label="Next Page"
                                            isDisabled={!table.getCanNextPage()}
                                            icon={<ChevronRightIcon h={6} w={6} />}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Last Page">
                                            <IconButton
                                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                                aria-label="Last Page"
                                                isDisabled={!table.getCanNextPage()}
                                                icon={<ArrowRightIcon h={3} w={3} />}
                                                ml={4}
                                                />
                                        </Tooltip>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Center>
                </Box>
            </Box>
        </Center>
    )
}

export default DataTable;