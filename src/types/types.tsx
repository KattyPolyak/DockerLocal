import { SetStateAction, Dispatch } from "react";

export type Project = {
  projectName: string;
  projectId: string;
  projectRepos: readonly Repo[];
};

export type Repo = {
  repoName: string;
  repoId: string;
  repoOwner: string;
  isIncluded?: boolean;
};

export type User = {
  userName: string;
  userId: string;
};

export type ProjectReposType = {
  personal: readonly Repo[];
  organizations: readonly Repo[];
  collaborations: readonly Repo[];
};

export type RepoSearchListItemProps = {
  repo: Repo;
  selectedRepos: readonly Repo[];
  setSelectedRepos: Dispatch<SetStateAction<Repo[]>>;
  projectList: readonly Project[];
  activeProject: string;
};

export type AddReposProps = {
  showAddRepos: boolean;
  setShowAddRepos: Dispatch<SetStateAction<boolean>>;
  activeProject: string;
  projectList: readonly Project[];
  setProjectList: Dispatch<SetStateAction<Project[]>>;
};

export type ProjectPageProps = {
  activeProject: string;
  userInfo: User;
  projectList: readonly Project[];
  setProjectList: Dispatch<SetStateAction<Project[]>>;
};

export type ProjectRepoListItemProps = {
  activeProject: string;
  repo: Repo;
  projectList: readonly Project[];
  setProjectList: Dispatch<SetStateAction<Project[]>>;
};

export type RepoResponseType = {
  personal: readonly Repo[];
  organizations: readonly Repo[];
  collaborations: readonly Repo[];
};

export type ProjectSideBarProps = {
  setShowProjectSidebarModal: Dispatch<SetStateAction<boolean>>;
  projectList: readonly Project[];
  setProjectList: Dispatch<SetStateAction<Project[]>>;
};

export type SidebarButtonProps =  Project & {
  activeProject: string;
  setActiveProject: Dispatch<SetStateAction<string>>;
};
