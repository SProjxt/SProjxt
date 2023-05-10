// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostShowProjectsResp {
  projectList: ProjectCard[];
}

export interface ProjectCard {
  projectName: string;
  members: string[];
}
