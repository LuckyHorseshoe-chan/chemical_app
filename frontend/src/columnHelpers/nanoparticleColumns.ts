import { createColumnHelper } from '@tanstack/react-table'
import Nanoparticle from '../types/Nanoparticle';

const columnHelper = createColumnHelper<Nanoparticle>();
    
const nanoparticleColumns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "NPs id"
    }),
    columnHelper.accessor("np_str", {
        cell: (info) => info.getValue(),
        header: "Nanoparticle"
    }),
    columnHelper.accessor("size", {
        cell: (info) => info.getValue(),
        header: "Size",
        meta: {
            isNumeric: true
        }
    }),
    columnHelper.accessor("article_id", {
        cell: (info) => info.getValue(),
        header: "Article id"
    }),
    columnHelper.accessor("mep_id", {
        cell: (info) => info.getValue(),
        header: "MEP id"
    }),
];

export default nanoparticleColumns;