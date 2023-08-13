import { Container, Box, Typography, Avatar } from "@mui/material"

export default function About() {
    return (
        <Container>
        <Box sx={{ mx: { lg: 20, md: 10 } }}>
            <Typography variant="h1">About Us</Typography>
            <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt harum reprehenderit fugit eligendi repellat porro culpa enim quos ex exercitationem.</Typography>
            <Box sx={{ display: 'flex', mt: 3 }} >
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
            </Box>
        </Box>
      </Container>
    )
}