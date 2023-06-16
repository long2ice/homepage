import { Box, Center, Grid, GridItem, Image, Link } from "@chakra-ui/react";

interface Repo {
  username: string;
  repo: string;
}

function Projects(props: Record<string, any>) {
  const projects: Array<Repo> = [
    {
      username: "tortoise",
      repo: "tortoise-orm",
    },
    {
      username: "tortoise",
      repo: "aerich",
    },
    {
      username: "fastapi-admin",
      repo: "fastapi-admin",
    },
    {
      username: "long2ice",
      repo: "fastapi-cache",
    },
    {
      username: "long2ice",
      repo: "synch",
    },
    {
      username: "long2ice",
      repo: "fastapi-limiter",
    },
    {
      username: "long2ice",
      repo: "asyncmy",
    },
    {
      username: "long2ice",
      repo: "rearq",
    },
    {
      username: "long2ice",
      repo: "asynch",
    },
  ];

  return (
    <Box {...props}>
      <Center fontSize="2xl" as="em">
        My Open Source Projects
      </Center>
      <Grid mt="2%" gap={4} templateColumns="repeat(3, 1fr)">
        {projects.map((p) => (
          <GridItem>
            <Link
              href={`https://github.com/${p.username}/${p.repo}`}
              isExternal
            >
              <Image
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${p.username}&repo=${p.repo}`}
                alt="github stats"
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
