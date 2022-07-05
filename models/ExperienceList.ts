export type ExperienceType = {
  Company: string;
  Website: string;
  Experience: ExperienceDescription[];
};

export type ExperienceDescription = {
  Year: string;
  Description: string[];
};

export const ExperienceList: ExperienceType[] = [
  {
    Company: "Microsoft",
    Website: "https://www.microsoft.com/",
    Experience: [
      {
        Year: "2022",
        Description: [
          `Working on Microsoft Fraud Protection Tools to minimize 
          fraudulent activities across all Microsoft Line of Business.
          Developing micro-services and resdesigning architecture to improve the
          performance of the application. Working on adding various new features to help users minimize fraud
          all over Microsoft Commerce Ecosystem.`,
        ],
      },
    ],
  },
  {
    Company: "Pactera EDGE",
    Website: "https://www.pacteraedge.com/",
    Experience: [
      {
        Year: "2022",
        Description: [
          `Working on Microsoft Fraud Protection Tools to minimize 
          fraudulent activities across all Microsoft Line of Business.
          Successfully migrated legacy code base from .NET framework 4.7.1 to .NET 6.
          Redesigned application from monolithic to micro-services architecture`,
        ],
      },
      {
        Year: "2021",
        Description: [
          `Working on Microsoft Fraud Protection Tools to minimize 
          fraudulent activities across all Microsoft Line of Business.
          Successfully migrated legacy code base from .NET framework 4.7.1 to .NET 6.`,
        ],
      },
    ],
  },
  {
    Company: "MAQ Software",
    Website: "https://maqsoftware.com",
    Experience: [
      {
        Year: "2021",
        Description: [
          `Worked closely with other developers, 
          to develop new features on a web app according to requirements of the client. 
          Wrote well tested code in C# with ASP.NET for backend development and
          JavaScript with jQuery for frontend development along with Razor
          framework from Microsoft. Also worked on fixing bugs and
          resolving incidents in the production environment. 
          Currently working on migrating the legacy front-end to React.`,
        ],
      },
      {
        Year: "2020",
        Description: [
          `Developed a web app
          from scratch using ASP.NET Core using C# for backend
          development and Angular 2+ (TypeScript) for the
          front-end. The app was secured with Azure Active
          Directory authentication allowing only users within the
          organization access to the Portal. The portal is used
          daily by many users in the organization.`,
          `Implemented a custom
          people - picker component, with add and delete
          functionalities on a Dynamics 365 portal using
          JavaScript, which allows the authenticated user to
          search for other users in his organization. The
          component authenticated the users on the basis of the
          MSAL library provided by Microsoft.`,
          `Worked closely with
          other developers to develop new features on a web app
          according to the requirements provided by the client.
          Performed unit testing on all the C# code that was
          developed by me, to provide clean and tested features.
          The web app uses ASP.NET Framework with C# for the
          backend and CSHTML and JavaScript for the front-end.
          Also racked up some experience of working with Azure
          Cosmos DB while working on the project.`,
        ],
      },
      {
        Year: "2019",
        Description: [
          `Collaborated with other
          developers to develop new features according to client
          requirements. Wrote well-tested code in C# and Angular JS
          for an ASP.NET Framework Web App.`,
        ],
      },
    ],
  },
];
