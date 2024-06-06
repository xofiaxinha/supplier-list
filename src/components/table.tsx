import { ComponentProps } from 'react';

interface TableProps extends ComponentProps<'div'>{}
interface TableHeaderProps extends ComponentProps<'div'>{}
interface TableCellProps extends ComponentProps<'div'>{}
interface TableRowProps extends ComponentProps<'div'>{}

export function Table(props: TableProps){
    return(
        <div className="table-container">
            {props.children}
        </div>
        
    );
}
export function TableHeader(props: TableHeaderProps){
    return(
        <div className="table-header">
            {props.children}
        </div>
    );
}
export function TableCell(props: TableCellProps){
    const cname = "table-cell" + (props.className ? ` ${props.className}` : '');
    return(
        <div className= {cname}>
            {props.children}
        </div>
    );
}
export function TableRow(props: TableRowProps){
    return (
        <div className="table-row">
            {props.children}
        </div>
    );
}