type nestedlist = {
  id: number;
  title: string;
  path: string;
  child: {
    id: number;
    title: string;
    path: string;
  }[];
};
let numid = 0;

export const Intro_section: nestedlist[] = [
  { id: numid++, title: "Introduction", path: "/introduction", child: [] },
  { id: numid++, title: "Auth", path: "/auth", child: [] },
  { id: numid++, title: "Requests", path: "/Request", child: [] },
  { id: numid++, title: "Streaming", path: "/streaming", child: [] },
];
export const Ends_section: nestedlist[] = [
  {
    title: "Audio",
    path: "/audio",
    id: numid++,
    child: [
      { id: numid++, title: "Audio1", path: "/audio/1" },
      { id: numid++, title: "Audio2", path: "/audio/2" },
      { id: numid++, title: "Audio3", path: "/audio/3" },
      { id: numid++, title: "Audio4", path: "/audio/4" },
    ],
  },
  {
    title: "Chat",
    path: "/chat",
    id: numid++,
    child: [
      { id: numid++, title: "Chat1", path: "/chat/1" },
      { id: numid++, title: "Chat2", path: "/chat/2" },
      { id: numid++, title: "Chat3", path: "/chat/3" },
    ],
  },
  {
    title: "File",
    path: "/file",
    id: numid++,
    child: [
      { id: numid++, title: "File1", path: "/file/1" },
      { id: numid++, title: "File2", path: "/file/2" },
      { id: numid++, title: "File3", path: "/file/3" },
    ],
  },
  {
    title: "Image",
    path: "/image",
    id: numid++,
    child: [
      { id: numid++, title: "Audio", path: "/audio" },
      { id: numid++, title: "Audio", path: "/audio" },
      { id: numid++, title: "Audio", path: "/audio" },
    ],
  },
];

// export const allElements = [...Intro_section, ...Ends_section];
export const allElements = [
  ...Intro_section.map((item) => item.path),
  ...Ends_section.flatMap((item) => [
    item.path,
    ...(item.child ? item.child.map((child) => child.path) : []),
  ]),
];
