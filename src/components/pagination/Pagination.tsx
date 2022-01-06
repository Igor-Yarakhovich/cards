import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch} from 'react-redux';
import {setPageAC, setPageCountAC} from '../packs/packsReducer';

type PageCountPropsType = {
    cardPacksTotalCount: number,
    page: number,
    pageCount: number
}

export default function TablePaginationDemo(props: PageCountPropsType) {

    const dispatch = useDispatch()

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(setPageAC(newPage))
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(setPageCountAC(parseInt(event.target.value, 10)))
    };

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
