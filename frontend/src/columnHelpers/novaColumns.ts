import { createColumnHelper } from '@tanstack/react-table'
import Nova from '../types/Nova';

const columnHelper = createColumnHelper<Nova>();

const novaColumns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "Id"
    }),
    columnHelper.accessor("np_id", {
        cell: (info) => info.getValue(),
        header: "NPs id",
    }),
    columnHelper.accessor("method", {
        cell: (info) => info.getValue(),
        header: "Method"
    }),
    columnHelper.accessor("absorbat", {
        cell: (info) => info.getValue(),
        header: "Absorbat",
    }),
    columnHelper.accessor("pore_size", {
        cell: (info) => info.getValue(),
        header: "Pore size",
        meta: {
            isNumeric: true
        }
    }),
    columnHelper.accessor("density", {
        cell: (info) => info.getValue(),
        header: "Density",
        meta: {
            isNumeric: true
        }
    }),
];
export default novaColumns;