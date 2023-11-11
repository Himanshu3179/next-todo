import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const TodoTable = () => {
    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <input type="checkbox" name="" id="" />
                    </TableCell>
                    <TableCell
                        width="100%"
                    >
                        <input type="text" name="" id="" className='w-full font-bold text-lg' value={"hello"} disabled />
                    </TableCell>
                    <TableCell>
                        <Button>Update</Button>
                    </TableCell>
                    <TableCell>
                        <Button>Delete</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default TodoTable;