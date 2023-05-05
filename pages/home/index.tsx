import HeadComponent from '@/components/common/HeadComponent';
import NavigationBar from '@/components/common/NavigationBar/NavigationBar';
import MainInfo from '@/components/home/MainInfo';
import ProjectsInfo from '@/components/home/ProjectsInfo';
import { graphql } from '@octokit/graphql';
import { env } from '@/env.mjs';

import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import type { graphqlResponse } from '@/utils/types';

export const getStaticProps: GetStaticProps<{
  ghResponse: graphqlResponse;
}> = async () => {
  // const ghResponse: graphqlResponse = await graphql(
  //   `
  //     {
  //       user(login: "prashantrahul141") {
  //         pinnedItems(first: 6, types: [REPOSITORY]) {
  //           totalCount
  //           edges {
  //             node {
  //               ... on Repository {
  //                 name
  //                 repositoryTopics(first: 3) {
  //                   edges {
  //                     node {
  //                       id
  //                       topic {
  //                         id
  //                         name
  //                       }
  //                     }
  //                   }
  //                 }
  //                 primaryLanguage {
  //                   id
  //                   name
  //                 }
  //                 description
  //                 url
  //                 stargazerCount
  //                 owner {
  //                   login
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  //   {
  //     headers: {
  //       authorization: `bearer ${env.GITHUB_GRAPHQL_API_KEY}`,
  //     },
  //   }
  // );

  // temp data
  const _ghResponse = {
    user: {
      pinnedItems: {
        totalCount: 6,
        edges: [
          {
            node: {
              name: 'plex',
              repositoryTopics: {
                edges: [
                  {
                    node: {
                      id: 'RT_kwDOI4WolM4C7kIX',
                      topic: {
                        id: 'TO_kgCtY3JlYXRlLXQzLWFwcA',
                        name: 'create-t3-app',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOI4WolM4C7kIY',
                      topic: {
                        id: 'MDU6VG9waWNuZXh0LWF1dGg=',
                        name: 'next-auth',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOI4WolM4C7kIZ',
                      topic: {
                        id: 'MDU6VG9waWNuZXh0anM=',
                        name: 'nextjs',
                      },
                    },
                  },
                ],
              },
              primaryLanguage: {
                id: 'MDg6TGFuZ3VhZ2UyODc=',
                name: 'TypeScript',
              },
              description: 'A Social Media Web App.',
              url: 'https://github.com/prashantrahul141/plex',
              stargazerCount: 6,
              owner: {
                login: 'prashantrahul141',
              },
            },
          },
          {
            node: {
              name: 't3-todo',
              repositoryTopics: {
                edges: [
                  {
                    node: {
                      id: 'RT_kwDOIuw3M84C4pxJ',
                      topic: {
                        id: 'MDU6VG9waWNuZXh0LWF1dGg=',
                        name: 'next-auth',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIuw3M84C4pxK',
                      topic: {
                        id: 'MDU6VG9waWNuZXh0anM=',
                        name: 'nextjs',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIuw3M84C4pxL',
                      topic: {
                        id: 'MDU6VG9waWNwcmlzbWE=',
                        name: 'prisma',
                      },
                    },
                  },
                ],
              },
              primaryLanguage: {
                id: 'MDg6TGFuZ3VhZ2UyODc=',
                name: 'TypeScript',
              },
              description: 'A to do app made using the t3 stack.',
              url: 'https://github.com/prashantrahul141/t3-todo',
              stargazerCount: 1,
              owner: {
                login: 'prashantrahul141',
              },
            },
          },
          {
            node: {
              name: 'PlayInSync-Server',
              repositoryTopics: {
                edges: [
                  {
                    node: {
                      id: 'RT_kwDOIc7rU84CxhzX',
                      topic: {
                        id: 'MDU6VG9waWNleHByZXNz',
                        name: 'express',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIc7rU84CxhzY',
                      topic: {
                        id: 'MDU6VG9waWN0eXBlc2NyaXB0',
                        name: 'typescript',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIc7rU84C3DbX',
                      topic: {
                        id: 'MDU6VG9waWNub2RlanM=',
                        name: 'nodejs',
                      },
                    },
                  },
                ],
              },
              primaryLanguage: {
                id: 'MDg6TGFuZ3VhZ2UyODc=',
                name: 'TypeScript',
              },
              description: 'Server code for PlayInSync.',
              url: 'https://github.com/prashantrahul141/PlayInSync-Server',
              stargazerCount: 0,
              owner: {
                login: 'prashantrahul141',
              },
            },
          },
          {
            node: {
              name: 'PlayInSync-Client',
              repositoryTopics: {
                edges: [
                  {
                    node: {
                      id: 'RT_kwDOIc7scs4Cxhy-',
                      topic: {
                        id: 'MDU6VG9waWN0eXBlc2NyaXB0',
                        name: 'typescript',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIc7scs4C3Dbe',
                      topic: {
                        id: 'MDU6VG9waWNqYXZhc2NyaXB0',
                        name: 'javascript',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIc7scs4C3Dbf',
                      topic: {
                        id: 'MDU6VG9waWN2aWRlbw==',
                        name: 'video',
                      },
                    },
                  },
                ],
              },
              primaryLanguage: {
                id: 'MDg6TGFuZ3VhZ2UxNDA=',
                name: 'JavaScript',
              },
              description: 'Client code for PlayInSync.',
              url: 'https://github.com/prashantrahul141/PlayInSync-Client',
              stargazerCount: 0,
              owner: {
                login: 'prashantrahul141',
              },
            },
          },
          {
            node: {
              name: 'ImageEffects',
              repositoryTopics: {
                edges: [
                  {
                    node: {
                      id: 'RT_kwDOIqTJ8s4C3AJq',
                      topic: {
                        id: 'MDU6VG9waWNpbWFnZS1tYW5pcHVsYXRpb24=',
                        name: 'image-manipulation',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIqTJ8s4C3AJr',
                      topic: {
                        id: 'MDU6VG9waWNwaWxsb3c=',
                        name: 'pillow',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIqTJ8s4C3AJs',
                      topic: {
                        id: 'MDU6VG9waWNweXRob24=',
                        name: 'python',
                      },
                    },
                  },
                ],
              },
              primaryLanguage: {
                id: 'MDg6TGFuZ3VhZ2UxNDU=',
                name: 'Python',
              },
              description: 'A library to add effects to your images.',
              url: 'https://github.com/prashantrahul141/ImageEffects',
              stargazerCount: 0,
              owner: {
                login: 'prashantrahul141',
              },
            },
          },
          {
            node: {
              name: 'Simple-Blog-App-with-NEXTJS',
              repositoryTopics: {
                edges: [
                  {
                    node: {
                      id: 'RT_kwDOIZI5ls4CxC0s',
                      topic: {
                        id: 'MDU6VG9waWNuZXh0anM=',
                        name: 'nextjs',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIZI5ls4C3Czb',
                      topic: {
                        id: 'MDU6VG9waWNibG9nZ2luZw==',
                        name: 'blogging',
                      },
                    },
                  },
                  {
                    node: {
                      id: 'RT_kwDOIZI5ls4C3Cz5',
                      topic: {
                        id: 'MDU6VG9waWNtb25nb2Ri',
                        name: 'mongodb',
                      },
                    },
                  },
                ],
              },
              primaryLanguage: {
                id: 'MDg6TGFuZ3VhZ2UyODc=',
                name: 'TypeScript',
              },
              description:
                'A Simple Blogging App made with NEXTJS, TypeScript, MongoDB and plain CSS.',
              url: 'https://github.com/prashantrahul141/Simple-Blog-App-with-NEXTJS',
              stargazerCount: 0,
              owner: {
                login: 'prashantrahul141',
              },
            },
          },
        ],
      },
    },
  };

  return {
    props: { ghResponse: _ghResponse },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  ghResponse,
}) => {
  return (
    <>
      <HeadComponent></HeadComponent>
      <NavigationBar defaultValue={0} />
      <MainInfo></MainInfo>
      <ProjectsInfo ghResponse={ghResponse}></ProjectsInfo>
    </>
  );
};

export default Home;
