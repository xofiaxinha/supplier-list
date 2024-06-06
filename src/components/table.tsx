import { ComponentProps } from 'react';

interface TableProps extends ComponentProps<'table'>{}
interface TableProps extends ComponentProps<'table'>{}
interface TableHeaderProps extends ComponentProps<'th'>{}
interface TableCellProps extends ComponentProps<'td'>{}
interface TableRowProps extends ComponentProps<'tr'>{}

export function Table(props: TableProps){
    return(
        <div className="table-container">
            <table className="table">
                {props.children}
            </table>
        </div>
        
    );
}
export function TableHeader(props: TableHeaderProps){
    return(
        <th className="table-header"{...props} />
    );
}
export function TableCell(props: TableCellProps){
    return(
        <td {...props} />
    );
}
export function TableRow(props: TableRowProps){
    return (
        <tr {...props} className="table-row" />
    );
}