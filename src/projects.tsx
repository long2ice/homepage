import {
  Box,
  Center,
  Grid,
  GridItem,
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
    {
      username: "long2ice",
      repo: "rearq",
    },
    {
      username: "long2ice",
      repo: "asynch",
    },
  ];
  const products: Array<Product> = [
    {
      title: "TelSearch",
      description: "Search for Telegram channels and groups",
      link: "https://telsearch.long2ice.io",
    },
    {
      title: "PanSearch",
      description: "Cloud drive search",
      link: "https://pansearch.long2ice.io",
    },
    {
      title: "VPSMON",
      description: "VPS provider gather and monitor",
      link: "https://vpsmon.long2ice.io",
    },
    {
      title: "Gema",
      description: "Convert from json/xml/yaml to Pydantic/Go/Rust etc.",
      link: "https://gema.long2ice.io",
    },
  ];
  return (
    <Box {...props}>
      <Center fontSize="2xl" as="em">
        My Awesome Products
      </Center>
      <Grid mt="2%" templateColumns="repeat(3, 1fr)" gap={4}>
        {products.map((product) => (
          <GridItem>
            <LinkBox textDecoration="none" h="100%">
              <Box
                borderWidth="1px"
                borderRadius="5px"
                overflow="hidden"
                padding={4}
                h="100%"
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
      <Center mt="2%" fontSize="2xl" as="em">
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
