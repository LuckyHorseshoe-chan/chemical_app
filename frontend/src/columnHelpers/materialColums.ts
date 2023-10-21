import { createColumnHelper } from '@tanstack/react-table'
import Material from '../types/Material';

const columnHelper = createColumnHelper<Material>();
    
const materialColumns = [
    columnHelper.accessor("mat_id", {
        cell: (info) => info.getValue(),
        header: "Id"
    }),
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: "Material"
    }),
    columnHelper.accessor("synonyms", {
        cell: (info) => info.getValue(),
        header: "Synonyms",
    }),
    columnHelper.accessor("chem_form", {
        cell: (info) => info.getValue(),
        header: "Chemical form"
    }),
    columnHelper.accessor("cas_num", {
        cell: (info) => info.getValue(),
        header: "Cas number",
        meta: {
            isNumeric: true
        }
    }),
];

export default materialColumns;