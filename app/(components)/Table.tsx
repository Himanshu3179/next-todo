import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const TableComponent = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Header 1</TableHead>
                    <TableHead>Header 2</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Cell 1</TableCell>
                    <TableCell>Cell 2</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default TableComponent;