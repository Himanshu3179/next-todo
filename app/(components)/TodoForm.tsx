import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function TodoForm() {
    return (
        <div className="flex w-full  items-center space-x-2">
            <Input type="text" placeholder="New Todo..." />
            <Button type="submit">Add</Button>
        </div>
    )
}