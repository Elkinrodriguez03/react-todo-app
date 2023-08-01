import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";

 function TodosLoading() {
    return (
        <Box sx={{ justifyItems: 'center', padding: '20px' }}>
            <CircularProgress />
        </Box>
    )
 }

 export { TodosLoading };