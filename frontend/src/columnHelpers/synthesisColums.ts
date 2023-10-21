import { createColumnHelper } from '@tanstack/react-table'
import Synthesis from '../types/Synthesis';

const columnHelper = createColumnHelper<Synthesis>();
    
const synthesisColumns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "Id"
    }),
    columnHelper.accessor("np_id", {
        cell: (info) => info.getValue(),
        header: "NPs id"
    }),
    columnHelper.accessor("method", {
        cell: (info) => info.getValue(),
        header: "Method",
        meta: {
            isNumeric: true
        }
    }),
    columnHelper.accessor("article_id", {
        cell: (info) => info.getValue(),
        header: "Article id"
    }),
];

export default synthesisColumns;