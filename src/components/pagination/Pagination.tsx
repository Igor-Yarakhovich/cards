import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch} from 'react-redux';
import {setPageAC, setPageCountAC} from '../packs/packsReducer';

type PageCountPropsType={
    cardPacksTotalCount:number,
    page:number,
    pageCount:number
}

export default function TablePaginationDemo(props:PageCountPropsType) {

    const dispatch=useDispatch()
    // const [page, setPage] = React.useState(1);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(setPageAC(newPage))

        //setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        //setRowsPerPage();

        dispatch(setPageCountAC(parseInt(event.target.value, 10)))
        //dispatch(setPageCountAC(0))

    };
    console.log(props.page)

    return (
        <TablePagination
            component="div"
            count={props.cardPacksTotalCount}
            page={props.page}
            onPageChange={handleChangePage}
            rowsPerPage={props.pageCount}
            onRowsPerPageChange={handleChangeRowsPerPage}


        />
    );
}
