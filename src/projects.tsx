import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

interface Repo {
  username: string;
  repo: string;
}

interface Product {
  title: string;
  description: string;
  link: string;
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
  ];
  const products: Array<Product> = [
    {
      title: "TelSearch",
      description: "Search for telegram",
      link: "https://telsearch.long2ice.io",
    },
    {
      title: "Awesome",
      description: "Search for awesome projects",
      link: "https://awesome.long2ice.io",
    },
  ];
  return (
    <div {...props}>
      <div>
        <Text fontSize="4xl" as="em">
          My Awesome Products
        </Text>
        <Grid mt="2%" templateColumns="repeat(3, 1fr)">
          {products.map((product) => (
            <GridItem>
              <LinkBox textDecoration="none">
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="5px"
                  overflow="hidden"
                  padding={2}
                >
                  <Text fontSize="xl" fontWeight="medium" color="#3081ED">
                    {product.title}
                  </Text>
                  <Text color="#434D58">{product.description}</Text>
                </Box>
                <LinkOverlay href={product.link} isExternal />
              </LinkBox>
            </GridItem>
          ))}
        </Grid>
      </div>
      <Box mt="2%">
        <Text fontSize="4xl" as="em">
          My Open Source Projects
        </Text>
      </Box>
      <Grid mt="2%" gap={4} templateColumns="repeat(3, 1fr)">
        {projects.map((p) => (
          <GridItem>
            <Link
              href={`https://github.com/${p.username}/${p.repo}`}
              isExternal
            >
              <Image
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${p.username}&repo=${p.repo}`}
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
